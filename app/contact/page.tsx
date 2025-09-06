export const metadata = { title: "Kontakt | Gävle Dental AB" };

export default function ContactPage() {
  return (
    <div className="container-narrow py-12">
      <h1 className="text-3xl font-bold">Kontakta oss</h1>
      <p className="mt-3 text-gray-600">Skicka ett meddelande så återkommer vi snabbt.</p>

      <form
        className="mt-6 grid gap-4 md:max-w-lg"
        action="mailto:info@gavledental.se"
        method="post"
        encType="text/plain"
      >
        <input className="rounded-lg border px-4 py-3" name="name" placeholder="Namn" required />
        <input className="rounded-lg border px-4 py-3" name="email" type="email" placeholder="E-post" required />
        <input className="rounded-lg border px-4 py-3" name="phone" placeholder="Telefon" />
        <textarea className="min-h-[120px] rounded-lg border px-4 py-3" name="message" placeholder="Meddelande" required />
        <button className="rounded-lg bg-primary px-5 py-3 text-white" type="submit">Skicka</button>
      </form>

      <div className="mt-10 text-sm text-gray-700">
        <p><strong>Adress:</strong> Gävle, Sverige</p>
        <p><strong>Telefon:</strong> +46 70 000 00 00</p>
        <p><strong>E-post:</strong> info@gavledental.se</p>
      </div>
    </div>
  );
}
