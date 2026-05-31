// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import {
//   CalendarDays,
//   Clock,
//   Star,
//   Building2,
//   ArrowRight,
//   BadgeCheck,
//   Search,
//   Activity,
//   CheckCircle2,
//   XCircle,
// } from "lucide-react";

// const upcomingAppointments = [
//   {
//     doctor: "Dr. Sarah Ahmed",
//     initials: "SA",
//     spec: "Cardiologist",
//     hospital: "Lahore General Hospital",
//     date: "Tomorrow",
//     time: "10:30 AM",
//     status: "confirmed",
//     slug: "sarah-ahmed",
//   },
//   {
//     doctor: "Dr. Hassan Malik",
//     initials: "HM",
//     spec: "Neurologist",
//     hospital: "Shaukat Khanum",
//     date: "Dec 28, 2026",
//     time: "2:00 PM",
//     status: "pending",
//     slug: "hassan-malik",
//   },
// ];

// const recentDoctors = [
//   {
//     name: "Dr. Ayesha Khan",
//     initials: "AK",
//     spec: "Dermatologist",
//     rating: "4.7",
//     slug: "ayesha-khan",
//   },
//   {
//     name: "Dr. Usman Sheikh",
//     initials: "US",
//     spec: "Orthopedic",
//     rating: "4.8",
//     slug: "usman-sheikh",
//   },
// ];

// const statusConfig: Record<
//   string,
//   { label: string; className: string; icon: React.ElementType }
// > = {
//   confirmed: {
//     label: "Confirmed",
//     className: "bg-emerald-50 text-emerald-700 border-emerald-200",
//     icon: CheckCircle2,
//   },
//   pending: {
//     label: "Pending",
//     className: "bg-amber-50 text-amber-700 border-amber-200",
//     icon: Clock,
//   },
//   cancelled: {
//     label: "Cancelled",
//     className: "bg-red-50 text-red-600 border-red-200",
//     icon: XCircle,
//   },
// };

// export default function PatientDashboard() {
//   return (
//     <div className="flex flex-col gap-6 max-w-full">
//       {/* ── WELCOME ── */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-xl font-bold text-violet-950 tracking-tight">
//             Good morning, Muhammad 👋
//           </h1>
//           <p className="text-sm text-slate-500 mt-0.5">
//             Here&apos;s an overview of your health activity.
//           </p>
//         </div>
//         <Button
//           className="bg-violet-800 hover:bg-violet-900 text-white text-sm font-semibold rounded-lg shadow-none"
//           asChild
//         >
//           <Link href="/doctors" className="flex items-center gap-2">
//             <Search size={14} /> Find a doctor
//           </Link>
//         </Button>
//       </div>

//       {/* ── STATS ── */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//         {[
//           {
//             label: "Total Appointments",
//             value: "12",
//             icon: CalendarDays,
//             color: "bg-violet-100 text-violet-800",
//           },
//           {
//             label: "Upcoming",
//             value: "2",
//             icon: Clock,
//             color: "bg-amber-50 text-amber-700",
//           },
//           {
//             label: "Completed",
//             value: "9",
//             icon: CheckCircle2,
//             color: "bg-emerald-50 text-emerald-700",
//           },
//           {
//             label: "Doctors Visited",
//             value: "5",
//             icon: Activity,
//             color: "bg-blue-50 text-blue-700",
//           },
//         ].map((stat) => {
//           const Icon = stat.icon;
//           return (
//             <Card key={stat.label} className="border-violet-200 shadow-none">
//               <CardContent className="pt-4 pb-4 px-4">
//                 <div
//                   className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${stat.color}`}
//                 >
//                   <Icon size={15} />
//                 </div>
//                 <p className="text-xl font-bold text-violet-950">
//                   {stat.value}
//                 </p>
//                 <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>

//       {/* ── UPCOMING APPOINTMENTS ── */}
//       <div>
//         <div className="flex items-center justify-between mb-3">
//           <h2 className="text-sm font-bold text-violet-950">
//             Upcoming Appointments
//           </h2>
//           <Link
//             href="/patient/appointments"
//             className="text-xs text-violet-800 hover:text-violet-950 font-semibold transition-colors flex items-center gap-1"
//           >
//             View all <ArrowRight size={12} />
//           </Link>
//         </div>
//         <div className="flex flex-col gap-3">
//           {upcomingAppointments.map((apt) => {
//             const status = statusConfig[apt.status];
//             const StatusIcon = status.icon;
//             return (
//               <Card
//                 key={apt.doctor}
//                 className="border-violet-200 shadow-none hover:border-violet-300 transition-colors"
//               >
//                 <CardContent className="pt-4 pb-4 px-4">
//                   <div className="flex items-start gap-3">
//                     <Avatar className="w-10 h-10 flex-shrink-0">
//                       <AvatarFallback className="bg-violet-100 text-violet-800 text-xs font-bold">
//                         {apt.initials}
//                       </AvatarFallback>
//                     </Avatar>
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-start justify-between gap-2 flex-wrap">
//                         <div>
//                           <div className="flex items-center gap-1 mb-0.5">
//                             <p className="text-sm font-semibold text-violet-950">
//                               {apt.doctor}
//                             </p>
//                             <BadgeCheck size={13} className="text-violet-700" />
//                           </div>
//                           <p className="text-xs text-violet-700 font-medium">
//                             {apt.spec}
//                           </p>
//                         </div>
//                         <span
//                           className={`text-xs font-medium px-2 py-1 rounded-full border flex items-center gap-1 ${status.className}`}
//                         >
//                           <StatusIcon size={11} />
//                           {status.label}
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-3 mt-2 flex-wrap">
//                         <div className="flex items-center gap-1">
//                           <Building2 size={11} className="text-slate-400" />
//                           <span className="text-xs text-slate-500">
//                             {apt.hospital}
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <CalendarDays size={11} className="text-violet-400" />
//                           <span className="text-xs text-violet-700 font-medium">
//                             {apt.date}
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Clock size={11} className="text-violet-400" />
//                           <span className="text-xs text-violet-700 font-medium">
//                             {apt.time}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>
//       </div>

