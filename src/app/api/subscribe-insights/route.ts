import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import {
  sendInsightsSubscriptionNotification,
  sendInsightsWelcomeEmail,
  InsightsSubscriptionData,
} from "@/lib/resend";
import { isEmailUnsubscribed } from "@/lib/unsubscribe";

const insightsSubscriptionSchema = z.object({
  email: z.string().email("Invalid email address"),
  userAgent: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = insightsSubscriptionSchema.parse(body);

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
    const subscriptionData: InsightsSubscriptionData = {
      ...validatedData,
      timestamp: new Date().toISOString(),
    };

    // Send both emails in parallel using Promise.all
    const [notificationResult, welcomeResult] = await Promise.allSettled([
      sendInsightsSubscriptionNotification(subscriptionData),
      sendInsightsWelcomeEmail(subscriptionData),
    ]);

    // Check if the main notification email was successful
    const notificationSuccess =
      notificationResult.status === "fulfilled" && notificationResult.value.success;
    const welcomeSuccess = welcomeResult.status === "fulfilled" && welcomeResult.value.success;

    if (notificationSuccess) {
      return NextResponse.json({
        success: true,
        message: "Successfully subscribed to insights newsletter!",
        data: {
          email: validatedData.email,
          timestamp: subscriptionData.timestamp,
          welcomeEmailSent: welcomeSuccess,
        },
      });
    } else {
      const errorMessage =
        notificationResult.status === "rejected"
          ? notificationResult.reason
          : notificationResult.value.error || "Failed to send subscription notification";

      return NextResponse.json(
        {
          success: false,
          message: "Failed to subscribe to insights newsletter",
          error: errorMessage,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in insights subscription API:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request data",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

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
