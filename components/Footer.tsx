export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container-narrow py-10 text-sm text-gray-600">
        <div className="flex flex-col gap-2">
          <p><strong>Gävle Dental AB</strong></p>
          <p>Adress: Gävle, Sverige</p>
          <p>Telefon: +46 70 000 00 00</p>
          <p>E-post: info@gavledental.se</p>
        </div>
        <div className="mt-6 text-xs">© {new Date().getFullYear()} Gävle Dental AB. Alla rättigheter förbehållna.</div>
      </div>
    </footer>
  );
}
