import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Platform: [
    { label: "Find Doctors", href: "/doctors" },
    { label: "Hospitals", href: "/hospitals" },
    { label: "Specializations", href: "/doctors" },
    { label: "Book Appointment", href: "/register" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-violet-200 px-4 sm:px-6 lg:px-8 pt-12 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 rounded-lg flex-shrink-0"
                style={{ background: "#5B21B6" }}
              />
              <span
                className="text-sm font-semibold"
                style={{ color: "#2E1065" }}
              >
                DocAssist
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-[180px]">
              Connecting patients with the best verified doctors across
              Pakistan.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p
                className="text-xs font-semibold mb-3"
                style={{ color: "#2E1065" }}
              >
                {section}
              </p>
              <div className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-[#5B21B6] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Separator style={{ background: "#EDE9FE" }} className="mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-400">
            © 2026 DocAssist. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Made with care in Pakistan 🇵🇰
          </p>
        </div>
      </div>
    </footer>
  );
}
