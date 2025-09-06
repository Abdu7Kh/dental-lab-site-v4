export const metadata = { title: "Tjänster | Gävle Dental AB" };

const rows = [
  { name: "Zirkonia-krona", lead: "5-7 arbetsdagar" },
  { name: "e.max-krona", lead: "5-7 arbetsdagar" },
  { name: "Implantatdistans", lead: "7-10 arbetsdagar" },
  { name: "Helprotes", lead: "10-12 arbetsdagar" },
];

export default function ServicesPage() {
  return (
    <div className="container-narrow py-12">
      <h1 className="text-3xl font-bold">Tjänster</h1>
      <p className="mt-3 text-gray-600">Exempel på utbud och ungefärliga ledtider.</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Produkt</th>
              <th className="px-4 py-3 text-left">Ledtid</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.name} className="border-t">
                <td className="px-4 py-3">{r.name}</td>
                <td className="px-4 py-3">{r.lead}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-2">
        <a className="rounded-lg border p-4 hover:border-primary" href="/services/implantat">Implantat</a>
        <a className="rounded-lg border p-4 hover:border-primary" href="/services/fast-protetik">Fast protetik</a>
        <a className="rounded-lg border p-4 hover:border-primary" href="/services/avtagbar-protetik">Avtagbar protetik</a>
        <a className="rounded-lg border p-4 hover:border-primary" href="/services/bettfysiologi">Bettfysiologi</a>
        <a className="rounded-lg border p-4 hover:border-primary" href="/services/digitala-avtryck">Digitala avtryck</a>
      </div>
    </div>
  );
}
