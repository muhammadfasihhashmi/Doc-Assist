import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  MapPin,
  Phone,
  Globe,
  Users,
  Stethoscope,
  BadgeCheck,
  ChevronLeft,
  Clock,
  Building2,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const specializations = [
  "Cardiology",
  "Neurology",
  "Dermatology",
  "Pediatrics",
  "Orthopedics",
  "Oncology",
  "Psychiatry",
  "General Medicine",
  "Gynecology",
  "Ophthalmology",
  "ENT",
  "Radiology",
];

const doctors = [
  {
    name: "Dr. Sarah Ahmed",
    initials: "SA",
    spec: "Cardiologist",
    exp: "12 yrs",
    rating: "4.9",
    fee: "Rs. 2,000",
    available: "Today",
    slug: "sarah-ahmed",
  },
  {
    name: "Dr. Hassan Malik",
    initials: "HM",
    spec: "Neurologist",
    exp: "8 yrs",
    rating: "4.8",
    fee: "Rs. 3,000",
    available: "Tomorrow",
    slug: "hassan-malik",
  },
  {
    name: "Dr. Ayesha Khan",
    initials: "AK",
    spec: "Dermatologist",
    exp: "10 yrs",
    rating: "4.7",
    fee: "Rs. 1,500",
    available: "Today",
    slug: "ayesha-khan",
  },
  {
    name: "Dr. Usman Sheikh",
    initials: "US",
    spec: "Orthopedic",
    exp: "14 yrs",
    rating: "4.8",
    fee: "Rs. 2,800",
    available: "Today",
    slug: "usman-sheikh",
  },
];

