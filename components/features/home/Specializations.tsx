import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Brain,
  Smile,
  Baby,
  Bone,
  Stethoscope,
  Eye,
  Activity,
} from "lucide-react";

const specializations = [
  { name: "Cardiologist", sub: "Heart health", icon: Heart },
  { name: "Neurologist", sub: "Brain health", icon: Brain },
  { name: "Dentist", sub: "Teeth health", icon: Smile },
  { name: "Pediatrician", sub: "Children health", icon: Baby },
  { name: "Orthopedic", sub: "Bone health", icon: Bone },
  { name: "General Physician", sub: "General health", icon: Stethoscope },
  { name: "Ophthalmologist", sub: "Eye health", icon: Eye },
  { name: "Psychiatrist", sub: "Mental health", icon: Activity },
];

export default function Specializations() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-violet-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge
            variant="secondary"
            className="bg-violet-100 text-violet-800 hover:bg-violet-100 mb-3 px-4 py-1.5 text-xs font-medium rounded-full"
          >
            Browse by category
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-violet-950 tracking-tight">
            Popular specializations
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            Find specialists for every health concern.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {specializations.map((spec) => {
            const Icon = spec.icon;
            return (
              <Link key={spec.name} href="/doctors">
                <Card className="border-violet-200 bg-white hover:border-violet-400 hover:shadow-sm transition-all cursor-pointer group">
                  <CardContent className="pt-5 pb-5 text-center px-4">
                    <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-violet-800 transition-colors">
                      <Icon
                        size={18}
                        className="text-violet-800 group-hover:text-white transition-colors"
                      />
                    </div>
                    <p className="text-xs font-semibold text-violet-950">
                      {spec.name}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{spec.sub}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
