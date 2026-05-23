import Link from "next/link";
import Logo from "@/assets/images/docAssisteLogo_processed.png";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const footerLinks = {
  Platform: [
    { label: "Find Doctors", href: "/doctors" },
    { label: "Hospitals", href: "/hospitals" },
    { label: "Specializations", href: "/specializations" },
    { label: "Book Appointment", href: "/register" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-violet-100 bg-gradient-to-b from-white to-violet-50/60">
      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="relative h-22 w-50">
                <Image
                  src={Logo}
                  alt="logo"
                  fill
                  sizes="auto"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600">
              Connecting patients with trusted and verified doctors across
              Pakistan. Book appointments instantly and manage your healthcare
              journey with ease.
            </p>

            {/* Mini Stats */}
            <div className="mt-6 flex flex-wrap gap-6">
              <div>
                <p className="text-2xl font-bold text-violet-700">50k+</p>
                <p className="text-sm text-slate-500">Patients</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-violet-700">2k+</p>
                <p className="text-sm text-slate-500">Verified Doctors</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-violet-700">120+</p>
                <p className="text-sm text-slate-500">Hospitals</p>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold tracking-wide text-violet-950">
                {section}
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-sm text-slate-600 transition-colors hover:text-violet-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <Separator className="my-10 bg-violet-100" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © 2026 DocAssist. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-slate-500">
            <span>Made with care in Pakistan 🇵🇰</span>

            <div className="hidden h-4 w-px bg-violet-200 sm:block" />

            <span className="hidden sm:block">Secure • Trusted • Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
