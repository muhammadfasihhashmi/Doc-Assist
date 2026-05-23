import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/images/heroImage.png";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[32px] bg-violet-50 px-6 py-14 sm:px-10 lg:px-14">
        <div className="relative z-10 flex flex-col items-center gap-14 lg:flex-row lg:justify-around">
          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left">
            {/* Badge */}
            <Badge className="mb-6 rounded-full border border-violet-200 bg-violet-100 px-4 py-1.5 text-xs font-medium text-violet-700 hover:bg-violet-100">
              Pakistan&apos;s Premium Healthcare Platform
            </Badge>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-violet-950 sm:text-5xl lg:text-6xl">
              Find the right doctor,
              <span className="block text-violet-700">book in seconds</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:max-w-2xl">
              Connect with verified doctors across top hospitals. Book
              appointments online and manage your healthcare journey — all in
              one secure and seamless platform.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-violet-700 px-8 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all hover:bg-violet-800 hover:shadow-violet-300"
                asChild
              >
                <Link href="/register">Book Appointment</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-violet-300 bg-white px-8 text-sm font-semibold text-violet-700 transition-all hover:bg-violet-50 hover:text-violet-800"
                asChild
              >
                <Link href="/doctors">Browse Doctors</Link>
              </Button>
            </div>

            {/* Trust Line */}
            <div className="mt-8 flex flex-col items-center gap-3 text-sm text-slate-500 sm:flex-row justify-center lg:justify-start">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-400" />
                <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-400" />
                <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-400" />
              </div>

              <p>
                Trusted by{" "}
                <span className="font-semibold text-violet-700">50,000+</span>{" "}
                patients across Pakistan
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative h-[500px] w-[600px] overflow-hidden rounded-[32px] hidden xl:block ">
            <Image src={heroImage} alt="Doctor consultation" fill priority />
          </div>
        </div>
      </div>
    </section>
  );
}
