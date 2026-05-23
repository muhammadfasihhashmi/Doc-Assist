"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/assets/images/docAssisteLogo_processed.png";

const navLinks = [
  { label: "Doctors", href: "/doctors" },
  { label: "Hospitals", href: "/hospitals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-9">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="relative h-22 w-50">
              <Image
                src={Logo}
                alt="logo"
                fill
                sizes="auto"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 rounded-full border border-violet-100 bg-white/70 p-1 shadow-sm lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-5 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-violet-50 hover:text-violet-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button
              variant="ghost"
              className="rounded-xl text-sm font-medium text-violet-700 hover:bg-violet-50 hover:text-violet-800"
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>

            <Button
              className="h-11 rounded-xl bg-violet-700 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all hover:bg-violet-800 hover:shadow-violet-300"
              asChild
            >
              <Link href="/register">Register</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-100 bg-white text-violet-700 transition-colors hover:bg-violet-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-violet-100 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto flex flex-col px-4 py-5 sm:px-6">
          {/* Links */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="mt-5 flex flex-col gap-3 border-t border-violet-100 pt-5">
            <Button
              variant="outline"
              className="h-11 rounded-xl border-violet-200 text-sm font-medium text-violet-700 hover:bg-violet-50"
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>

            <Button
              className="h-11 rounded-xl bg-violet-700 text-sm font-semibold text-white hover:bg-violet-800"
              asChild
            >
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
