import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  MapPin,
  Star,
  Clock,
  Building2,
  BadgeCheck,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";

const specializations = [
  "All",
  "Cardiologist",
  "Neurologist",
  "Dermatologist",
  "Pediatrician",
  "Orthopedic",
  "Dentist",
  "Psychiatrist",
  "General Physician",
];

const doctors = [
  {
    name: "Dr. Sarah Ahmed",
    initials: "SA",
    spec: "Cardiologist",
    hospital: "Lahore General Hospital",
    city: "Lahore",
    exp: "12 yrs",
    rating: "4.9",
    reviews: 128,
    fee: "Rs. 2,000",
    available: "Today",
    slug: "sarah-ahmed",
    verified: true,
  },
  {
    name: "Dr. Hassan Malik",
    initials: "HM",
    spec: "Neurologist",
    hospital: "Shaukat Khanum",
    city: "Lahore",
    exp: "8 yrs",
    rating: "4.8",
    reviews: 94,
    fee: "Rs. 3,000",
    available: "Tomorrow",
    slug: "hassan-malik",
    verified: true,
  },
  {
    name: "Dr. Ayesha Khan",
    initials: "AK",
    spec: "Dermatologist",
    hospital: "Services Hospital",
    city: "Karachi",
    exp: "10 yrs",
    rating: "4.7",
    reviews: 76,
    fee: "Rs. 1,500",
    available: "Today",
    slug: "ayesha-khan",
    verified: true,
  },
  {
    name: "Dr. Bilal Chaudhry",
    initials: "BC",
    spec: "Pediatrician",
    hospital: "Children Hospital",
    city: "Lahore",
    exp: "6 yrs",
    rating: "4.6",
    reviews: 55,
    fee: "Rs. 1,200",
    available: "Today",
    slug: "bilal-chaudhry",
    verified: true,
  },
  {
    name: "Dr. Nadia Farooq",
    initials: "NF",
    spec: "Psychiatrist",
    hospital: "Aga Khan Hospital",
    city: "Karachi",
    exp: "9 yrs",
    rating: "4.9",
    reviews: 110,
    fee: "Rs. 2,500",
    available: "Tomorrow",
    slug: "nadia-farooq",
    verified: true,
  },
  {
    name: "Dr. Usman Sheikh",
    initials: "US",
    spec: "Orthopedic",
    hospital: "Doctors Hospital",
    city: "Lahore",
    exp: "14 yrs",
    rating: "4.8",
    reviews: 143,
    fee: "Rs. 2,800",
    available: "Today",
    slug: "usman-sheikh",
    verified: true,
  },
];

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO SEARCH ── */}
      <section className="relative bg-gradient-to-br from-violet-950 via-violet-900 to-violet-800 px-4 sm:px-6 lg:px-8 py-14 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-700 rounded-full opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-52 h-52 bg-violet-600 rounded-full opacity-10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <Badge className="bg-violet-700 text-violet-200 hover:bg-violet-700 border-none mb-4 text-xs px-3 py-1">
            500+ verified doctors
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            Find your doctor
          </h1>
          <p className="text-sm text-violet-300 mb-7 max-w-md">
            Search across top hospitals and book instantly — no calls, no
            waiting.
          </p>

          {/* Search bar */}
          <div className="bg-white rounded-2xl p-2.5 max-w-2xl flex flex-col sm:flex-row gap-2 sm:gap-0 sm:items-center shadow-xl shadow-violet-950/30">
            <div className="flex items-center gap-2.5 flex-1 px-3">
              <Search size={15} className="text-violet-400 flex-shrink-0" />
              <Input
                type="text"
                placeholder="Specialization or doctor name"
                className="border-0 shadow-none focus-visible:ring-0 text-sm placeholder:text-slate-400 p-0 h-9"
              />
            </div>
            <div className="hidden sm:block w-px h-9 bg-violet-100" />
            <div className="flex items-center gap-2.5 flex-1 px-3">
              <MapPin size={15} className="text-violet-400 flex-shrink-0" />
              <Input
                type="text"
                placeholder="City"
                className="border-0 shadow-none focus-visible:ring-0 text-sm placeholder:text-slate-400 p-0 h-9"
              />
            </div>
            <Button className="bg-violet-800 hover:bg-violet-900 text-white rounded-xl px-6 text-sm font-semibold shadow-none">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* ── SIDEBAR FILTERS ── */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-20">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={15} className="text-violet-800" />
                  <span className="text-sm font-semibold text-violet-950">
                    Filters
                  </span>
                </div>
                <button className="text-xs text-violet-800 hover:text-violet-950 font-medium transition-colors">
                  Clear all
                </button>
              </div>

              {/* Specialization filter */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-violet-950 uppercase tracking-widest mb-3">
                  Specialization
                </p>
                <div className="flex flex-col gap-1.5">
                  {specializations.map((spec) => (
                    <button
                      key={spec}
                      className={`text-left text-xs px-3 py-2 rounded-lg transition-colors font-medium ${
                        spec === "All"
                          ? "bg-violet-800 text-white"
                          : "text-slate-600 hover:bg-violet-50 hover:text-violet-800"
                      }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>

              <Separator className="bg-violet-100 mb-6" />

              {/* City filter */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-violet-950 uppercase tracking-widest mb-3">
                  City
                </p>
                <div className="flex flex-col gap-1.5">
                  {[
                    "All Cities",
                    "Lahore",
                    "Karachi",
                    "Islamabad",
                    "Peshawar",
                    "Multan",
                  ].map((city) => (
                    <button
                      key={city}
                      className={`text-left text-xs px-3 py-2 rounded-lg transition-colors font-medium ${
                        city === "All Cities"
                          ? "bg-violet-800 text-white"
                          : "text-slate-600 hover:bg-violet-50 hover:text-violet-800"
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              <Separator className="bg-violet-100 mb-6" />

              {/* Availability filter */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-violet-950 uppercase tracking-widest mb-3">
                  Availability
                </p>
                <div className="flex flex-col gap-1.5">
                  {["Any time", "Available today", "Available tomorrow"].map(
                    (opt) => (
                      <button
                        key={opt}
                        className={`text-left text-xs px-3 py-2 rounded-lg transition-colors font-medium ${
                          opt === "Any time"
                            ? "bg-violet-800 text-white"
                            : "text-slate-600 hover:bg-violet-50 hover:text-violet-800"
                        }`}
                      >
                        {opt}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <Separator className="bg-violet-100 mb-6" />

              {/* Fee range */}
              <div>
                <p className="text-xs font-semibold text-violet-950 uppercase tracking-widest mb-3">
                  Fee range
                </p>
                <div className="flex flex-col gap-1.5">
                  {[
                    "Any fee",
                    "Under Rs. 1,000",
                    "Rs. 1,000–2,000",
                    "Rs. 2,000–3,000",
                    "Above Rs. 3,000",
                  ].map((fee) => (
                    <button
                      key={fee}
                      className={`text-left text-xs px-3 py-2 rounded-lg transition-colors font-medium ${
                        fee === "Any fee"
                          ? "bg-violet-800 text-white"
                          : "text-slate-600 hover:bg-violet-50 hover:text-violet-800"
                      }`}
                    >
                      {fee}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* ── DOCTOR CARDS ── */}
          <div className="flex-1">
            {/* Results bar */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-slate-500">
                Showing <span className="font-semibold text-violet-950">6</span>{" "}
                doctors
              </p>
              <select className="text-xs border border-violet-200 rounded-lg px-3 py-2 text-slate-600 focus:outline-none focus:ring-1 focus:ring-violet-400 bg-white">
                <option>Sort: Recommended</option>
                <option>Sort: Highest rated</option>
                <option>Sort: Lowest fee</option>
                <option>Sort: Most reviewed</option>
              </select>
            </div>

            {/* Cards grid */}
            <div className="flex flex-col gap-4">
              {doctors.map((doc) => (
                <Link key={doc.slug} href={`/doctors/${doc.slug}`}>
                  <Card className="border-violet-200 bg-white hover:border-violet-400 hover:shadow-md hover:shadow-violet-100 transition-all cursor-pointer group">
                    <CardContent className="pt-4 pb-4 px-5">
                      <div className="flex items-start gap-4">
                        {/* Avatar */}
                        <Avatar className="w-14 h-14 flex-shrink-0">
                          <AvatarFallback className="bg-gradient-to-br from-violet-100 to-violet-200 text-violet-800 text-sm font-bold">
                            {doc.initials}
                          </AvatarFallback>
                        </Avatar>

                        {/* Main info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 flex-wrap">
                            <div>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <p className="text-sm font-bold text-violet-950 group-hover:text-violet-800 transition-colors">
                                  {doc.name}
                                </p>
                                {doc.verified && (
                                  <BadgeCheck
                                    size={14}
                                    className="text-violet-700 flex-shrink-0"
                                  />
                                )}
                              </div>
                              <p className="text-xs text-violet-700 font-semibold mb-1">
                                {doc.spec}
                              </p>
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <Building2
                                  size={11}
                                  className="text-slate-400"
                                />
                                <span className="text-xs text-slate-500">
                                  {doc.hospital}
                                </span>
                                <span className="text-slate-300">•</span>
                                <MapPin size={11} className="text-slate-400" />
                                <span className="text-xs text-slate-500">
                                  {doc.city}
                                </span>
                              </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 bg-amber-50 border border-amber-100 px-2.5 py-1.5 rounded-xl flex-shrink-0">
                              <Star
                                size={12}
                                className="text-amber-400 fill-amber-400"
                              />
                              <span className="text-xs font-bold text-amber-700">
                                {doc.rating}
                              </span>
                              <span className="text-xs text-amber-500">
                                ({doc.reviews})
                              </span>
                            </div>
                          </div>

                          {/* Bottom row */}
                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-violet-50 flex-wrap gap-2">
                            <div className="flex items-center gap-3">
                              <span className="text-xs bg-violet-50 text-violet-700 font-medium px-2.5 py-1 rounded-lg">
                                {doc.exp} exp
                              </span>
                              <span className="text-xs bg-violet-50 text-violet-700 font-medium px-2.5 py-1 rounded-lg">
                                {doc.reviews} reviews
                              </span>
                              <div className="flex items-center gap-1">
                                <Clock size={11} className="text-emerald-500" />
                                <span className="text-xs text-emerald-600 font-semibold">
                                  {doc.available}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-bold text-violet-950">
                                {doc.fee}
                              </span>
                              <Button
                                size="sm"
                                className="bg-violet-800 hover:bg-violet-900 text-white text-xs rounded-lg px-4 shadow-none h-8"
                                // onClick={(e) => e.preventDefault()}
                              >
                                Book now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {[1, 2, 3, "...", 8].map((page, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 text-xs rounded-lg font-medium transition-colors ${
                    page === 1
                      ? "bg-violet-800 text-white"
                      : "text-slate-500 hover:bg-violet-50 hover:text-violet-800 border border-violet-200"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="w-8 h-8 text-xs rounded-lg font-medium text-slate-500 hover:bg-violet-50 hover:text-violet-800 border border-violet-200 flex items-center justify-center">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
