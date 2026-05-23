import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Search,
  CalendarDays,
  Clock,
  CheckCircle2,
  XCircle,
  BadgeCheck,
  Activity,
  ArrowUpRight,
} from "lucide-react";

const tabs = ["All", "Today", "Upcoming", "Completed", "Cancelled"];

const appointments = [
  {
    patient: "Muhammad Ali",
    patientInitials: "MA",
    doctor: "Dr. Sarah Ahmed",
    doctorInitials: "SA",
    spec: "Cardiologist",
    date: "Today",
    time: "9:00 AM",
    status: "confirmed",
  },
  {
    patient: "Fatima Noor",
    patientInitials: "FN",
    doctor: "Dr. Hassan Malik",
    doctorInitials: "HM",
    spec: "Neurologist",
    date: "Today",
    time: "10:30 AM",
    status: "confirmed",
  },
  {
    patient: "Ahmed Raza",
    patientInitials: "AR",
    doctor: "Dr. Sarah Ahmed",
    doctorInitials: "SA",
    spec: "Cardiologist",
    date: "Today",
    time: "12:00 PM",
    status: "pending",
  },
  {
    patient: "Sana Khan",
    patientInitials: "SK",
    doctor: "Dr. Ayesha Khan",
    doctorInitials: "AK",
    spec: "Dermatologist",
    date: "Dec 28",
    time: "2:00 PM",
    status: "confirmed",
  },
  {
    patient: "Bilal Ahmed",
    patientInitials: "BA",
    doctor: "Dr. Hassan Malik",
    doctorInitials: "HM",
    spec: "Neurologist",
    date: "Dec 10",
    time: "11:00 AM",
    status: "completed",
  },
  {
    patient: "Zara Malik",
    patientInitials: "ZM",
    doctor: "Dr. Ayesha Khan",
    doctorInitials: "AK",
    spec: "Dermatologist",
    date: "Nov 30",
    time: "3:00 PM",
    status: "cancelled",
  },
];

const statusConfig: Record<
  string,
  { label: string; className: string; icon: React.ElementType }
> = {
  confirmed: {
    label: "Confirmed",
    className: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    icon: CheckCircle2,
  },
  pending: {
    label: "Pending",
    className: "bg-amber-50 text-amber-700 border border-amber-200",
    icon: Clock,
  },
  completed: {
    label: "Completed",
    className: "bg-blue-50 text-blue-700 border border-blue-200",
    icon: CheckCircle2,
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-red-50 text-red-600 border border-red-200",
    icon: XCircle,
  },
};

export default function HospitalAppointments() {
  return (
    <div className="space-y-6">
      {/* ───────────────── HEADER ───────────────── */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1">
            <Activity size={13} className="text-violet-700" />

            <span className="text-xs font-medium text-violet-700">
              Appointment Management
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Appointments
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage and monitor all hospital appointments.
          </p>
        </div>
      </div>

      {/* ───────────────── STATS ───────────────── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "Today",
            value: "24",
            className: "bg-violet-100 text-violet-700",
          },
          {
            label: "This Week",
            value: "118",
            className: "bg-amber-100 text-amber-700",
          },
          {
            label: "Completed",
            value: "890",
            className: "bg-blue-100 text-blue-700",
          },
          {
            label: "Cancelled",
            value: "14",
            className: "bg-red-100 text-red-700",
          },
        ].map((s) => (
          <Card
            key={s.label}
            className="rounded-3xl border border-slate-200/70 shadow-none"
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {s.label}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                    {s.value}
                  </h3>
                </div>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${s.className}`}
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <p className="mt-5 text-xs text-slate-500">Updated recently</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ───────────────── APPOINTMENT LIST ───────────────── */}
      <Card className="rounded-[30px] border border-slate-200/70 shadow-none">
        <CardContent className="p-6">
          {/* Filters */}
          <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            {/* Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-medium transition-all ${
                    tab === "All"
                      ? "bg-violet-700 text-white shadow-lg shadow-violet-200"
                      : "bg-slate-100 text-slate-600 hover:bg-violet-50 hover:text-violet-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full xl:w-[280px]">
              <Search
                size={15}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <Input
                placeholder="Search patient or doctor..."
                className="h-11 rounded-2xl border-slate-200 bg-slate-50 pl-11 text-sm shadow-none focus-visible:ring-violet-400"
              />
            </div>
          </div>

          {/* Appointment Cards */}
          <div className="space-y-4">
            {appointments.map((apt, i) => {
              const status = statusConfig[apt.status];
              const StatusIcon = status.icon;

              return (
                <div
                  key={`${apt.patient}-${i}`}
                  className="rounded-3xl border border-slate-100 bg-slate-50/70 p-5 transition-all hover:border-violet-200 hover:bg-white"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                    {/* Left */}
                    <div className="flex items-start gap-4">
                      {/* Patient */}
                      <Avatar className="h-14 w-14 border border-violet-100">
                        <AvatarFallback className="bg-violet-100 text-sm font-semibold text-violet-700">
                          {apt.patientInitials}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-semibold text-slate-900">
                            {apt.patient}
                          </h3>

                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${status.className}`}
                          >
                            <StatusIcon size={12} />
                            {status.label}
                          </span>
                        </div>

                        {/* Doctor */}
                        <div className="flex flex-wrap items-center gap-2 text-sm">
                          <div className="flex items-center gap-1.5">
                            <Avatar className="h-5 w-5">
                              <AvatarFallback className="bg-violet-200 text-[10px] font-bold text-violet-700">
                                {apt.doctorInitials}
                              </AvatarFallback>
                            </Avatar>

                            <span className="text-slate-600">{apt.doctor}</span>

                            <BadgeCheck size={13} className="text-violet-600" />
                          </div>

                          <span className="text-slate-300">•</span>

                          <span className="font-medium text-violet-700">
                            {apt.spec}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="lg:ml-auto flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2">
                        <CalendarDays size={14} className="text-violet-500" />

                        <span className="text-sm font-medium text-slate-700">
                          {apt.date}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2">
                        <Clock size={14} className="text-violet-500" />

                        <span className="text-sm font-medium text-slate-700">
                          {apt.time}
                        </span>
                      </div>

                      {(apt.status === "confirmed" ||
                        apt.status === "pending") && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-10 rounded-2xl border-red-200 px-4 text-sm font-medium text-red-600 shadow-none hover:bg-red-50"
                        >
                          Cancel
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
