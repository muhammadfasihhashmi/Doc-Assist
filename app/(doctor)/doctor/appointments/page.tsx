import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  CalendarDays,
  CheckCircle2,
  XCircle,
  Phone,
} from "lucide-react";

const tabs = ["All", "Today", "Upcoming", "Completed", "Cancelled"];

const appointments = [
  {
    patient: "Muhammad Ali",
    initials: "MA",
    age: 29,
    phone: "+92 300 1234567",
    date: "Today",
    time: "9:00 AM",
    type: "First visit",
    status: "confirmed",
  },
  {
    patient: "Fatima Noor",
    initials: "FN",
    age: 34,
    phone: "+92 301 9876543",
    date: "Today",
    time: "10:30 AM",
    type: "Follow up",
    status: "confirmed",
  },
  {
    patient: "Ahmed Raza",
    initials: "AR",
    age: 45,
    phone: "+92 333 5554443",
    date: "Today",
    time: "12:00 PM",
    type: "First visit",
    status: "pending",
  },
  {
    patient: "Sana Khan",
    initials: "SK",
    age: 27,
    phone: "+92 321 1112223",
    date: "Dec 28, 2026",
    time: "2:30 PM",
    type: "Follow up",
    status: "confirmed",
  },
  {
    patient: "Bilal Ahmed",
    initials: "BA",
    age: 52,
    phone: "+92 312 7778889",
    date: "Dec 10, 2026",
    time: "11:00 AM",
    type: "First visit",
    status: "completed",
  },
  {
    patient: "Zara Malik",
    initials: "ZM",
    age: 31,
    phone: "+92 345 4443332",
    date: "Nov 30, 2026",
    time: "3:00 PM",
    type: "Follow up",
    status: "cancelled",
  },
];

const statusConfig: Record<
  string,
  { label: string; className: string; icon: React.ElementType }
> = {
  confirmed: {
    label: "Confirmed",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: CheckCircle2,
  },
  pending: {
    label: "Pending",
    className: "bg-amber-50 text-amber-700 border-amber-200",
    icon: Clock,
  },
  completed: {
    label: "Completed",
    className: "bg-blue-50 text-blue-700 border-blue-200",
    icon: CheckCircle2,
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-red-50 text-red-600 border-red-200",
    icon: XCircle,
  },
};

export default function DoctorAppointments() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-violet-950 tracking-tight">
          Appointments
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage your patient schedule with clarity and speed
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Today", value: "4", color: "text-violet-800" },
          { label: "This Week", value: "18", color: "text-amber-700" },
          { label: "Completed", value: "312", color: "text-blue-700" },
          { label: "Cancelled", value: "8", color: "text-red-600" },
        ].map((s) => (
          <Card
            key={s.label}
            className="rounded-2xl border border-violet-100 bg-white/80 shadow-sm"
          >
            <CardContent className="p-4 text-center">
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-slate-500 mt-1">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Card */}
      <Card className="rounded-[28px] border border-violet-100 bg-white/80 shadow-[0_10px_40px_-18px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <CardContent className="p-0">
          {/* Top bar */}
          <div className="flex flex-col gap-4 border-b border-violet-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Tabs */}
            <div className="flex gap-1 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition ${
                    tab === "All"
                      ? "bg-violet-800 text-white"
                      : "text-slate-500 hover:bg-violet-50 hover:text-violet-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <p className="text-xs text-slate-500">
              {appointments.length} total appointments
            </p>
          </div>

          {/* List */}
          <div className="p-4">
            {appointments.map((apt, i) => {
              const status = statusConfig[apt.status];
              const StatusIcon = status.icon;

              return (
                <div key={`${apt.patient}-${i}`}>
                  <div className="group flex items-start gap-4 rounded-2xl p-4 transition hover:bg-violet-50/60">
                    {/* Avatar */}
                    <Avatar className="h-11 w-11 border border-violet-100">
                      <AvatarFallback className="bg-violet-100 text-xs font-bold text-violet-700">
                        {apt.initials}
                      </AvatarFallback>
                    </Avatar>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-violet-950">
                            {apt.patient}
                          </p>
                          <p className="text-xs text-slate-500">
                            Age {apt.age} · {apt.type}
                          </p>
                        </div>

                        <span
                          className={`flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${status.className}`}
                        >
                          <StatusIcon size={11} />
                          {status.label}
                        </span>
                      </div>

                      {/* Meta */}
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <CalendarDays size={11} className="text-violet-400" />
                          {apt.date}
                        </div>

                        <div className="flex items-center gap-1">
                          <Clock size={11} className="text-violet-400" />
                          {apt.time}
                        </div>

                        <div className="flex items-center gap-1">
                          <Phone size={11} className="text-slate-400" />
                          {apt.phone}
                        </div>
                      </div>

                      {/* Actions */}
                      {(apt.status === "confirmed" ||
                        apt.status === "pending") && (
                        <div className="mt-3 flex gap-2">
                          <Button
                            size="sm"
                            className="h-8 rounded-xl bg-violet-800 text-xs text-white hover:bg-violet-900"
                          >
                            Mark completed
                          </Button>

                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 rounded-xl border-red-200 text-xs text-red-600 hover:bg-red-50"
                          >
                            Cancel
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  {i < appointments.length - 1 && (
                    <Separator className="my-1 bg-violet-100/60" />
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
