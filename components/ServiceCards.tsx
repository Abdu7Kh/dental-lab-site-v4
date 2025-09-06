type Item = { title: string; desc: string };

const items: Item[] = [
  { title: "Kronor & Broar", desc: "Högestetiska lösningar i zirkonia och e.max." },
  { title: "Implantat", desc: "Skruvretinerade och cementerade konstruktioner." },
  { title: "Hel- & Delprotes", desc: "Anpassade lösningar med god passform." },
  { title: "Bettskydd & Skenslip", desc: "Individuella skenor för olika behov." },
];

export default function ServiceCards() {
  return (
    <section className="container-narrow py-12">
      <h2 className="mb-6 text-2xl font-semibold">Tjänster</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border p-6 shadow-sm">
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
