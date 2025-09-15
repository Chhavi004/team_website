import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md z-50 fixed top-0">
      <div className="flex items-center">
        <Image src="/icons/logo.svg" alt="AutoZ Logo" width={40} height={40} />
      </div>

      {/* Nav Links */}
      <div className="flex space-x-4 md:space-x-8 text-sm md:text-base font-medium">
        <Link href="/" className="text-gray-700 hover:text-emerald-600">Home</Link>
        <Link href="/projects" className="text-gray-700 hover:text-emerald-600">Projects</Link>
        <Link href="/gallery" className="text-gray-700 hover:text-emerald-600">Gallery</Link>
        <Link href="/contact" className="text-gray-700 hover:text-emerald-600">Contact</Link>
        <Link href="/recruitments" className="text-gray-700 hover:text-emerald-600">Recruitments</Link>
      </div>
    </nav>
  );
}
