export const metadata = { title: "Priser | Gävle Dental AB" };

const rows = [
  { name: "Zirkonia-krona", price: "—" },
  { name: "e.max-krona", price: "—" },
  { name: "Implantatdistans", price: "—" },
  { name: "Helprotes", price: "—" },
];

export default function PricesPage() {
  return (
    <div className="container-narrow py-12">
      <h1 className="text-3xl font-bold">Priser</h1>
      <p className="mt-3 text-gray-600">سيتم استبدال الأسعار حسب قائمة العميل لاحقًا.</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Produkt</th>
              <th className="px-4 py-3 text-left">Pris</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.name} className="border-t">
                <td className="px-4 py-3">{r.name}</td>
                <td className="px-4 py-3">{r.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
