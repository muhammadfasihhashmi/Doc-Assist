"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Doctors", href: "/doctors" },
  { label: "Hospitals", href: "/hospitals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-violet-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "#5B21B6" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="11" y="5" width="2" height="14" fill="white" />
                <rect x="5" y="11" width="14" height="2" fill="white" />
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
            <span
              className="text-base font-semibold tracking-tight"
              style={{ color: "#2E1065" }}
            >
              DocAssist
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "#6D28D9" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2E1065")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6D28D9")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-sm font-medium transition-colors hover:bg-violet-50"
              style={{ color: "#5B21B6" }}
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              className="text-white rounded-lg text-sm font-medium shadow-none border-0"
              style={{ background: "#5B21B6" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#4C1D95")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#5B21B6")
              }
              asChild
            >
              <Link href="/register">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-violet-50 transition-colors"
            style={{ color: "#5B21B6" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-violet-200 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium py-1 transition-colors hover:opacity-80"
              style={{ color: "#6D28D9" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2 border-t border-violet-200">
            <Button
              variant="outline"
              className="flex-1 text-sm font-medium bg-transparent hover:bg-violet-50"
              style={{
                borderColor: "#C4B5FD",
                color: "#5B21B6",
              }}
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              className="flex-1 text-white text-sm font-medium shadow-none border-0"
              style={{ background: "#5B21B6" }}
              asChild
            >
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
