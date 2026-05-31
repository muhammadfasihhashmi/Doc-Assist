"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  CalendarDays,
  User,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Logo from "@/assets/images/docAssisteLogo_processed.png";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const navLinks = [
  { label: "Doctors", href: "/doctors" },
  { label: "Hospitals", href: "/hospitals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const roleLinks: Record<
  string,
  { label: string; href: string; icon: React.ElementType }[]
> = {
  patient: [
    { label: "Dashboard", href: "/patient/dashboard", icon: LayoutDashboard },
    {
      label: "Appointments",
      href: "/patient/appointments",
      icon: CalendarDays,
    },
    { label: "Profile", href: "/patient/profile", icon: User },
  ],
  doctor: [
    { label: "Dashboard", href: "/doctor/dashboard", icon: LayoutDashboard },
    { label: "Appointments", href: "/doctor/appointments", icon: CalendarDays },
    { label: "Profile", href: "/doctor/profile", icon: User },
  ],
  hospital: [
    { label: "Dashboard", href: "/hospital/dashboard", icon: LayoutDashboard },
    { label: "Doctors", href: "/hospital/doctors", icon: User },
    {
      label: "Appointments",
      href: "/hospital/appointments",
      icon: CalendarDays,
    },
  ],
  admin: [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  ],
};

type Profile = { name: string; role: string };

async function fetchProfile(): Promise<Profile | null> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data } = await supabase
    .from("profiles")
    .select("name, role")
    .eq("id", user.id)
    .single();

  return data ?? null;
}

export default function Navbar() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { data: profile } = useQuery({
    queryKey: ["navbar-profile"],
    queryFn: fetchProfile,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    queryClient.removeQueries({ queryKey: ["navbar-profile"] });
    setDropdownOpen(false);
    router.push("/");
    router.refresh();
  };

  const initials =
    profile?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) ?? "U";

  const links = profile?.role ? (roleLinks[profile.role] ?? []) : [];

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
            {profile ? (
              // ── Logged in ──
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((p) => !p)}
                  className="flex items-center gap-2 rounded-xl border border-violet-100 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-violet-50 transition-colors"
                >
                  <Avatar className="h-7 w-7">
                    <AvatarFallback className="bg-violet-200 text-xs font-bold text-violet-800">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <span className="max-w-[120px] truncate">{profile.name}</span>
                  <ChevronDown
                    size={14}
                    className={`text-slate-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 top-12 w-52 rounded-2xl border border-violet-100 bg-white py-2 shadow-lg">
                    <p className="border-b border-violet-50 px-4 pb-2 text-xs text-slate-400 capitalize">
                      {profile.role} account
                    </p>
                    <div className="py-1">
                      {links.map((link) => {
                        const Icon = link.icon;
                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-violet-50 hover:text-violet-700 transition-colors"
                          >
                            <Icon size={15} className="text-slate-400" />
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                    <div className="border-t border-violet-50 pt-1">
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <LogOut size={15} />
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // ── Logged out ──
              <>
                <Button
                  variant="ghost"
                  className="rounded-xl text-sm font-medium text-violet-700 hover:bg-violet-50 hover:text-violet-800"
                  asChild
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button
                  className="h-11 rounded-xl bg-violet-700 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-200 hover:bg-violet-800"
                  asChild
                >
                  <Link href="/register">Register</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-100 bg-white text-violet-700 hover:bg-violet-50 lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-violet-100 bg-white transition-all duration-300 lg:hidden ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="container mx-auto flex flex-col px-4 py-5 sm:px-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-violet-50 hover:text-violet-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-5 border-t border-violet-100 pt-5">
            {profile ? (
              <div className="flex flex-col gap-1">
                <p className="px-4 pb-1 text-xs text-slate-400 capitalize">
                  {profile.role} account
                </p>
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-violet-50 hover:text-violet-700"
                    >
                      <Icon size={15} className="text-slate-400" />
                      {link.label}
                    </Link>
                  );
                })}
                <button
                  onClick={handleLogout}
                  className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50"
                >
                  <LogOut size={15} />
                  Sign out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
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
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
