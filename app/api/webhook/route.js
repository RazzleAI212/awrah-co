export async function POST(request) {
    const Stripe = (await import("stripe")).default
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)
  
    const body = await request.text()
    const signature = request.headers.get("stripe-signature")
  
    let event
  
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      )
    } catch (error) {
      return Response.json({ error: "Invalid signature" }, { status: 400 })
    }
  
    if (event.type === "checkout.session.completed") {
      const session = event.data.object
  
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ["line_items"],
      })
  
      const items = fullSession.line_items.data
        .map((item) => `${item.description} x${item.quantity} — £${(item.amount_total / 100).toFixed(2)}`)
        .join("\n")
  
      const customerEmail = fullSession.customer_details.email.toLowerCase()
      const customerName = fullSession.customer_details.name
      const total = (fullSession.amount_total / 100).toFixed(2)
  
      try {
        await resend.emails.send({
          from: "Awrah Co <onboarding@resend.dev>",
          to: customerEmail,
          subject: "Your Awrah Co Order Confirmation",
          text: `Assalamu Alaykum ${customerName},\n\nJazakAllahu Khairan for your order!\n\nOrder Summary:\n${items}\n\nTotal: £${total}\n\nWe'll be in touch shortly with your tracking information.\n\nAwrah Co`,
        })
      } catch (error) {
        console.error("Failed to send confirmation email:", error)
      }
    }
  
    return Response.json({ received: true }, { status: 200 })
  }