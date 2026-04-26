import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  MapPin,
  Star,
  Users,
  ChevronRight,
  Stethoscope,
  SlidersHorizontal,
} from "lucide-react";

const hospitals = [
  {
    name: "Lahore General Hospital",
    initials: "LG",
    city: "Lahore",
    address: "Jail Road, Lahore",
    type: "Government",
    doctors: 48,
    specializations: 12,
    rating: "4.7",
    reviews: 312,
    slug: "lahore-general",
  },
  {
    name: "Shaukat Khanum Memorial",
    initials: "SK",
    city: "Lahore",
    address: "7A Block R3, M.A. Johar Town",
    type: "Private",
    doctors: 64,
    specializations: 18,
    rating: "4.9",
    reviews: 540,
    slug: "shaukat-khanum",
  },
  {
    name: "Aga Khan Hospital",
    initials: "AK",
    city: "Karachi",
    address: "Stadium Road, Karachi",
    type: "Private",
    doctors: 92,
    specializations: 24,
    rating: "4.9",
    reviews: 720,
    slug: "aga-khan",
  },
  {
    name: "Services Hospital",
    initials: "SH",
    city: "Lahore",
    address: "Jail Road, Lahore",
    type: "Government",
    doctors: 55,
    specializations: 15,
    rating: "4.5",
    reviews: 280,
    slug: "services-hospital",
  },
  {
    name: "Doctors Hospital",
    initials: "DH",
    city: "Lahore",
    address: "152 Canal Bank Road, Lahore",
    type: "Private",
    doctors: 38,
    specializations: 14,
    rating: "4.8",
    reviews: 190,
    slug: "doctors-hospital",
  },
  {
    name: "PIMS Hospital",
    initials: "PI",
    city: "Islamabad",
    address: "G-8/3, Islamabad",
    type: "Government",
    doctors: 70,
    specializations: 20,
    rating: "4.6",
    reviews: 340,
    slug: "pims",
  },
];

const typeColors: Record<string, string> = {
  Government: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Private: "bg-violet-50 text-violet-700 border-violet-200",
};

export default function HospitalsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-violet-950 via-violet-900 to-violet-800 px-4 sm:px-6 lg:px-8 py-14 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-700 rounded-full opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-52 h-52 bg-violet-600 rounded-full opacity-10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <Badge className="bg-violet-700 text-violet-200 hover:bg-violet-700 border-none mb-4 text-xs px-3 py-1">
            80+ partner hospitals
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            Find a hospital
          </h1>
          <p className="text-sm text-violet-300 mb-7 max-w-md">
            Browse verified hospitals across Pakistan and connect with their
            doctors instantly.
          </p>

          <div className="bg-white rounded-2xl p-2.5 max-w-xl flex flex-col sm:flex-row gap-2 sm:gap-0 sm:items-center shadow-xl shadow-violet-950/30">
            <div className="flex items-center gap-2.5 flex-1 px-3">
              <Search size={15} className="text-violet-400 flex-shrink-0" />
              <Input
                type="text"
                placeholder="Hospital name"
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

      {/* ── MAIN ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* ── SIDEBAR ── */}
          <aside className="w-full lg:w-56 flex-shrink-0">
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

              {/* City */}
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

              {/* Type */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-violet-950 uppercase tracking-widest mb-3">
                  Type
                </p>
                <div className="flex flex-col gap-1.5">
                  {["All Types", "Government", "Private"].map((type) => (
                    <button
                      key={type}
                      className={`text-left text-xs px-3 py-2 rounded-lg transition-colors font-medium ${
                        type === "All Types"
                          ? "bg-violet-800 text-white"
                          : "text-slate-600 hover:bg-violet-50 hover:text-violet-800"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <Separator className="bg-violet-100 mb-6" />

              {/* Rating */}
              <div>
                <p className="text-xs font-semibold text-violet-950 uppercase tracking-widest mb-3">
                  Min Rating
                </p>
                <div className="flex flex-col gap-1.5">
                  {["Any", "4.0+", "4.5+", "4.8+"].map((r) => (
                    <button
                      key={r}
                      className={`text-left text-xs px-3 py-2 rounded-lg transition-colors font-medium ${
                        r === "Any"
                          ? "bg-violet-800 text-white"
                          : "text-slate-600 hover:bg-violet-50 hover:text-violet-800"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* ── HOSPITAL CARDS ── */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-slate-500">
                Showing <span className="font-semibold text-violet-950">6</span>{" "}
                hospitals
              </p>
              <select className="text-xs border border-violet-200 rounded-lg px-3 py-2 text-slate-600 focus:outline-none focus:ring-1 focus:ring-violet-400 bg-white">
                <option>Sort: Recommended</option>
                <option>Sort: Highest rated</option>
                <option>Sort: Most doctors</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hospitals.map((h) => (
                <Link key={h.slug} href={`/hospitals/${h.slug}`}>
                  <Card className="border-violet-200 bg-white hover:border-violet-400 hover:shadow-md hover:shadow-violet-100 transition-all cursor-pointer group h-full">
                    <CardContent className="pt-5 pb-5 px-5">
                      {/* Top */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-violet-200 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-bold text-violet-800">
                          {h.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-violet-950 group-hover:text-violet-800 transition-colors leading-tight mb-1">
                            {h.name}
                          </p>
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded-full border ${typeColors[h.type]}`}
                          >
                            {h.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 bg-amber-50 border border-amber-100 px-2 py-1 rounded-lg flex-shrink-0">
                          <Star
                            size={11}
                            className="text-amber-400 fill-amber-400"
                          />
                          <span className="text-xs font-bold text-amber-700">
                            {h.rating}
                          </span>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-1.5 mb-3">
                        <MapPin
                          size={11}
                          className="text-slate-400 flex-shrink-0 mt-0.5"
                        />
                        <p className="text-xs text-slate-500">{h.address}</p>
                      </div>

                      <Separator className="bg-violet-50 mb-3" />

                      {/* Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Users size={11} className="text-violet-400" />
                            <span className="text-xs text-slate-500">
                              {h.doctors} doctors
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Stethoscope
                              size={11}
                              className="text-violet-400"
                            />
                            <span className="text-xs text-slate-500">
                              {h.specializations} specs
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-violet-700 group-hover:text-violet-900 transition-colors">
                          <span className="text-xs font-semibold">View</span>
                          <ChevronRight size={13} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {[1, 2, 3, "...", 6].map((page, i) => (
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
