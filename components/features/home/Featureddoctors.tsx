import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Clock, Building2 } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Ahmed",
    initials: "SA",
    spec: "Cardiologist",
    hospital: "Lahore General Hospital",
    exp: "12 yrs",
    rating: "4.9",
    reviews: 128,
    fee: "Rs. 2,000",
    available: "Today",
    slug: "sarah-ahmed",
  },
  {
    name: "Dr. Hassan Malik",
    initials: "HM",
    spec: "Neurologist",
    hospital: "Shaukat Khanum",
    exp: "8 yrs",
    rating: "4.8",
    reviews: 94,
    fee: "Rs. 3,000",
    available: "Tomorrow",
    slug: "hassan-malik",
  },
  {
    name: "Dr. Ayesha Khan",
    initials: "AK",
    spec: "Dermatologist",
    hospital: "Services Hospital",
    exp: "10 yrs",
    rating: "4.7",
    reviews: 76,
    fee: "Rs. 1,500",
    available: "Today",
    slug: "ayesha-khan",
  },
];

export default function FeaturedDoctors() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge
            variant="secondary"
            className="bg-violet-100 text-violet-800 hover:bg-violet-100 mb-3 px-4 py-1.5 text-xs font-medium rounded-full"
          >
            Top rated
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-violet-950 tracking-tight">
            Featured doctors
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            Highly rated specialists trusted by thousands of patients.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {doctors.map((doc) => (
            <Card
              key={doc.name}
              className="border-violet-200 bg-white hover:shadow-md hover:shadow-violet-100 hover:border-violet-300 transition-all"
            >
              <CardContent className="pt-5 pb-5 px-5">
                {/* Top Row */}
                <div className="flex items-start gap-3 mb-4">
                  <Avatar className="w-12 h-12 flex-shrink-0">
                    <AvatarFallback className="bg-violet-100 text-violet-800 text-sm font-semibold">
                      {doc.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-violet-950 truncate">
                      {doc.name}
                    </p>
                    <p className="text-xs text-violet-700 font-medium">
                      {doc.spec}
                    </p>
                  </div>
                  {/* Rating Badge */}
                  <div className="flex items-center gap-1 bg-amber-50 border border-amber-100 px-2 py-1 rounded-lg flex-shrink-0">
                    <Star size={11} className="text-amber-400 fill-amber-400" />
                    <span className="text-xs font-semibold text-amber-600">
                      {doc.rating}
                    </span>
                  </div>
                </div>

                {/* Hospital */}
                <div className="flex items-center gap-1.5 mb-2">
                  <Building2
                    size={12}
                    className="text-slate-400 flex-shrink-0"
                  />
                  <p className="text-xs text-slate-500 truncate">
                    {doc.hospital}
                  </p>
                </div>

                {/* Experience + Reviews */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-slate-400">{doc.exp} exp</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-xs text-slate-400">
                    {doc.reviews} reviews
                  </span>
                </div>

                {/* Footer */}
                <div className="border-t border-violet-100 pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">Consultation</p>
                    <p className="text-sm font-semibold text-violet-950">
                      {doc.fee}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end mb-1.5">
                      <Clock size={10} className="text-emerald-500" />
                      <span className="text-xs text-emerald-600 font-medium">
                        {doc.available}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-violet-800 hover:bg-violet-900 text-white text-xs rounded-lg px-4 shadow-none"
                      asChild
                    >
                      <Link href={`/doctors/${doc.slug}`}>Book now</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-violet-300 text-violet-800 hover:bg-violet-50 hover:border-violet-400 rounded-xl px-7"
            asChild
          >
            <Link href="/doctors">View all doctors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