//       {/* ── BOTTOM ROW ── */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {/* Recent doctors */}
//         <Card className="border-violet-200 shadow-none">
//           <CardContent className="pt-5 pb-5 px-5">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-sm font-bold text-violet-950">
//                 Recent Doctors
//               </h2>
//               <Link
//                 href="/doctors"
//                 className="text-xs text-violet-800 hover:text-violet-950 font-semibold flex items-center gap-1"
//               >
//                 Find more <ArrowRight size={12} />
//               </Link>
//             </div>
//             <div className="flex flex-col gap-3">
//               {recentDoctors.map((doc) => (
//                 <div key={doc.slug} className="flex items-center gap-3">
//                   <Avatar className="w-9 h-9 flex-shrink-0">
//                     <AvatarFallback className="bg-violet-100 text-violet-800 text-xs font-bold">
//                       {doc.initials}
//                     </AvatarFallback>
//                   </Avatar>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-xs font-semibold text-violet-950 truncate">
//                       {doc.name}
//                     </p>
//                     <p className="text-xs text-slate-400">{doc.spec}</p>
//                   </div>
//                   <div className="flex items-center gap-1 bg-amber-50 border border-amber-100 px-2 py-1 rounded-lg">
//                     <Star size={10} className="text-amber-400 fill-amber-400" />
//                     <span className="text-xs font-semibold text-amber-700">
//                       {doc.rating}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Quick actions */}
//         <Card className="border-violet-200 shadow-none">
//           <CardContent className="pt-5 pb-5 px-5">
//             <h2 className="text-sm font-bold text-violet-950 mb-4">
//               Quick Actions
//             </h2>
//             <div className="flex flex-col gap-2">
//               {[
//                 {
//                   label: "Book a new appointment",
//                   href: "/doctors",
//                   icon: CalendarDays,
//                 },
//                 { label: "Browse all doctors", href: "/doctors", icon: Search },
//                 {
//                   label: "View my appointments",
//                   href: "/patient/appointments",
//                   icon: Activity,
//                 },
//                 {
//                   label: "Update my profile",
//                   href: "/patient/profile",
//                   icon: BadgeCheck,
//                 },
//               ].map((action) => {
//                 const Icon = action.icon;
//                 return (
//                   <Link
//                     key={action.label}
//                     href={action.href}
//                     className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-violet-50 transition-colors group"
//                   >
//                     <div className="w-7 h-7 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-violet-800 transition-colors">
//                       <Icon
//                         size={13}
//                         className="text-violet-800 group-hover:text-white transition-colors"
//                       />
//                     </div>
//                     <span className="text-xs font-medium text-slate-600 group-hover:text-violet-800 transition-colors">
//                       {action.label}
//                     </span>
//                     <ChevronRight
//                       size={13}
//                       className="ml-auto text-slate-300 group-hover:text-violet-400 transition-colors"
//                     />
//                   </Link>
//                 );
//               })}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

// function ChevronRight({
//   size,
//   className,
// }: {
//   size: number;
//   className: string;
// }) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       className={className}
//     >
//       <path
//         d="M9 18l6-6-6-6"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  CalendarDays,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  BadgeCheck,
  Search,
  Activity,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";
import { usePatientAppointments } from "@/hooks/usePatientAppointments";

async function fetchPatientProfile() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;
  const { data } = await supabase
    .from("profiles")
    .select("name")
    .eq("id", user.id)
    .single();
  return data;
}

