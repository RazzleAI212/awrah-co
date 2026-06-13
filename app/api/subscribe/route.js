export async function POST(request) {
    const { email } = await request.json()
  
    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 })
    }
  
    const forwarded = request.headers.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0].trim() : null
  
    const payload = { email_address: email }
if (ip && ip !== "::1" && ip !== "127.0.0.1") {
  payload.ip_address = ip
}
  
    const response = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
  
    if (!response.ok) {
      return Response.json({ error: "Something went wrong" }, { status: 500 })
    }
  
    return Response.json({ success: true }, { status: 200 })
  }