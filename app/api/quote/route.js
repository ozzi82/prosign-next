
export async function POST(req) {
  const form = await req.formData();
  const data = Object.fromEntries(form.entries());

  // TODO: Optionally send email using SMTP or a provider like Resend
  // Example (pseudo):
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: Number(process.env.SMTP_PORT || 587),
  //   secure: false,
  //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  // });
  // await transporter.sendMail({ from: data.email, to: process.env.SALES_TO, subject: "New Quote", text: JSON.stringify(data, null, 2) });

  console.log("Quote request:", data);
  return new Response("OK", { status: 200 });
}
