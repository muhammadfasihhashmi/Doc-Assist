import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Shield,
  Clock,
  Users,
  Building2,
  Star,
  ArrowRight,
} from "lucide-react";

const stats = [
  { value: "500+", label: "Verified Doctors" },
  { value: "80+", label: "Partner Hospitals" },
  { value: "50k+", label: "Patients Served" },
  { value: "30+", label: "Specializations" },
];

const values = [
  {
    icon: Heart,
    title: "Patient First",
    desc: "Every decision we make starts with one question — is this better for the patient? Your health and comfort drive everything we build.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    desc: "Every doctor on our platform is manually verified. We check qualifications, licenses, and hospital affiliations before any listing goes live.",
  },
  {
    icon: Clock,
    title: "Your Time Matters",
    desc: "We built DocAssist because waiting rooms and phone calls waste hours. Book in seconds, get reminders, and manage everything online.",
  },
  {
    icon: Users,
    title: "Built for Pakistan",
    desc: "We understand the local healthcare landscape. Our platform is designed specifically for Pakistani patients, doctors, and hospitals.",
  },
];

const team = [
  { name: "Dr. Zara Malik", role: "Chief Medical Officer", initials: "ZM" },
  { name: "Ahmed Siddiqui", role: "Chief Executive Officer", initials: "AS" },
  { name: "Fatima Noor", role: "Head of Product", initials: "FN" },
  { name: "Hassan Raza", role: "Head of Engineering", initials: "HR" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ── */}
      <section className="flex items-center justify-center text-center bg-gradient-to-b from-violet-50/60 to-white px-4 sm:px-6 lg:px-8 py-20 border-b border-violet-100">
        <div className="max-w-6xl mx-auto">
          <Badge
            variant="secondary"
            className="bg-violet-100 text-violet-800 hover:bg-violet-100 mb-5 px-4 py-1.5 text-xs font-medium rounded-full"
          >
            About DocAssist
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-950 tracking-tight max-w-2xl mb-5 leading-tight">
            Making quality healthcare{" "}
            <span className="text-violet-800">accessible to everyone</span>
          </h1>
          <p className="text-base text-center m-auto text-slate-500 max-w-xl leading-relaxed mb-8">
            DocAssist was founded with a simple mission — remove the friction
            between patients and doctors in Pakistan. No more waiting on hold,
            no more confusion about who to see. Just simple, fast, trusted
            healthcare booking.
          </p>
          <Button
            className="bg-violet-800 hover:bg-violet-900 text-white rounded-lg px-6 shadow-none text-sm font-semibold"
            asChild
          >
            <Link href="/doctors" className="flex items-center gap-2">
              Find a doctor <ArrowRight size={15} />
            </Link>
          </Button>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-violet-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-8 px-4 text-center ${
                  i !== stats.length - 1 ? "border-r border-violet-100" : ""
                } ${i >= 2 ? "border-t border-violet-100 lg:border-t-0" : ""}`}
              >
                <p className="text-2xl sm:text-3xl font-bold text-violet-800">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-violet-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold text-violet-800 uppercase tracking-widest mb-3">
              Our mission
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-violet-950 tracking-tight mb-4">
              Healthcare shouldn&apos;t be complicated
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              In Pakistan, finding the right doctor often means asking around,
              making multiple phone calls, and showing up without knowing if the
              doctor is even available. We built DocAssist to fix that
              completely.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Our platform connects patients directly with verified doctors
              across top hospitals — with full transparency on qualifications,
              fees, availability, and patient reviews. Everything you need to
              make a confident decision, in one place.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["SA", "HM", "AK", "ZR"].map((initials) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full bg-violet-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-violet-800"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 ml-1">
                Trusted by{" "}
                <span className="font-semibold text-violet-800">50,000+</span>{" "}
                patients
              </p>
            </div>
          </div>

          {/* Visual Block */}
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                icon: Building2,
                label: "80+ hospitals",
                sub: "Partner network",
              },
              {
                icon: Star,
                label: "4.8 avg rating",
                sub: "Patient satisfaction",
              },
              {
                icon: Clock,
                label: "Under 60 sec",
                sub: "Average booking time",
              },
              {
                icon: Shield,
                label: "100% verified",
                sub: "All doctors checked",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.label}
                  className="border-violet-200 shadow-none"
                >
                  <CardContent className="pt-5 pb-5 px-4">
                    <div className="w-9 h-9 bg-violet-100 rounded-lg flex items-center justify-center mb-3">
                      <Icon size={17} className="text-violet-800" />
                    </div>
                    <p className="text-sm font-bold text-violet-950">
                      {item.label}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-violet-50/50 border-b border-violet-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-violet-800 uppercase tracking-widest mb-3">
              What drives us
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-violet-950 tracking-tight">
              Our core values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <Card
                  key={val.title}
                  className="border-violet-200 bg-white shadow-none hover:border-violet-300 hover:shadow-sm transition-all"
                >
                  <CardContent className="pt-5 pb-5 px-5">
                    <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={18} className="text-violet-800" />
                    </div>
                    <h3 className="text-sm font-semibold text-violet-950 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {val.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-violet-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-violet-800 uppercase tracking-widest mb-3">
              The people behind it
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-violet-950 tracking-tight">
              Meet the team
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
              A small team of doctors, engineers, and builders passionate about
              fixing healthcare in Pakistan.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {team.map((member) => (
              <Card
                key={member.name}
                className="border-violet-200 shadow-none text-center hover:border-violet-300 transition-colors"
              >
                <CardContent className="pt-5 pb-5 px-4">
                  <div className="w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-3 text-base font-bold text-violet-800">
                    {member.initials}
                  </div>
                  <p className="text-xs font-semibold text-violet-950">
                    {member.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-violet-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Ready to get started?
          </h2>
          <p className="text-sm text-violet-300 mb-8 leading-relaxed">
            Join thousands of patients already using DocAssist to manage their
            health.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-white text-violet-800 hover:bg-violet-50 font-semibold rounded-lg px-7 shadow-none"
              asChild
            >
              <Link href="/register">Create free account</Link>
            </Button>
            <Button
              variant="outline"
              className="border-violet-600 text-white hover:bg-violet-700 hover:border-violet-500 rounded-lg px-7 bg-transparent"
              asChild
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
