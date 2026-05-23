import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import CtaBanner from "@/assets/images/ctabanner.jpg";

export default function CTABanner() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="relative overflow-hidden rounded-3xl bg-violet-50 px-6 py-12 sm:px-10 lg:px-14">
        {/* Decorative circles */}
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-violet-700 opacity-30 pointer-events-none" />
        <div className="absolute -bottom-12 -right-8 h-52 w-52 rounded-full bg-violet-900 opacity-40 pointer-events-none" />
        <div className="absolute top-4 right-1/4 h-16 w-16 rounded-full bg-violet-600 opacity-25 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          {/* Content */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to take control of your health?
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-violet-300 sm:text-base">
              Join thousands of patients who book appointments with verified top
              doctors every single day.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-xl bg-white px-7 font-semibold text-violet-700 shadow-sm hover:bg-violet-100"
                asChild
              >
                <Link href="/register">Create free account</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-violet-300 bg-white/10 px-7 hover:bg-white/20 hover:text-violet-300"
                asChild
              >
                <Link href="/doctors">Browse doctors</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[350px] w-full max-w-[420px] rounded-3xl overflow-hidden">
            <Image
              src={CtaBanner}
              alt="Doctor consultation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
