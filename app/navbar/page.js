'use client'; // Needed for interactivity in Next.js App Router

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">AZ</Link>

      {/* Hamburger icon */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-6 z-50 md:hidden">
          <ul className="flex flex-col gap-4 text-lg">
            <li><Link href="#home" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="#team" onClick={() => setMenuOpen(false)}>Team</Link></li>
            <li><Link href="#sponsors" onClick={() => setMenuOpen(false)}>Sponsors</Link></li>
            <li><Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link href="/recruitments" onClick={() => setMenuOpen(false)}>Recruitments</Link></li>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-lg">
        <li><Link href="#home">Home</Link></li>
        <li><Link href="#team">Team</Link></li>
        <li><Link href="#sponsors">Sponsors</Link></li>
        <li><Link href="#contact">Contact</Link></li>
        <li><Link href="/recruitments">Recruitments</Link></li>
      </ul>
    </nav>
  );
}
