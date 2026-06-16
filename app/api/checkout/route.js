export async function POST(request) {
    const Stripe = (await import("stripe")).default
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  
    const { cart } = await request.json()
  
    if (!cart || cart.length === 0) {
      return Response.json({ error: "Cart is empty" }, { status: 400 })
    }
  
    const lineItems = cart.map((item) => ({
      price_data: {
        currency: "gbp",
        product_data: {
          name: `${item.name} — ${item.colour}, Size ${item.size}`,
          images: [],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }))
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    })
  
    return Response.json({ url: session.url })
  }