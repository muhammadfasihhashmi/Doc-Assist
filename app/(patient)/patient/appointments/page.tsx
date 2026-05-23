import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CalendarDays,
  Clock,
  Building2,
  BadgeCheck,
  Search,
  CheckCircle2,
  XCircle,
  RotateCcw,
} from "lucide-react";

const tabs = ["All", "Upcoming", "Completed", "Cancelled"];

const appointments = [
  {
    doctor: "Dr. Sarah Ahmed",
    initials: "SA",
    spec: "Cardiologist",
    hospital: "Lahore General Hospital",
    date: "Dec 25, 2026",
    time: "10:30 AM",
    fee: "Rs. 2,000",
    status: "confirmed",
    slug: "sarah-ahmed",
  },
  {
    doctor: "Dr. Hassan Malik",
    initials: "HM",
    spec: "Neurologist",
    hospital: "Shaukat Khanum",
    date: "Dec 28, 2026",
    time: "2:00 PM",
    fee: "Rs. 3,000",
    status: "pending",
    slug: "hassan-malik",
  },
  {
    doctor: "Dr. Ayesha Khan",
    initials: "AK",
    spec: "Dermatologist",
    hospital: "Services Hospital",
    date: "Dec 10, 2026",
    time: "11:00 AM",
    fee: "Rs. 1,500",
    status: "completed",
    slug: "ayesha-khan",
  },
  {
    doctor: "Dr. Usman Sheikh",
    initials: "US",
    spec: "Orthopedic",
    hospital: "Doctors Hospital",
    date: "Nov 30, 2026",
    time: "3:30 PM",
    fee: "Rs. 2,800",
    status: "completed",
    slug: "usman-sheikh",
  },
  {
    doctor: "Dr. Nadia Farooq",
    initials: "NF",
    spec: "Psychiatrist",
    hospital: "Aga Khan Hospital",
    date: "Nov 15, 2026",
    time: "9:00 AM",
    fee: "Rs. 2,500",
    status: "cancelled",
    slug: "nadia-farooq",
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

export default function PatientAppointments() {
  return (
    <div className="flex flex-col gap-6 max-w-full">
      {/* ── HEADER ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-violet-950 tracking-tight">
            My Appointments
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Track and manage all your bookings
          </p>
        </div>
        <Button
          className="bg-violet-800 hover:bg-violet-900 text-white text-sm font-semibold rounded-lg shadow-none"
          asChild
        >
          <Link href="/doctors" className="flex items-center gap-2">
            <CalendarDays size={14} /> Book appointment
          </Link>
        </Button>
      </div>

      {/* ── STATS ROW ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          {
            label: "Total",
            value: "12",
            className: "bg-violet-100 text-violet-800",
          },
          {
            label: "Upcoming",
            value: "2",
            className: "bg-amber-50 text-amber-700",
          },
          {
            label: "Completed",
            value: "9",
            className: "bg-blue-50 text-blue-700",
          },
          {
            label: "Cancelled",
            value: "1",
            className: "bg-red-50 text-red-600",
          },
        ].map((s) => (
          <Card key={s.label} className="border-violet-200 shadow-none">
            <CardContent className="pt-4 pb-4 px-4 text-center">
              <p className={`text-2xl font-bold ${s.className.split(" ")[1]}`}>
                {s.value}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ── TABS + LIST ── */}
      <Card className="border-violet-200 shadow-none">
        <CardContent className="pt-5 pb-5 px-5">
          {/* Tabs */}
          <div className="flex items-center gap-1 mb-5 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  tab === "All"
                    ? "bg-violet-800 text-white"
                    : "text-slate-500 hover:bg-violet-50 hover:text-violet-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* List */}
          <div className="flex flex-col gap-4">
            {appointments.map((apt, i) => {
              const status = statusConfig[apt.status];
              const StatusIcon = status.icon;
              return (
                <div key={apt.doctor}>
                  <div className="flex items-start gap-3">
                    <Avatar className="w-11 h-11 flex-shrink-0">
                      <AvatarFallback className="bg-violet-100 text-violet-800 text-xs font-bold">
                        {apt.initials}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                        <div>
                          <div className="flex items-center gap-1 mb-0.5">
                            <p className="text-sm font-semibold text-violet-950">
                              {apt.doctor}
                            </p>
                            <BadgeCheck size={13} className="text-violet-700" />
                          </div>
                          <p className="text-xs text-violet-700 font-medium">
                            {apt.spec}
                          </p>
                        </div>
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full border flex items-center gap-1 flex-shrink-0 ${status.className}`}
                        >
                          <StatusIcon size={11} />
                          {status.label}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-1">
                          <Building2 size={11} className="text-slate-400" />
                          <span className="text-xs text-slate-500">
                            {apt.hospital}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays size={11} className="text-violet-400" />
                          <span className="text-xs text-violet-700 font-medium">
                            {apt.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={11} className="text-violet-400" />
                          <span className="text-xs text-violet-700 font-medium">
                            {apt.time}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-violet-950">
                          {apt.fee}
                        </span>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2 mt-3">
                        {apt.status === "confirmed" ||
                        apt.status === "pending" ? (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-7 text-xs border-red-200 text-red-600 hover:bg-red-50 px-3 shadow-none"
                            >
                              Cancel
                            </Button>
                            <Button
                              size="sm"
                              className="h-7 text-xs bg-violet-800 hover:bg-violet-900 text-white px-3 shadow-none"
                              asChild
                            >
                              <Link href={`/doctors/${apt.slug}`}>
                                View doctor
                              </Link>
                            </Button>
                          </>
                        ) : apt.status === "completed" ? (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-7 text-xs border-violet-200 text-violet-800 hover:bg-violet-50 px-3 shadow-none flex items-center gap-1"
                              asChild
                            >
                              <Link href={`/doctors/${apt.slug}`}>
                                <RotateCcw size={11} /> Rebook
                              </Link>
                            </Button>
                            <Button
                              size="sm"
                              className="h-7 text-xs bg-violet-800 hover:bg-violet-900 text-white px-3 shadow-none"
                            >
                              Leave review
                            </Button>
                          </>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 text-xs border-violet-200 text-violet-800 hover:bg-violet-50 px-3 shadow-none flex items-center gap-1"
                            asChild
                          >
                            <Link href={`/doctors/${apt.slug}`}>
                              <Search size={11} /> Find similar doctor
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  {i < appointments.length - 1 && (
                    <Separator className="bg-violet-50 mt-4" />
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
