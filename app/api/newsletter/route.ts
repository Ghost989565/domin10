import { NextResponse } from "next/server"
import { Resend } from "resend"

// Audience/contact list ID in Resend (optional - for adding to a list)
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const trimmedEmail = email.trim().toLowerCase()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      // Development fallback: log the signup (add RESEND_API_KEY for production)
      console.log("[Newsletter] Signup:", trimmedEmail)
      return NextResponse.json({ success: true, message: "Thank you for subscribing!" })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Add contact to Resend audience (create one at resend.com/audiences)
    if (AUDIENCE_ID) {
      await resend.contacts.create({
        audienceId: AUDIENCE_ID,
        email: trimmedEmail,
      })
    } else {
      // No audience configured - still accept signup (you can export logs or add audience later)
      console.log("[Newsletter] Signup (no audience):", trimmedEmail)
    }

    return NextResponse.json({ success: true, message: "Thank you for subscribing!" })
  } catch (error) {
    console.error("[Newsletter] Error:", error)
    return NextResponse.json(
      { error: "Unable to subscribe. Please try again later." },
      { status: 500 },
    )
  }
}
