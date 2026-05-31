"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import {
  LayoutDashboard,
  CalendarDays,
  User,
  LogOut,
  ChevronRight,
  Menu,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useQueryClient } from "@tanstack/react-query";

const navItems = [
  {
    label: "Dashboard",
    href: "/patient/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Appointments",
    href: "/patient/appointments",
    icon: CalendarDays,
  },
  {
    label: "Profile",
    href: "/patient/profile",
    icon: User,
  },
];

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const queryClient = useQueryClient();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    queryClient.removeQueries({
      queryKey: ["navbar-profile"],
    });

    setMobileOpen(false);

    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen">
      {/* ───────────────── DESKTOP SIDEBAR ───────────────── */}
      <aside className="fixed inset-y-0 left-0 z-40 mt-20 hidden w-[330px] flex-col border-r border-violet-100 bg-white/80 backdrop-blur-xl lg:flex">
        {/* User */}
        <div className="border-b border-violet-100 px-5 py-5">
          <div className="flex items-center gap-3 rounded-2xl bg-violet-50 p-3">
            <Avatar className="h-12 w-12 border border-violet-200">
              <AvatarFallback className="bg-violet-200 text-sm font-bold text-violet-800">
                MA
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-violet-950">
                Muhammad Ali
              </p>

              <p className="text-xs text-slate-500">Patient Account</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-5">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
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
                    <ChevronRight
                      size={16}
                      className="ml-auto text-violet-200"
                    />
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
            onClick={handleLogout}
            className="h-12 w-full justify-start rounded-2xl px-4 text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600"
          >
            <LogOut className="mr-3 size-4" />
            Sign out
          </Button>
        </div>
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
          {/* User */}
          <div className="border-b border-violet-100 px-5 py-5">
            <div className="flex items-center gap-3 rounded-2xl bg-violet-50 p-3">
              <Avatar className="h-12 w-12 border border-violet-200">
                <AvatarFallback className="bg-violet-200 text-sm font-bold text-violet-800">
                  MA
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="text-sm font-semibold text-violet-950">
                  Muhammad Ali
                </p>

                <p className="text-xs text-slate-500">Patient Account</p>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 px-4 py-5">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

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
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-violet-100 p-4">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="h-12 w-full justify-start rounded-2xl px-4 text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="mr-3 size-4" />
              Sign out
            </Button>
          </div>
        </aside>
      </div>

      {/* ───────────────── MAIN CONTENT ───────────────── */}
      <div className="flex min-h-screen flex-1 flex-col lg:pl-[320px]">
        <button
          onClick={() => setMobileOpen(true)}
          className="ml-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-100 bg-white text-slate-600 transition-colors hover:bg-violet-50 hover:text-violet-700 lg:hidden"
        >
          <Menu size={18} />
        </button>

        {/* Rounded Content Window */}
        <main className="flex-1 p-4 sm:p-6">
          <div className="min-h-[calc(100vh-110px)] rounded-[32px] border border-slate-200/70 bg-white p-4 shadow-sm sm:p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
