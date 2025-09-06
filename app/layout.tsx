import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gävle Dental AB | Tandtekniskt Laboratorium",
  description: "Tandtekniskt laboratorium i Sverige. Kronor, broar, implantat, estetisk protetik.",
  openGraph: {
    title: "Gävle Dental AB",
    description: "Kvalitet och precision för tandvården i Sverige.",
    url: "https://example.com",
    siteName: "Gävle Dental AB",
    images: ["/og-cover.jpg"],
    locale: "sv_SE",
    type: "website"
  },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
