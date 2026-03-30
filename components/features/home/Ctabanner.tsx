import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #5B21B6 0%, #2E1065 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet-700 rounded-full opacity-30 pointer-events-none" />
      <div className="absolute -bottom-12 -right-8 w-52 h-52 bg-violet-900 rounded-full opacity-40 pointer-events-none" />
      <div className="absolute top-4 right-1/4 w-16 h-16 bg-violet-600 rounded-full opacity-25 pointer-events-none" />
      {/* Extra subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-700 rounded-full opacity-10 pointer-events-none blur-3xl" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
          Ready to take control of your health?
        </h2>
        <p
          className="text-sm mb-8 leading-relaxed max-w-md mx-auto"
          style={{ color: "#C4B5FD" }}
        >
          Join thousands of patients who book appointments with verified top
          doctors every single day.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            className="bg-white font-semibold rounded-xl px-7 shadow-lg hover:bg-violet-50 transition-colors"
            style={{ color: "#5B21B6" }}
            asChild
          >
            <Link href="/register">Create free account</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white rounded-xl px-7 bg-white/10 hover:bg-white/20 transition-colors"
            style={{ borderColor: "#C4B5FD" }}
            asChild
          >
            <Link href="/doctors">Browse doctors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
