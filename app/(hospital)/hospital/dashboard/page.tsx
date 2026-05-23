import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import {
  Users,
  CalendarDays,
  CheckCircle2,
  Clock,
  ArrowRight,
  BadgeCheck,
  Plus,
  TrendingUp,
  Activity,
} from "lucide-react";

const recentAppointments = [
  {
    patient: "Muhammad Ali",
    initials: "MA",
    doctor: "Dr. Sarah Ahmed",
    time: "9:00 AM",
    status: "confirmed",
  },
  {
    patient: "Fatima Noor",
    initials: "FN",
    doctor: "Dr. Hassan Malik",
    time: "10:30 AM",
    status: "confirmed",
  },
  {
    patient: "Ahmed Raza",
    initials: "AR",
    doctor: "Dr. Sarah Ahmed",
    time: "12:00 PM",
    status: "pending",
  },
  {
    patient: "Sana Khan",
    initials: "SK",
    doctor: "Dr. Ayesha Khan",
    time: "2:00 PM",
    status: "confirmed",
  },
];

const topDoctors = [
  {
    name: "Dr. Sarah Ahmed",
    initials: "SA",
    spec: "Cardiologist",
    appointments: 48,
    rating: "4.9",
  },
  {
    name: "Dr. Hassan Malik",
    initials: "HM",
    spec: "Neurologist",
    appointments: 36,
    rating: "4.8",
  },
  {
    name: "Dr. Ayesha Khan",
    initials: "AK",
    spec: "Dermatologist",
    appointments: 29,
    rating: "4.7",
  },
];

const stats = [
  {
    label: "Total Doctors",
    value: "48",
    icon: Users,
    color: "bg-violet-100 text-violet-700",
  },
  {
    label: "Appointments",
    value: "24",
    icon: CalendarDays,
    color: "bg-amber-100 text-amber-700",
  },
  {
    label: "Completed",
    value: "312",
    icon: CheckCircle2,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Pending",
    value: "06",
    icon: Clock,
    color: "bg-blue-100 text-blue-700",
  },
];

const statusConfig: Record<string, string> = {
  confirmed: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  pending: "bg-amber-50 text-amber-700 border border-amber-200",
};

export default function HospitalDashboard() {
  return (
    <div className="space-y-6">
      {/* ───────────────── HEADER ───────────────── */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1">
            <Activity size={13} className="text-violet-700" />
            <span className="text-xs font-medium text-violet-700">
              Hospital Overview
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Monitor doctors, appointments and hospital activity.
          </p>
        </div>

        <Button
          asChild
          className="h-11 rounded-2xl bg-violet-700 px-5 text-sm font-semibold shadow-lg shadow-violet-200 hover:bg-violet-800"
        >
          <Link
            href="/hospital/doctors/add"
            className="flex items-center gap-2"
          >
            <Plus size={16} />
            Add Doctor
          </Link>
        </Button>
      </div>

      {/* ───────────────── STATS ───────────────── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card
              key={stat.label}
              className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-none"
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {stat.label}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                      {stat.value}
                    </h3>
                  </div>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.color}`}
                  >
                    <Icon size={20} />
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />

                  <p className="text-xs text-slate-500">Updated just now</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* ───────────────── CONTENT GRID ───────────────── */}
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        {/* ───────────────── APPOINTMENTS ───────────────── */}
        <Card className="rounded-[28px] border border-slate-200/70 shadow-none">
          <CardContent className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Today&apos;s Appointments
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Recent patient bookings and schedules.
                </p>
              </div>

              <Link
                href="/hospital/appointments"
                className="flex items-center gap-1 text-sm font-semibold text-violet-700 transition-colors hover:text-violet-900"
              >
                View all
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="space-y-4">
              {recentAppointments.map((apt, i) => (
                <div key={apt.patient}>
                  <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-11 w-11 border border-violet-100">
                        <AvatarFallback className="bg-violet-100 text-sm font-semibold text-violet-700">
                          {apt.initials}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {apt.patient}
                        </p>

                        <p className="text-xs text-slate-500">{apt.doctor}</p>
                      </div>
                    </div>

                    <div className="sm:ml-auto flex items-center gap-3">
                      <div className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-700 border border-slate-200">
                        {apt.time}
                      </div>

                      <div
                        className={`rounded-full px-3 py-1 text-xs font-medium ${statusConfig[apt.status]}`}
                      >
                        {apt.status === "confirmed" ? "Confirmed" : "Pending"}
                      </div>
                    </div>
                  </div>

                  {i < recentAppointments.length - 1 && (
                    <Separator className="mt-4 bg-slate-100" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ───────────────── TOP DOCTORS ───────────────── */}
        <Card className="rounded-[28px] border border-slate-200/70 shadow-none">
          <CardContent className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Top Doctors
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Best performing specialists this month.
                </p>
              </div>

              <Link
                href="/hospital/doctors"
                className="flex items-center gap-1 text-sm font-semibold text-violet-700 transition-colors hover:text-violet-900"
              >
                View all
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="space-y-4">
              {topDoctors.map((doc, i) => (
                <div key={doc.name}>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                    <Avatar className="h-12 w-12 border border-violet-100">
                      <AvatarFallback className="bg-violet-100 text-sm font-semibold text-violet-700">
                        {doc.initials}
                      </AvatarFallback>
                    </Avatar>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <p className="truncate text-sm font-semibold text-slate-900">
                          {doc.name}
                        </p>

                        <BadgeCheck size={14} className="text-violet-700" />
                      </div>

                      <p className="text-xs text-slate-500">{doc.spec}</p>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <TrendingUp size={13} className="text-violet-500" />

                        <span className="text-sm font-semibold text-slate-900">
                          {doc.appointments}
                        </span>
                      </div>

                      <p className="mt-1 text-xs font-medium text-amber-600">
                        ★ {doc.rating}
                      </p>
                    </div>
                  </div>

                  {i < topDoctors.length - 1 && (
                    <Separator className="mt-4 bg-slate-100" />
                  )}
                </div>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-6 h-11 w-full rounded-2xl border-violet-200 text-sm font-semibold text-violet-700 hover:bg-violet-50 hover:text-violet-800"
            >
              <Link
                href="/hospital/doctors/add"
                className="flex items-center gap-2"
              >
                <Plus size={15} />
                Add New Doctor
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
