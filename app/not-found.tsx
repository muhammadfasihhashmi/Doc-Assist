import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden px-4 py-22">
      {/* Background Glow */}

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        {/* 404 Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-violet-200 bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
          404 • Page Not Found
        </div>

        {/* Huge 404 */}
        <h1 className="text-violet-900 text-8xl font-black tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-violet-950 sm:text-4xl">
          Oops! This page doesn&apos;t exist
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-md text-base leading-relaxed text-slate-500">
          The page you&apos;re looking for may have been moved, deleted, or
          never existed in the first place.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            className="h-12 rounded-xl bg-violet-700 px-6 text-sm font-semibold text-white transition-all hover:bg-violet-800 "
          >
            <Link href="/">
              <Home className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>

          <Button
            variant="outline"
            asChild
            className="h-12 rounded-xl border-violet-200 bg-white px-6 text-sm font-semibold text-violet-700 hover:bg-violet-50 hover:text-violet-800"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Bottom Hint */}
        <p className="mt-10 text-sm text-slate-400">
          Need help? Contact our support team anytime.
        </p>
      </div>
    </div>
  );
}
