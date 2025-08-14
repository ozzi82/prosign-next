
import { HowToSchema } from "../components/SeoSchema";

export const metadata = { title: "Request a Quote | ProSign" };

export default function Page() {
  const steps = [
    { name: "Share your artwork", text: "Upload vector artwork (AI, EPS, PDF, SVG) or a high-res file." },
    { name: "Add specs", text: "Letter height, finish, lighting type (front/back/combo), mounting method, delivery ZIP." },
    { name: "Get drawings", text: "We return drawings and a formal quote within 24–48 hours." }
  ];

  return (
    <main className="container py-10">
      <HowToSchema name="How to Request a Quote for Trimless Channel Letters" steps={steps} />
      <h1>Request a Quote</h1>
      <form className="mt-6 max-w-xl space-y-4" method="post" action="/api/quote">
        <label className="block">Name<input className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800" name="name" required/></label>
        <label className="block">Email<input className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800" name="email" type="email" required/></label>
        <label className="block">Company<input className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800" name="company"/></label>
        <label className="block">Phone<input className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800" name="phone"/></label>
        <label className="block">Details<textarea className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800" name="details" rows="6"/></label>
        <button className="btn" type="submit">Send Request</button>
        <p className="text-neutral-400 text-sm">We reply within 24–48 hours.</p>
      </form>
    </main>
  );
}
