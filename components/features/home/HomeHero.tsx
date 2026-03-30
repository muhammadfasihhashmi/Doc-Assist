import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-violet-100 to-violet-50 px-4 sm:px-6 lg:px-8 pt-16 pb-14">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Badge */}
        <Badge
          variant="secondary"
          className="bg-violet-100 hover:bg-violet-100 mb-5 px-4 py-1.5 text-xs font-medium rounded-full"
          style={{ color: "#5B21B6" }}
        >
          Pakistan&apos;s Premium Healthcare Platform
        </Badge>

        {/* Headline */}
        <h1
          className="text-3xl sm:text-4xl lg:text-[52px] font-bold leading-tight max-w-2xl mx-auto mb-4 tracking-tight"
          style={{ color: "#2E1065" }}
        >
          Find the right doctor,{" "}
          <span style={{ color: "#5B21B6" }}>book in seconds</span>
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto mb-8 leading-relaxed">
          Connect with verified doctors across top hospitals. Book appointments
          online and manage your health journey — all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Button
            size="lg"
            className="text-white rounded-xl px-7 text-sm font-semibold shadow-none hover:opacity-90 transition-opacity"
            style={{ background: "#5B21B6" }}
            asChild
          >
            <Link href="/register">Book Appointment</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-xl px-7 text-sm font-semibold hover:bg-violet-50 transition-colors"
            style={{ borderColor: "#C4B5FD", color: "#5B21B6" }}
            asChild
          >
            <Link href="/doctors">Browse Doctors</Link>
          </Button>
        </div>

        {/* Search Bar */}
        <div className="bg-white border border-violet-200 rounded-2xl p-3 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-center shadow-sm">
          {/* Specialization */}
          <div className="flex items-center gap-2 flex-1 px-3">
            <Search
              size={15}
              className="flex-shrink-0"
              style={{ color: "#6D28D9" }}
            />
            <div>
              <p
                className="text-xs font-medium mb-0.5"
                style={{ color: "#6D28D9" }}
              >
                Specialization
              </p>
              <p className="text-sm text-slate-400">e.g. Cardiologist</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-violet-200" />

          {/* City */}
          <div className="flex items-center gap-2 flex-1 px-3">
            <MapPin
              size={15}
              className="flex-shrink-0"
              style={{ color: "#6D28D9" }}
            />
            <div>
              <p
                className="text-xs font-medium mb-0.5"
                style={{ color: "#6D28D9" }}
              >
                City
              </p>
              <p className="text-sm text-slate-400">e.g. Lahore</p>
            </div>
          </div>

          <Button
            className="text-white rounded-xl px-6 py-5 text-sm font-semibold shadow-none hover:opacity-90 transition-opacity sm:ml-1"
            style={{ background: "#5B21B6" }}
            asChild
          >
            <Link href="/doctors">Search</Link>
          </Button>
        </div>

        {/* Trust Line */}
        <p className="text-xs text-slate-400 mt-5">
          Trusted by{" "}
          <span className="font-medium" style={{ color: "#5B21B6" }}>
            50,000+
          </span>{" "}
          patients across Pakistan
        </p>
      </div>
    </section>
  );
}
