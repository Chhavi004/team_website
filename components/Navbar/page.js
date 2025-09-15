import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md px-4 md:px-12 py-3 flex justify-between items-center">
      {/* Logo / Title */}
      <div className="text-xl md:text-2xl font-bold text-emerald-600">Auto Z</div>

      {/* Nav Links */}
      <div className="flex space-x-4 md:space-x-8 text-sm md:text-base font-medium">
        <Link href="#home" className="text-gray-700 hover:text-emerald-600">Home</Link>
        <Link href="/projects" className="text-gray-700 hover:text-emerald-600">Projects</Link>
        <Link href="/gallery" className="text-gray-700 hover:text-emerald-600">Gallery</Link>
        <Link href="#contact" className="text-gray-700 hover:text-emerald-600">Contact</Link>
        <Link href="/recruitments" className="text-gray-700 hover:text-emerald-600">Recruitments</Link>
      </div>
    </nav>
  );
}
