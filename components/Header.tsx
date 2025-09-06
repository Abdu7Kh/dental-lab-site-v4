import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Gävle Dental AB" width={36} height={36} priority />
          <span className="font-semibold">Gävle Dental AB</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-primary">Hem</Link>
          <Link href="/services" className="hover:text-primary">Tjänster</Link>
          <Link href="/prices" className="hover:text-primary">Priser</Link>
          <Link href="/about" className="hover:text-primary">Om oss</Link>
          <Link href="/contact" className="rounded-lg bg-primary px-4 py-2 text-white">Kontakta oss</Link>
        </nav>
      </div>
    </header>
  );
}
