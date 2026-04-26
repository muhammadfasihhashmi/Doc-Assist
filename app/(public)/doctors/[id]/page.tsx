import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  Building2,
  MapPin,
  BadgeCheck,
  GraduationCap,
  CalendarDays,
  ChevronLeft,
  Phone,
  ThumbsUp,
} from "lucide-react";

const availability = [
  { day: "Mon", slots: ["9:00 AM", "10:30 AM", "2:00 PM"] },
  { day: "Tue", slots: ["11:00 AM", "3:30 PM"] },
  { day: "Wed", slots: ["9:30 AM", "1:00 PM", "4:00 PM"] },
  { day: "Thu", slots: ["10:00 AM", "2:30 PM"] },
  { day: "Fri", slots: ["9:00 AM", "11:30 AM"] },
];

const reviews = [
  {
    name: "Fatima K.",
    initials: "FK",
    rating: 5,
    date: "2 days ago",
    comment:
      "Dr. Ahmed is absolutely brilliant. She explained everything in detail and made me feel at ease. Highly recommend.",
  },
  {
    name: "Tariq M.",
    initials: "TM",
    rating: 5,
    date: "1 week ago",
    comment:
      "Very professional and experienced. Diagnosed my condition quickly and the treatment worked perfectly.",
  },
  {
    name: "Sana R.",
    initials: "SR",
    rating: 4,
    date: "2 weeks ago",
    comment:
      "Great doctor, very thorough. Wait time was a bit long but the consultation was worth it.",
  },
];

