export const metadata = { title: "Om oss | Gävle Dental AB" };

export default function AboutPage() {
  return (
    <div className="container-narrow py-12">
      <h1 className="text-3xl font-bold">Om oss</h1>
      <p className="mt-3 text-gray-600">
        Vi är ett svenskt tandtekniskt laboratorium som levererar protetik med fokus på estetik, hållbarhet och passform.
        Vårt team arbetar nära tandläkare och kliniker i hela landet.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-6 text-sm text-gray-700">
        <li>Kvalitetskontroller i varje steg</li>
        <li>Samarbete med ledande materialleverantörer</li>
        <li>Digitalt arbetsflöde och säkra filöverföringar</li>
      </ul>
    </div>
  );
}
