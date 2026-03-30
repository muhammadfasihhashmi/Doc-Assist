import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    step: "01",
    title: "Search a doctor",
    desc: "Filter by specialization, city, or hospital name to find the right fit.",
  },
  {
    step: "02",
    title: "View their profile",
    desc: "Check qualifications, patient reviews, experience, and available slots.",
  },
  {
    step: "03",
    title: "Book your slot",
    desc: "Pick a time that works and confirm your appointment instantly online.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge
            variant="secondary"
            className="bg-violet-100 text-violet-800 hover:bg-violet-100 mb-3 px-4 py-1.5 text-xs font-medium rounded-full"
          >
            Simple process
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-violet-950 tracking-tight">
            How it works
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            Getting the right care has never been this simple.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto relative">
          {/* Connector line — desktop only */}
          <div className="hidden sm:block absolute top-9 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-violet-200 z-0" />

          {steps.map((item) => (
            <Card
              key={item.step}
              className="border-violet-200 shadow-none hover:shadow-sm hover:border-violet-300 transition-all relative z-10 bg-white"
            >
              <CardContent className="pt-6 pb-6 text-center px-5">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-base font-bold text-violet-800">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-violet-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
