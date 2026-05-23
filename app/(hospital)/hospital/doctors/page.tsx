import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

import {
  Plus,
  Search,
  BadgeCheck,
  Star,
  CalendarDays,
  Clock,
  Activity,
  Users,
  UserCheck,
  UserX,
  MoreHorizontal,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Ahmed",
    initials: "SA",
    spec: "Cardiologist",
    exp: "12 yrs",
    rating: "4.9",
    appointments: 48,
    fee: "Rs. 2,000",
    status: "active",
    slug: "sarah-ahmed",
  },
  {
    name: "Dr. Hassan Malik",
    initials: "HM",
    spec: "Neurologist",
    exp: "8 yrs",
    rating: "4.8",
    appointments: 36,
    fee: "Rs. 3,000",
    status: "active",
    slug: "hassan-malik",
  },
  {
    name: "Dr. Ayesha Khan",
    initials: "AK",
    spec: "Dermatologist",
    exp: "10 yrs",
    rating: "4.7",
    appointments: 29,
    fee: "Rs. 1,500",
    status: "active",
    slug: "ayesha-khan",
  },
  {
    name: "Dr. Bilal Chaudhry",
    initials: "BC",
    spec: "Pediatrician",
    exp: "6 yrs",
    rating: "4.6",
    appointments: 21,
    fee: "Rs. 1,200",
    status: "active",
    slug: "bilal-chaudhry",
  },
  {
    name: "Dr. Nadia Farooq",
    initials: "NF",
    spec: "Psychiatrist",
    exp: "9 yrs",
    rating: "4.9",
    appointments: 18,
    fee: "Rs. 2,500",
    status: "inactive",
    slug: "nadia-farooq",
  },
];

export default function HospitalDoctors() {
  return (
    <div className="space-y-6">
      {/* ───────────────── HEADER ───────────────── */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1">
            <Activity size={13} className="text-violet-700" />

            <span className="text-xs font-medium text-violet-700">
              Medical Staff Management
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Doctors
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage hospital specialists and staff availability.
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[
          {
            label: "Total Doctors",
            value: "48",
            icon: Users,
            color: "bg-violet-100 text-violet-700",
          },
          {
            label: "Active",
            value: "44",
            icon: UserCheck,
            color: "bg-emerald-100 text-emerald-700",
          },
          {
            label: "Inactive",
            value: "04",
            icon: UserX,
            color: "bg-red-100 text-red-700",
          },
        ].map((stat) => {
          const Icon = stat.icon;

          return (
            <Card
              key={stat.label}
              className="rounded-3xl border border-slate-200/70 shadow-none"
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

                <p className="mt-5 text-xs text-slate-500">Updated recently</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* ───────────────── LIST ───────────────── */}
      <Card className="rounded-[30px] border border-slate-200/70 shadow-none">
        <CardContent className="p-6">
          {/* Filters */}
          <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            {/* Search */}
            <div className="relative w-full xl:max-w-sm">
              <Search
                size={15}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <Input
                placeholder="Search by doctor or specialization..."
                className="h-11 rounded-2xl border-slate-200 bg-slate-50 pl-11 text-sm shadow-none focus-visible:ring-violet-400"
              />
            </div>

            {/* Select */}
            <select className="h-11 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-600 outline-none transition focus:ring-2 focus:ring-violet-400">
              <option>All Specializations</option>
              <option>Cardiologist</option>
              <option>Neurologist</option>
              <option>Dermatologist</option>
              <option>Pediatrician</option>
            </select>
          </div>

          {/* Doctor Grid */}
          <div className="grid gap-4 xl:grid-cols-2">
            {doctors.map((doc) => (
              <div
                key={doc.slug}
                className="rounded-3xl border border-slate-100 bg-slate-50/70 p-5 transition-all hover:border-violet-200 hover:bg-white"
              >
                {/* Top */}
                <div className="flex items-start gap-4">
                  <Avatar className="h-14 w-14 border border-violet-100">
                    <AvatarFallback className="bg-violet-100 text-sm font-semibold text-violet-700">
                      {doc.initials}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-start justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-semibold text-slate-900">
                            {doc.name}
                          </h3>

                          <BadgeCheck size={15} className="text-violet-700" />

                          <Badge
                            className={`rounded-full border px-2.5 py-1 text-[11px] font-medium shadow-none ${
                              doc.status === "active"
                                ? "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-50"
                                : "border-slate-200 bg-slate-100 text-slate-500 hover:bg-slate-100"
                            }`}
                          >
                            {doc.status === "active" ? "Active" : "Inactive"}
                          </Badge>
                        </div>

                        <p className="mt-1 text-sm font-medium text-violet-700">
                          {doc.spec}
                        </p>
                      </div>

                      <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>

                    {/* Rating */}
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-1 rounded-xl border border-amber-100 bg-amber-50 px-3 py-1.5">
                        <Star
                          size={13}
                          className="fill-amber-400 text-amber-400"
                        />

                        <span className="text-xs font-semibold text-amber-700">
                          {doc.rating}
                        </span>
                      </div>

                      <div className="rounded-xl bg-violet-100 px-3 py-1.5 text-xs font-medium text-violet-700">
                        {doc.exp} experience
                      </div>

                      <div className="text-sm font-semibold text-slate-900">
                        {doc.fee}
                      </div>
                    </div>

                    {/* Appointment */}
                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                      <CalendarDays size={14} className="text-violet-500" />

                      <span>{doc.appointments} appointments completed</span>
                    </div>

                    {/* Actions */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-10 rounded-2xl border-violet-200 px-4 text-sm font-medium text-violet-700 shadow-none hover:bg-violet-50"
                      >
                        Edit
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        className="h-10 rounded-2xl border-violet-200 px-4 text-sm font-medium text-violet-700 shadow-none hover:bg-violet-50"
                      >
                        <Clock size={14} />
                        Availability
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        className="h-10 rounded-2xl border-red-200 px-4 text-sm font-medium text-red-600 shadow-none hover:bg-red-50"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