const statusConfig = {
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

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  if (date.toDateString() === today.toDateString()) return "Today";
  if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow";
  return date.toLocaleDateString("en-PK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatTime(timeStr: string) {
  const [hours, minutes] = timeStr.split(":");
  const h = parseInt(hours);
  const ampm = h >= 12 ? "PM" : "AM";
  return `${h % 12 || 12}:${minutes} ${ampm}`;
}

export default function PatientDashboard() {
  const { data: profile } = useQuery({
    queryKey: ["patient-profile"],
    queryFn: fetchPatientProfile,
  });

  const { data: appointments = [], isLoading } = usePatientAppointments();

  const upcoming = appointments.filter(
    (a) => a.status === "confirmed" || a.status === "pending",
  );
  const completed = appointments.filter((a) => a.status === "completed");
  const cancelled = appointments.filter((a) => a.status === "cancelled");
  const firstName = profile?.name?.split(" ")[0] ?? "there";

  return (
    <div className="flex flex-col gap-6 max-w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-violet-950 tracking-tight">
            Good morning, {firstName} 👋
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Here&apos;s an overview of your health activity.
          </p>
        </div>
        <Button
          className="bg-violet-800 hover:bg-violet-900 text-white text-sm font-semibold rounded-lg shadow-none"
          asChild
        >
          <Link href="/doctors" className="flex items-center gap-2">
            <Search size={14} /> Find a doctor
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          {
            label: "Total",
            value: appointments.length,
            icon: CalendarDays,
            color: "bg-violet-100 text-violet-800",
          },
          {
            label: "Upcoming",
            value: upcoming.length,
            icon: Clock,
            color: "bg-amber-50 text-amber-700",
          },
          {
            label: "Completed",
            value: completed.length,
            icon: CheckCircle2,
            color: "bg-emerald-50 text-emerald-700",
          },
          {
            label: "Cancelled",
            value: cancelled.length,
            icon: Activity,
            color: "bg-red-50 text-red-600",
          },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="border-violet-200 shadow-none">
              <CardContent className="pt-4 pb-4 px-4">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${stat.color}`}
                >
                  <Icon size={15} />
                </div>
                <p className="text-xl font-bold text-violet-950">
                  {isLoading ? "—" : stat.value}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Upcoming */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-violet-950">
            Upcoming Appointments
          </h2>
          <Link
            href="/patient/appointments"
            className="text-xs text-violet-800 hover:text-violet-950 font-semibold flex items-center gap-1"
          >
            View all <ArrowRight size={12} />
          </Link>
        </div>

        {isLoading ? (
          <Card className="border-violet-200 shadow-none">
            <CardContent className="py-8 text-center text-sm text-slate-400">
              Loading...
            </CardContent>
          </Card>
        ) : upcoming.length === 0 ? (
          <Card className="border-violet-200 shadow-none">
            <CardContent className="py-8 text-center">
              <p className="text-sm text-slate-400">
                No upcoming appointments.
              </p>
              <Button
                size="sm"
                className="mt-3 bg-violet-800 hover:bg-violet-900 text-white text-xs shadow-none"
                asChild
              >
                <Link href="/doctors">Book one now</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="flex flex-col gap-3">
            {upcoming.slice(0, 3).map((apt) => {
              const status = statusConfig[apt.status];
              const StatusIcon = status.icon;
              const initials = apt.doctor.user.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")
                .toUpperCase()
                .slice(0, 2);
              return (
                <Card
                  key={apt.id}
                  className="border-violet-200 shadow-none hover:border-violet-300 transition-colors"
                >
                  <CardContent className="pt-4 pb-4 px-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-10 h-10 flex-shrink-0">
                        <AvatarFallback className="bg-violet-100 text-violet-800 text-xs font-bold">
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <div>
                            <div className="flex items-center gap-1 mb-0.5">
                              <p className="text-sm font-semibold text-violet-950">
                                {apt.doctor.user.name}
                              </p>
                              <BadgeCheck
                                size={13}
                                className="text-violet-700"
                              />
                            </div>
                            <p className="text-xs text-violet-700 font-medium">
                              {apt.doctor.specialization.name}
                            </p>
                          </div>
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded-full border flex items-center gap-1 ${status.className}`}
                          >
                            <StatusIcon size={11} />
                            {status.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-2 flex-wrap">
                          <div className="flex items-center gap-1">
                            <CalendarDays
                              size={11}
                              className="text-violet-400"
                            />
                            <span className="text-xs text-violet-700 font-medium">
                              {formatDate(apt.appointment_date)}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={11} className="text-violet-400" />
                            <span className="text-xs text-violet-700 font-medium">
                              {formatTime(apt.appointment_time)}
                            </span>
                          </div>
                          <span className="text-xs text-slate-400">
                            {apt.doctor.hospital.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <Card className="border-violet-200 shadow-none">
        <CardContent className="pt-5 pb-5 px-5">
          <h2 className="text-sm font-bold text-violet-950 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              {
                label: "Book a new appointment",
                href: "/doctors",
                icon: CalendarDays,
              },
              {
                label: "View all appointments",
                href: "/patient/appointments",
                icon: Activity,
              },
              { label: "Browse doctors", href: "/doctors", icon: Search },
              {
                label: "Update my profile",
                href: "/patient/profile",
                icon: BadgeCheck,
              },
            ].map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-violet-50 transition-colors group"
                >
                  <div className="w-7 h-7 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-violet-800 transition-colors">
                    <Icon
                      size={13}
                      className="text-violet-800 group-hover:text-white transition-colors"
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-600 group-hover:text-violet-800 transition-colors">
                    {action.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
