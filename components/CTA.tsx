import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-t bg-white">
      <div className="container-narrow flex flex-col items-start justify-between gap-4 py-10 md:flex-row md:items-center">
        <div>
          <h3 className="text-xl font-semibold">Redo att samarbeta?</h3>
          <p className="text-sm text-gray-600">Kontakta oss för prislista och provfall.</p>
        </div>
        <Link href="/contact" className="rounded-lg bg-primary px-5 py-3 text-white">Kontakta oss</Link>
      </div>
    </section>
  );
}
