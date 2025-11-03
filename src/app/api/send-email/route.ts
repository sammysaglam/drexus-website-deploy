import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { sendEmailNotification, sendWelcomeEmail, EmailData } from "@/lib/resend";
import { isEmailUnsubscribed } from "@/lib/unsubscribe";

const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
  toolName: z.string().min(1, "Tool name is required"),
  userAgent: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = emailSchema.parse(body);

    // Check if email is unsubscribed before processing
    const isUnsubscribed = await isEmailUnsubscribed(validatedData.email);
    if (isUnsubscribed) {
      return NextResponse.json(
        {
          success: false,
          message: "This email address has been unsubscribed from our mailing list",
          unsubscribed: true,
        },
        { status: 400 }
      );
    }

    // Add timestamp
    const emailData: EmailData = {
      ...validatedData,
      timestamp: new Date().toISOString(),
    };

    // Send both emails in parallel using Promise.all
    const [notificationResult, welcomeResult] = await Promise.allSettled([
      sendEmailNotification(emailData),
      sendWelcomeEmail({
        email: emailData.email,
        toolName: emailData.toolName,
      }),
    ]);

    // Check if the main notification email was successful
    const notificationSuccess =
      notificationResult.status === "fulfilled" && notificationResult.value.success;
    const welcomeSuccess = welcomeResult.status === "fulfilled" && welcomeResult.value.success;

    if (notificationSuccess) {
      // Log welcome email status but don't fail the main request
      if (!welcomeSuccess) {
        console.error(
          "Failed to send welcome email:",
          welcomeResult.status === "rejected" ? welcomeResult.reason : welcomeResult.value.error
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: "Email notification sent successfully",
          welcomeEmailSent: welcomeSuccess,
        },
        { status: 200 }
      );
    } else {
      const error =
        notificationResult.status === "rejected"
          ? notificationResult.reason
          : notificationResult.value.error;

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email notification",
          error: error,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API Error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