export default async function HospitalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log("id", id);

  return (
    <div className="min-h-screen bg-white">
      {/* ── BACK ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/hospitals"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-violet-800 transition-colors font-medium"
        >
          <ChevronLeft size={14} /> Back to hospitals
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-violet-950 via-violet-900 to-violet-800 px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-700 rounded-full opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 left-0 w-52 h-52 bg-violet-600 rounded-full opacity-10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Logo placeholder */}
            <div className="w-20 h-20 bg-gradient-to-br from-violet-200 to-violet-300 rounded-2xl flex items-center justify-center text-xl font-bold text-violet-900 flex-shrink-0 ring-4 ring-violet-700">
              LG
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Lahore General Hospital
                </h1>
                <BadgeCheck size={20} className="text-violet-300" />
              </div>
              <div className="flex items-center gap-3 flex-wrap mt-2">
                <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full font-medium">
                  Government
                </span>
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-violet-400" />
                  <span className="text-xs text-violet-300">
                    Jail Road, Lahore
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  <span className="text-xs text-amber-300 font-semibold">
                    4.7
                  </span>
                  <span className="text-xs text-violet-400">(312 reviews)</span>
                </div>
              </div>
            </div>

            <Button
              size="sm"
              className="bg-white text-violet-900 hover:bg-violet-50 font-semibold text-xs shadow-none flex-shrink-0"
            >
              <CalendarDays size={13} className="mr-1.5" /> Book appointment
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {[
              { label: "Doctors", value: "48", icon: Users },
              { label: "Specializations", value: "12", icon: Stethoscope },
              { label: "Established", value: "1956", icon: Building2 },
              { label: "Rating", value: "4.7 / 5", icon: Star },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-violet-800/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-violet-700/50"
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Icon size={11} className="text-violet-400" />
                    <p className="text-xs text-violet-400">{stat.label}</p>
                  </div>
                  <p className="text-sm font-bold text-white">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* ── LEFT ── */}
          <div className="flex-1 flex flex-col gap-6">
            {/* About */}
            <Card className="border-violet-200 shadow-none">
              <CardContent className="pt-5 pb-5 px-5">
                <h2 className="text-sm font-bold text-violet-950 mb-3">
                  About
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Lahore General Hospital is one of Pakistan&ap`s oldest and
                  most trusted public healthcare institutions, established in
                  1956. Located on Jail Road, Lahore, it serves as a major
                  tertiary care facility with a capacity of over 1,500 beds.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">
                  The hospital houses some of Pakistan&aposs finest medical
                  specialists and is affiliated with Lahore Medical and Dental
                  College. It provides comprehensive healthcare services across
                  12 medical specializations, with an emergency department that
                  operates 24 hours a day.
                </p>
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card className="border-violet-200 shadow-none">
              <CardContent className="pt-5 pb-5 px-5">
                <h2 className="text-sm font-bold text-violet-950 mb-4">
                  Specializations
                </h2>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs bg-violet-50 text-violet-800 border border-violet-200 px-3 py-1.5 rounded-lg font-medium hover:bg-violet-100 transition-colors cursor-pointer"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Doctors */}
            <Card className="border-violet-200 shadow-none">
              <CardContent className="pt-5 pb-5 px-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-violet-950">
                    Our Doctors
                  </h2>
                  <Link
                    href="/doctors"
                    className="text-xs text-violet-800 hover:text-violet-950 font-semibold transition-colors flex items-center gap-1"
                  >
                    View all <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  {doctors.map((doc, i) => (
                    <div key={doc.slug}>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 flex-shrink-0">
                          <AvatarFallback className="bg-gradient-to-br from-violet-100 to-violet-200 text-violet-800 text-xs font-bold">
                            {doc.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 mb-0.5">
                            <p className="text-xs font-semibold text-violet-950 truncate">
                              {doc.name}
                            </p>
                            <BadgeCheck
                              size={12}
                              className="text-violet-700 flex-shrink-0"
                            />
                          </div>
                          <p className="text-xs text-violet-700">{doc.spec}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-slate-400">
                              {doc.exp} exp
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-xs text-slate-400">
                              {doc.fee}
                            </span>
                            <span className="text-slate-300">•</span>
                            <div className="flex items-center gap-1">
                              <Clock size={10} className="text-emerald-500" />
                              <span className="text-xs text-emerald-600 font-medium">
                                {doc.available}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <div className="flex items-center gap-1">
                            <Star
                              size={10}
                              className="text-amber-400 fill-amber-400"
                            />
                            <span className="text-xs font-semibold text-amber-700">
                              {doc.rating}
                            </span>
                          </div>
                          <Button
                            size="sm"
                            className="bg-violet-800 hover:bg-violet-900 text-white text-xs rounded-lg px-3 h-7 shadow-none"
                            asChild
                          >
                            <Link href={`/doctors/${doc.slug}`}>Book</Link>
                          </Button>
                        </div>
                      </div>
                      {i < doctors.length - 1 && (
                        <Separator className="bg-violet-50 mt-3" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-4">
            {/* Contact info */}
            <Card className="border-violet-200 shadow-none sticky top-20">
              <CardContent className="pt-5 pb-5 px-5">
                <h3 className="text-sm font-bold text-violet-950 mb-4">
                  Contact & Info
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={13} className="text-violet-800" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-violet-950">
                        Address
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Jail Road, Lahore, Punjab
                      </p>
                    </div>
                  </div>
                  <Separator className="bg-violet-100" />
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={13} className="text-violet-800" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-violet-950">
                        Phone
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        +92 42 9921 0000
                      </p>
                    </div>
                  </div>
                  <Separator className="bg-violet-100" />
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe size={13} className="text-violet-800" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-violet-950">
                        Website
                      </p>
                      <p className="text-xs text-violet-800 mt-0.5">
                        www.lgh.edu.pk
                      </p>
                    </div>
                  </div>
                  <Separator className="bg-violet-100" />
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={13} className="text-violet-800" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-violet-950">
                        Working Hours
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Mon – Sat: 8am – 8pm
                      </p>
                      <p className="text-xs text-slate-500">Emergency: 24/7</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-5 bg-violet-800 hover:bg-violet-900 text-white text-sm font-semibold rounded-lg shadow-none">
                  <CalendarDays size={14} className="mr-2" /> Book appointment
                </Button>
              </CardContent>
            </Card>

            {/* Rating card */}
            <Card className="border-violet-200 shadow-none">
              <CardContent className="pt-4 pb-4 px-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-semibold text-violet-950">
                    Patient rating
                  </p>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-amber-400 fill-amber-400" />
                    <span className="text-sm font-bold text-amber-700">
                      4.7
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400">
                  Based on 312 verified reviews
                </p>
                <div className="mt-3 flex flex-col gap-1.5">
                  {[
                    ["Excellent", "68%"],
                    ["Good", "22%"],
                    ["Average", "7%"],
                    ["Poor", "3%"],
                  ].map(([label, pct]) => (
                    <div key={label} className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 w-16">
                        {label}
                      </span>
                      <div className="flex-1 h-1.5 bg-violet-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-violet-700 rounded-full"
                          style={{ width: pct }}
                        />
                      </div>
                      <span className="text-xs text-slate-400 w-8 text-right">
                        {pct}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
