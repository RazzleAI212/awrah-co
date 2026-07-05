export async function POST(request) {
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)
  
    const { name, email, subject, message } = await request.json()
  
    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }
  
    try {
      await resend.emails.send({
        from: "Awrah Co Contact Form <onboarding@resend.dev>",
        to: "razzleai@hotmail.com",
        replyTo: email,
        subject: subject ? `New enquiry: ${subject}` : "New contact form enquiry",
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
      })
  
      return Response.json({ success: true }, { status: 200 })
    } catch (error) {
      return Response.json({ error: "Failed to send email" }, { status: 500 })
    }
  }