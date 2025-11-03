import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const pricingFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  industry: z.string().min(1, "Industry is required"),
  companySize: z.string().min(1, "Company size is required"),
  role: z.string().min(1, "Role is required"),
  budget: z.string().min(1, "Budget is required"),
  projectType: z.string().min(1, "Project type is required"),
  timeline: z.string().optional(),
  projectDescription: z.string().min(1, "Project description is required"),
  currentChallenges: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = pricingFormSchema.parse(body);

    // Company size mapping to convert key to label
    const companySizeMap: Record<string, string> = {
      startup: "Startup (1-10 employees)",
      small: "Small (11-50 employees)",
      medium: "Medium (51-200 employees)",
      large: "Large (201-1000 employees)",
      enterprise: "Enterprise (1000+ employees)",
    };

    // Role mapping to convert key to label
    const roleMap: Record<string, string> = {
      "ceo-founder": "CEO/Founder",
      cto: "CTO",
      "vp-engineering": "VP Engineering",
      "engineering-manager": "Engineering Manager",
      "senior-engineer": "Senior Engineer",
      engineer: "Engineer",
      "product-manager": "Product Manager",
      "project-manager": "Project Manager",
      "scrum-master": "Scrum Master",
      devops: "DevOps Engineer",
      "data-scientist": "Data Scientist",
      analyst: "Business Analyst",
      consultant: "Consultant",
      other: "Other",
    };

    const companySizeLabel = companySizeMap[validatedData.companySize] || validatedData.companySize;
    const roleLabel = roleMap[validatedData.role] || validatedData.role;

    // Send email notification to Drexus team
    const result = await resend.emails.send({
      from: "Drexus Pricing Form <noreply@notifications.drexus.com>",
      to: ["anika.leila@drexus.com", "s@drexus.com"], // Replace with your actual email
      subject: `New Pricing Request from ${validatedData.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Pricing Request</h2>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Company:</strong> ${validatedData.company}</p>
            <p><strong>Industry:</strong> ${validatedData.industry}</p>
            <p><strong>Company Size:</strong> ${companySizeLabel}</p>
            <p><strong>Role:</strong> ${roleLabel}</p>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Project Details</h3>
            <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
            <p><strong>Budget Range:</strong> $${validatedData.budget}</p>
            ${validatedData.timeline ? `<p><strong>Timeline:</strong> ${validatedData.timeline}</p>` : ""}
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Project Description</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${validatedData.projectDescription}</p>
          </div>

          ${
            validatedData.currentChallenges
              ? `
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Current Challenges</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${validatedData.currentChallenges}</p>
          </div>
          `
              : ""
          }

          <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af;">
              <strong>Priority:</strong> This is a pricing request - follow up within 48 hours to maintain competitive advantage.
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            This email was automatically generated by the Drexus pricing form.
          </p>
        </div>
      `,
    });

    // Send auto-reply to the customer
    const autoReplyResult = await resend.emails.send({
      from: "Drexus <hello@notifications.drexus.com>",
      to: [validatedData.email],
      subject: "Thank you for your pricing request - Custom proposal coming soon!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1e3a8a; font-size: 28px; margin-bottom: 10px;">Thank You for Your Interest!</h1>
            <p style="color: #6b7280; font-size: 16px;">We're preparing a custom proposal for ${validatedData.company}</p>
          </div>

          <div style="background: #f8fafc; border-radius: 8px; margin-bottom: 20px; padding: 20px;">
            <h2 style="color: #1e3a8a; font-size: 20px; margin-bottom: 15px;">What Happens Next?</h2>
            <ul style="color: #374151; line-height: 1.6; padding-left: 20px;">
              <li>Our team will review your project requirements within 48 hours</li>
              <li>We'll prepare a detailed proposal tailored to your needs</li>
              <li>We'll schedule a discovery call to discuss your project in detail</li>
              <li>You'll receive a comprehensive proposal with timeline and pricing</li>
            </ul>
          </div>

          <div style="background: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 20px;">
            <h3 style="color: #1e3a8a; font-size: 16px; margin-bottom: 10px;">Why Choose Drexus?</h3>
            <ul style="color: #374151; line-height: 1.6; padding-left: 20px; margin: 0;">
              <li><strong>Enterprise Discipline:</strong> Rigorous processes and quality standards</li>
              <li><strong>Startup Speed:</strong> Agile delivery without compromising quality</li>
              <li><strong>Strategic Partnership:</strong> We become an extension of your team</li>
              <li><strong>Proven Track Record:</strong> 100+ successful projects delivered</li>
            </ul>
          </div>

          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1e3a8a; font-size: 16px; margin-bottom: 10px;">Project Summary</h3>
            <p style="color: #374151; line-height: 1.6; margin-bottom: 10px;">
              <strong>Project Type:</strong> ${validatedData.projectType}
            </p>
            <p style="color: #374151; line-height: 1.6; margin-bottom: 10px;">
              <strong>Budget Range:</strong> $${validatedData.budget}
            </p>
            ${
              validatedData.timeline
                ? `
            <p style="color: #374151; line-height: 1.6;">
              <strong>Timeline:</strong> ${validatedData.timeline}
            </p>
            `
                : ""
            }
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin-bottom: 5px;">
              Best regards,<br>
              The Drexus Team
            </p>
            <p style="color: #9ca3af; font-size: 12px;">
              <a href="https://drexus.com/legal/privacy" style="color: #6b7280;">Privacy Policy</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Pricing request submitted successfully",
        data: {
          notificationSent: result.data?.id,
          autoReplySent: autoReplyResult.data?.id,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Pricing form API error:", error);

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
        message: "Failed to submit pricing request",
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
