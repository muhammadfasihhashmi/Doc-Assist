"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

import {
  LayoutDashboard,
  CalendarDays,
  Stethoscope,
  User,
  LogOut,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    label: "Dashboard",
    href: "/hospital/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Doctors",
    href: "/hospital/doctors",
    icon: Stethoscope,
  },
  {
    label: "Appointments",
    href: "/hospital/appointments",
    icon: CalendarDays,
  },
  {
    label: "Profile",
    href: "/hospital/profile",
    icon: User,
  },
];

export default function HospitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-violet-50/20">
      {/* ───────────────── DESKTOP SIDEBAR ───────────────── */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[320px] flex-col border-r border-violet-100 bg-white/80 backdrop-blur-xl lg:flex">
        <Sidebar setMobileOpen={setMobileOpen} />
      </aside>

      {/* ───────────────── MOBILE SIDEBAR ───────────────── */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <aside
          className={`absolute left-0 top-0 flex h-full w-[290px] flex-col border-r border-violet-100 bg-white transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar setMobileOpen={setMobileOpen} />
        </aside>
      </div>

      {/* ───────────────── MAIN CONTENT ───────────────── */}
      <div className="flex-1 lg:pl-[320px] flex flex-col min-h-screen">
        <button
          onClick={() => setMobileOpen(true)}
          className="ml-8 lg:hidden flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-100 bg-white text-slate-600 transition-colors hover:bg-violet-50 hover:text-violet-700"
        >
          <Menu size={18} />
        </button>

        {/* Rounded Content Window */}
        <main className="flex-1 p-4 sm:p-6">
          <div className="min-h-[calc(100vh-110px)] rounded-[32px] border border-slate-200/70 bg-white p-4 sm:p-6 shadow-sm">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

function Sidebar({
  setMobileOpen,
}: {
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Header */}
      <div className="lg:mt-20 border-b border-violet-100 px-5 py-5">
        {/* User Card */}
        <div className="flex items-center gap-3 rounded-2xl bg-violet-50 p-3">
          <Avatar className="h-12 w-12 border border-violet-200">
            <AvatarFallback className="bg-violet-200 text-sm font-bold text-violet-800">
              LG
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-violet-950">
              Lahore General
            </p>

            <p className="truncate text-xs text-slate-500">Hospital account</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-5">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-violet-700 text-white shadow-lg shadow-violet-200"
                    : "text-slate-600 hover:bg-violet-50 hover:text-violet-800"
                }`}
              >
                <Icon
                  size={18}
                  className={
                    active
                      ? "text-white"
                      : "text-slate-400 group-hover:text-violet-700"
                  }
                />

                <span>{item.label}</span>

                {active && (
                  <ChevronRight size={16} className="ml-auto text-violet-200" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-violet-100 p-4">
        <Button
          variant="ghost"
          className="h-12 w-full justify-start rounded-2xl px-4 text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600"
        >
          <LogOut className="mr-3 size-4" />
          Sign out
        </Button>
      </div>
    </>
  );
}
