import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  CalendarDays,
  Clock,
  CheckCircle2,
  Users,
  ArrowRight,
  Activity,
  HeartPulse,
  Sparkles,
} from "lucide-react";

const todayAppointments = [
  {
    patient: "Muhammad Ali",
    initials: "MA",
    time: "9:00 AM",
    type: "First visit",
    status: "confirmed",
  },
  {
    patient: "Fatima Noor",
    initials: "FN",
    time: "10:30 AM",
    type: "Follow up",
    status: "confirmed",
  },
  {
    patient: "Ahmed Raza",
    initials: "AR",
    time: "12:00 PM",
    type: "First visit",
    status: "pending",
  },
  {
    patient: "Sana Khan",
    initials: "SK",
    time: "2:30 PM",
    type: "Follow up",
    status: "confirmed",
  },
];

const statusConfig: Record<string, string> = {
  confirmed: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
  pending: "bg-amber-50 text-amber-700 border-amber-200/80",
};

export default function DoctorDashboard() {
  return (
    <div className="flex flex-col gap-6">
      {/* Hero */}
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Left content */}
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600">
              <Sparkles size={13} />
              Doctor Dashboard
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Good morning,
              <br />
              Dr. Sarah 👋
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-600">
              You have{" "}
              <span className="font-semibold text-zinc-900">
                4 appointments
              </span>{" "}
              scheduled today. Stay focused and keep delivering excellent
              patient care.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-xl border border-zinc-900 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white">
                View Schedule
              </button>

              <button className="rounded-xl border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700">
                Patient Reports
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:w-[520px]">
            {[
              { label: "Today", value: "4", icon: CalendarDays },
              { label: "This Week", value: "18", icon: Clock },
              { label: "Completed", value: "312", icon: CheckCircle2 },
              { label: "Patients", value: "3K+", icon: Users },
            ].map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-zinc-200 bg-white p-4"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200">
                    <Icon size={16} className="text-zinc-700" />
                  </div>

                  <p className="text-xl font-semibold text-zinc-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-zinc-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        {/* Appointments */}
        <Card className="overflow-hidden rounded-[28px] border border-violet-200/60 bg-white/80 shadow-[0_10px_40px_-18px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <CardContent className="p-0">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-violet-100 px-6 py-5">
              <div>
                <h2 className="text-base font-bold text-violet-950">
                  Today&apos;s Appointments
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Your scheduled patient visits for today
                </p>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="rounded-xl text-violet-700 hover:bg-violet-50 hover:text-violet-900"
                asChild
              >
                <Link
                  href="/doctor/appointments"
                  className="flex items-center gap-1"
                >
                  View all
                  <ArrowRight size={14} />
                </Link>
              </Button>
            </div>

            {/* Appointments list */}
            <div className="flex flex-col p-4">
              {todayAppointments.map((apt, i) => (
                <div key={apt.patient}>
                  <div className="group flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-violet-50/70">
                    <Avatar className="h-12 w-12 border border-violet-100">
                      <AvatarFallback className="bg-violet-100 text-sm font-bold text-violet-700">
                        {apt.initials}
                      </AvatarFallback>
                    </Avatar>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-sm font-semibold text-violet-950">
                          {apt.patient}
                        </p>

                        <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-violet-700">
                          {apt.type}
                        </span>
                      </div>

                      <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock size={11} className="text-violet-400" />
                        {apt.time}
                      </div>
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusConfig[apt.status]}`}
                    >
                      {apt.status === "confirmed" ? "Confirmed" : "Pending"}
                    </span>
                  </div>

                  {i < todayAppointments.length - 1 && (
                    <Separator className="my-1 bg-violet-100/80" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {/* Profile */}
          <Card className="overflow-hidden rounded-[28px] border border-violet-200/60 bg-white/80 shadow-[0_10px_40px_-18px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 border border-violet-200">
                  <AvatarFallback className="bg-violet-100 text-lg font-bold text-violet-700">
                    SA
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="truncate text-base font-bold text-violet-950">
                      Dr. Sarah Ahmed
                    </h2>

                    <div className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      Active
                    </div>
                  </div>

                  <p className="mt-1 text-sm font-medium text-violet-700">
                    Cardiologist
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <HeartPulse size={13} className="text-violet-400" />
                    Lahore General Hospital
                  </div>

                  <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                    <Activity size={13} className="text-violet-400" />
                    12 years experience
                  </div>
                </div>
              </div>

              <Separator className="my-5 bg-violet-100" />

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    label: "Patients",
                    value: "3,000+",
                  },
                  {
                    label: "Consultation",
                    value: "Rs. 2,000",
                  },
                  {
                    label: "Completed",
                    value: "312",
                  },
                  {
                    label: "Rating",
                    value: "4.9 ★",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-violet-50/80 p-3"
                  >
                    <p className="text-[11px] font-medium text-slate-500">
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm font-bold text-violet-950">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="mt-5 h-11 w-full rounded-2xl border-violet-200 text-sm font-semibold text-violet-700 hover:bg-violet-50 hover:text-violet-900"
                asChild
              >
                <Link href="/doctor/profile">Edit profile</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Availability */}
          <Card className="overflow-hidden rounded-[28px] border border-violet-200/60 bg-white/80 shadow-[0_10px_40px_-18px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="mb-5 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100">
                  <CalendarDays size={18} className="text-violet-700" />
                </div>

                <div>
                  <h2 className="text-base font-bold text-violet-950">
                    Availability
                  </h2>

                  <p className="text-xs text-slate-500">
                    Weekly consultation schedule
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    day: "Monday",
                    slots: "9:00 AM – 1:00 PM",
                  },
                  {
                    day: "Tuesday",
                    slots: "11:00 AM – 3:00 PM",
                  },
                  {
                    day: "Wednesday",
                    slots: "9:00 AM – 1:00 PM",
                  },
                  {
                    day: "Thursday",
                    slots: "2:00 PM – 6:00 PM",
                  },
                  {
                    day: "Friday",
                    slots: "9:00 AM – 12:00 PM",
                  },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between rounded-2xl bg-violet-50/70 px-4 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-violet-500" />

                      <span className="text-sm font-semibold text-violet-950">
                        {item.day}
                      </span>
                    </div>

                    <span className="text-xs font-medium text-slate-500">
                      {item.slots}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="mt-5 h-11 w-full rounded-2xl border-violet-200 text-sm font-semibold text-violet-700 hover:bg-violet-50 hover:text-violet-900"
                asChild
              >
                <Link href="/doctor/availability">Manage availability</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
