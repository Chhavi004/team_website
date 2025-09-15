import Overlay from "@/components/overlay";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Auto Z",
  description: "Team portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
          <nav className="flex items-center justify-between px-8 py-4">
            <h1 className="font-black text-2xl text-emerald-600">Auto Z</h1>
            <div className="flex gap-8 text-gray-800 font-semibold">
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/recruitments">Recruitments</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>

        {/* Overlay stays on top if you need it */}
        <Overlay />

        {/* Push content below navbar */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
