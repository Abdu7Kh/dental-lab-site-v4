import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/40">
      <div className="container-narrow grid gap-8 py-16 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Tandtekniskt laboratorium med precision och kvalitet
          </h1>
          <p className="text-gray-600">
            Kronor, broar, implantat och estetisk protetik till svenska kliniker.
            Snabba ledtider och pålitlig service.
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="rounded-lg bg-primary px-5 py-3 text-white">Begär offert</Link>
            <Link href="/services" className="rounded-lg border px-5 py-3">Våra tjänster</Link>
          </div>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <ul className="grid gap-4 text-sm">
            <li>✓ Digitala avtryck (STL, PLY, DICOM)</li>
            <li>✓ Material: Zirkonia, e.max, CoCr, Titan</li>
            <li>✓ Leverans i hela Sverige</li>
            <li>✓ Garanti och kvalitetskontroll</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