export default async function DoctorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);

  return (
    <div className="min-h-screen bg-white">
      {/* ── BACK ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/doctors"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-violet-800 transition-colors font-medium"
        >
          <ChevronLeft size={14} /> Back to doctors
        </Link>
      </div>

      {/* ── PROFILE HERO ── */}
      <section className="relative bg-gradient-to-br from-violet-950 via-violet-900 to-violet-800 px-4 sm:px-6 lg:px-8 py-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-700 rounded-full opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 left-0 w-48 h-48 bg-violet-600 rounded-full opacity-10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Avatar */}
            <Avatar className="w-20 h-20 flex-shrink-0 ring-4 ring-violet-700">
              <AvatarFallback className="bg-gradient-to-br from-violet-200 to-violet-300 text-violet-900 text-xl font-bold">
                SA
              </AvatarFallback>
            </Avatar>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Dr. Sarah Ahmed
                </h1>
                <BadgeCheck size={20} className="text-violet-300" />
              </div>
              <p className="text-violet-300 font-semibold text-sm mb-3">
                Cardiologist
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Building2 size={13} className="text-violet-400" />
                  <span className="text-xs text-violet-300">
                    Lahore General Hospital
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-violet-400" />
                  <span className="text-xs text-violet-300">Lahore</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  <span className="text-xs text-amber-300 font-semibold">
                    4.9
                  </span>
                  <span className="text-xs text-violet-400">(128 reviews)</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="border-violet-600 text-violet-200 hover:bg-violet-800 hover:text-white bg-transparent text-xs"
              >
                <Phone size={13} className="mr-1.5" /> Call clinic
              </Button>
              <Button
                size="sm"
                className="bg-white text-violet-900 hover:bg-violet-50 font-semibold text-xs shadow-none"
              >
                Book appointment
              </Button>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {[
              { label: "Experience", value: "12 Years" },
              { label: "Patients", value: "3,000+" },
              { label: "Reviews", value: "128" },
              { label: "Consultation", value: "Rs. 2,000" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-violet-800/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-violet-700/50"
              >
                <p className="text-xs text-violet-400 mb-0.5">{stat.label}</p>
                <p className="text-sm font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN BODY ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* ── LEFT CONTENT ── */}
          <div className="flex-1 flex flex-col gap-6">
            {/* About */}
            <Card className="border-violet-200 shadow-none">
              <CardContent className="pt-5 pb-5 px-5">
                <h2 className="text-sm font-bold text-violet-950 mb-3">
                  About
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Dr. Sarah Ahmed is a highly experienced Cardiologist with over
                  12 years of clinical practice at Lahore General Hospital. She
                  specializes in interventional cardiology, heart failure
                  management, and preventive cardiology. Dr. Ahmed completed her
                  MBBS from King Edward Medical University and her FCPS in
                  Cardiology from CPSP.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">
                  She is known for her patient-centered approach, taking time to
                  explain diagnoses and treatment options clearly. Her patients
                  consistently rate her highly for both medical expertise and
                  compassionate care.
                </p>
              </CardContent>
            </Card>

            {/* Qualifications */}
            <Card className="border-violet-200 shadow-none">
              <CardContent className="pt-5 pb-5 px-5">
                <h2 className="text-sm font-bold text-violet-950 mb-4">
                  Qualifications
                </h2>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      degree: "FCPS — Cardiology",
                      institute: "College of Physicians & Surgeons Pakistan",
                      year: "2016",
                    },
                    {
                      degree: "MBBS",
                      institute: "King Edward Medical University, Lahore",
                      year: "2011",
                    },
                    {
                      degree: "Fellowship",
                      institute: "Aga Khan University Hospital",
                      year: "2017",
                    },
                  ].map((q) => (
                    <div key={q.degree} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <GraduationCap size={14} className="text-violet-800" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-violet-950">
                          {q.degree}
                        </p>
                        <p className="text-xs text-slate-500">{q.institute}</p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {q.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="border-violet-200 shadow-none">
              <CardContent className="pt-5 pb-5 px-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-violet-950">
                    Patient Reviews
                  </h2>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-100 px-2.5 py-1.5 rounded-xl">
                    <Star size={12} className="text-amber-400 fill-amber-400" />
                    <span className="text-xs font-bold text-amber-700">
                      4.9
                    </span>
                    <span className="text-xs text-amber-500">/ 5</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {reviews.map((review, i) => (
                    <div key={i}>
                      <div className="flex items-start gap-3">
                        <Avatar className="w-8 h-8 flex-shrink-0">
                          <AvatarFallback className="bg-violet-100 text-violet-800 text-xs font-semibold">
                            {review.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-xs font-semibold text-violet-950">
                              {review.name}
                            </p>
                            <span className="text-xs text-slate-400">
                              {review.date}
                            </span>
                          </div>
                          <div className="flex items-center gap-0.5 mb-1.5">
                            {Array.from({ length: review.rating }).map(
                              (_, j) => (
                                <Star
                                  key={j}
                                  size={10}
                                  className="text-amber-400 fill-amber-400"
                                />
                              ),
                            )}
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                      {i < reviews.length - 1 && (
                        <Separator className="bg-violet-50 mt-4" />
                      )}
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-violet-200 text-violet-800 hover:bg-violet-50 text-xs rounded-lg"
                >
                  View all 128 reviews
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
            {/* Book slot */}
            <Card className="border-violet-300 shadow-sm bg-gradient-to-b from-violet-50 to-white sticky top-20">
              <CardContent className="pt-5 pb-5 px-5">
                <h3 className="text-sm font-bold text-violet-950 mb-1">
                  Book an appointment
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Select a day and time slot below
                </p>

                {/* Days */}
                <div className="flex gap-2 overflow-x-auto pb-1 mb-4">
                  {availability.map((day, i) => (
                    <button
                      key={day.day}
                      className={`flex-shrink-0 flex flex-col items-center px-3 py-2 rounded-xl text-xs font-semibold transition-colors border ${
                        i === 0
                          ? "bg-violet-800 text-white border-violet-800"
                          : "text-violet-800 border-violet-200 hover:bg-violet-50"
                      }`}
                    >
                      <span>{day.day}</span>
                      <span
                        className={`text-xs mt-0.5 font-normal ${i === 0 ? "text-violet-300" : "text-slate-400"}`}
                      >
                        {day.slots.length} slots
                      </span>
                    </button>
                  ))}
                </div>

                {/* Time slots */}
                <p className="text-xs font-semibold text-violet-950 uppercase tracking-widest mb-2">
                  Available slots
                </p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {availability[0].slots.map((slot, i) => (
                    <button
                      key={slot}
                      className={`text-xs py-2 rounded-lg font-medium border transition-colors ${
                        i === 0
                          ? "bg-violet-800 text-white border-violet-800"
                          : "text-violet-800 border-violet-200 hover:bg-violet-50"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>

                <Separator className="bg-violet-100 mb-4" />

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-slate-500">
                    Consultation fee
                  </span>
                  <span className="text-sm font-bold text-violet-950">
                    Rs. 2,000
                  </span>
                </div>

                <Button className="w-full bg-violet-800 hover:bg-violet-900 text-white text-sm font-semibold rounded-lg shadow-none">
                  <CalendarDays size={14} className="mr-2" /> Confirm booking
                </Button>
                <p className="text-xs text-slate-400 text-center mt-2">
                  Free cancellation up to 2 hours before
                </p>
              </CardContent>
            </Card>

            {/* Recommend */}
            <Card className="border-violet-200 shadow-none">
              <CardContent className="pt-4 pb-4 px-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ThumbsUp size={15} className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-violet-950">
                    97% recommend
                  </p>
                  <p className="text-xs text-slate-400">
                    Based on 128 patient reviews
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
