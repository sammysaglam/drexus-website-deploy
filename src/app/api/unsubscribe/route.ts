import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const unsubscribeSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
});

// Handle GET request for one-click unsubscribe from email clients
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      // Redirect to unsubscribe page if no email provided
      return NextResponse.redirect(new URL("/unsubscribe", request.url));
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.redirect(new URL("/unsubscribe?error=invalid-email", request.url));
    }

    // Log the unsubscribe request (Resend handles unsubscribes automatically via headers)
    console.warn(`One-click unsubscribe request received: ${email}`);

    // Redirect to success page
    return NextResponse.redirect(
      new URL("/unsubscribe?email=" + encodeURIComponent(email) + "&success=true", request.url)
    );
  } catch (error) {
    console.error("One-click unsubscribe error:", error);
    return NextResponse.redirect(new URL("/unsubscribe?error=server-error", request.url));
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = unsubscribeSchema.parse(body);
    const email = validatedData.email.toLowerCase().trim();

    // Log the unsubscribe request (Resend handles unsubscribes automatically via headers)
    console.warn(`One-click unsubscribe POST request received: ${email}`);

    // Return blank page with 200 status as required by Resend for one-click unsubscribe
    return new NextResponse("", {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    });
  } catch (error) {
    console.error("Unsubscribe POST Error:", error);

    // Even on error, return blank page with 200 status for one-click unsubscribe
    return new NextResponse("", {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    });
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
