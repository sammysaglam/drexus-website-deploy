import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { sendWelcomeEmail } from "@/lib/resend";

const welcomeEmailSchema = z.object({
  email: z.string().email("Invalid email address"),
  toolName: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = welcomeEmailSchema.parse(body);

    // Send the welcome email
    const result = await sendWelcomeEmail({
      email: validatedData.email,
      toolName: validatedData.toolName,
    });

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          message: "Welcome email sent successfully",
          data: result.data,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send welcome email",
          error: result.error,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Welcome Email API Error:", error);

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
        message: "Failed to send welcome email",
        error: error instanceof Error ? error.message : "Unknown error",
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
