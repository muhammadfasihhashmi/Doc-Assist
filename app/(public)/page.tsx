import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#534AB7] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="11" y="5" width="2" height="14" fill="#EEEDFE" />
                  <rect x="5" y="11" width="14" height="2" fill="#EEEDFE" />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#EEEDFE"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="text-base font-medium text-gray-900">
                DocAssist
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/doctors"
                className="text-sm text-gray-500 hover:text-[#534AB7] transition-colors"
              >
                Doctors
              </Link>
              <Link
                href="/hospitals"
                className="text-sm text-gray-500 hover:text-[#534AB7] transition-colors"
              >
                Hospitals
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-500 hover:text-[#534AB7] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-500 hover:text-[#534AB7] transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="hidden sm:inline-flex text-sm font-medium text-[#534AB7] border border-[#534AB7] px-4 py-2 rounded-lg hover:bg-[#EEEDFE] transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-sm font-medium text-white bg-[#534AB7] px-4 py-2 rounded-lg hover:bg-[#3C3489] transition-colors"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block bg-[#EEEDFE] text-[#3C3489] text-xs font-medium px-3 py-1.5 rounded-full mb-5">
            Pakistan&apos;s Premium Healthcare Platform
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight max-w-2xl mx-auto mb-4">
            Find the right doctor,{" "}
            <span className="text-[#534AB7]">book in seconds</span>
          </h1>
          <p className="text-base text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
            Connect with verified doctors across top hospitals. Book
            appointments online and manage your health journey in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              href="/patient/dashboard"
              className="text-sm font-medium text-white bg-[#534AB7] px-6 py-3 rounded-lg hover:bg-[#3C3489] transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href="/doctors"
              className="text-sm font-medium text-[#534AB7] border border-[#534AB7] px-6 py-3 rounded-lg hover:bg-[#EEEDFE] transition-colors"
            >
              Browse Doctors
            </Link>
          </div>

          {/* Search Bar */}
          <div className="bg-white border border-gray-200 rounded-xl p-3 max-w-xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-center shadow-sm">
            <div className="flex-1 px-2">
              <p className="text-xs text-gray-400 mb-0.5">Specialization</p>
              <p className="text-sm text-gray-400">e.g. Cardiologist</p>
            </div>
            <div className="hidden sm:block w-px h-9 bg-gray-100" />
            <div className="flex-1 px-2">
              <p className="text-xs text-gray-400 mb-0.5">City</p>
              <p className="text-sm text-gray-400">e.g. Lahore</p>
            </div>
            <Link
              href="/doctors"
              className="text-sm font-medium text-white bg-[#534AB7] px-5 py-2.5 rounded-lg hover:bg-[#3C3489] transition-colors text-center"
            >
              Search
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
            {[
              { value: "500+", label: "Verified Doctors" },
              { value: "80+", label: "Partner Hospitals" },
              { value: "50k+", label: "Appointments Booked" },
              { value: "30+", label: "Specializations" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 px-4 text-center">
                <p className="text-2xl sm:text-3xl font-medium text-[#534AB7]">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#EEEDFE] text-[#3C3489] text-xs font-medium px-3 py-1.5 rounded-full mb-3">
              Simple process
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
              How it works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                step: "1",
                title: "Search doctor",
                desc: "Filter by specialization, city or hospital name",
              },
              {
                step: "2",
                title: "View profile",
                desc: "Check qualifications, reviews and available slots",
              },
              {
                step: "3",
                title: "Book appointment",
                desc: "Pick a time slot and confirm your booking instantly",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white border border-gray-100 rounded-xl p-6 text-center"
              >
                <div className="w-11 h-11 bg-[#EEEDFE] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-medium text-[#534AB7]">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALIZATIONS ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#EEEDFE] text-[#3C3489] text-xs font-medium px-3 py-1.5 rounded-full mb-3">
              Browse by category
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
              Popular specializations
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: "Cardiologist", sub: "Heart health", icon: "♥" },
              { name: "Neurologist", sub: "Brain health", icon: "⚡" },
              { name: "Dermatologist", sub: "Skin health", icon: "✦" },
              { name: "Pediatrician", sub: "Children health", icon: "★" },
              { name: "Orthopedic", sub: "Bone health", icon: "◈" },
              { name: "Dentist", sub: "Teeth health", icon: "◉" },
              { name: "Psychiatrist", sub: "Mental health", icon: "◎" },
              { name: "General Physician", sub: "General health", icon: "✚" },
            ].map((spec) => (
              <Link
                key={spec.name}
                href="/doctors"
                className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:border-[#534AB7] hover:shadow-sm transition-all group"
              >
                <div className="w-9 h-9 bg-[#EEEDFE] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#534AB7] transition-colors">
                  <span className="text-sm text-[#534AB7] group-hover:text-white transition-colors">
                    {spec.icon}
                  </span>
                </div>
                <p className="text-xs font-medium text-gray-900">{spec.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{spec.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED DOCTORS ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#EEEDFE] text-[#3C3489] text-xs font-medium px-3 py-1.5 rounded-full mb-3">
              Top rated
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
              Featured doctors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Dr. Sarah Ahmed",
                spec: "Cardiologist",
                hospital: "Lahore General Hospital",
                exp: "12 yrs",
                rating: "4.9",
                fee: "Rs. 2,000",
                initials: "SA",
              },
              {
                name: "Dr. Hassan Malik",
                spec: "Neurologist",
                hospital: "Shaukat Khanum",
                exp: "8 yrs",
                rating: "4.8",
                fee: "Rs. 3,000",
                initials: "HM",
              },
              {
                name: "Dr. Ayesha Khan",
                spec: "Dermatologist",
                hospital: "Services Hospital",
                exp: "10 yrs",
                rating: "4.7",
                fee: "Rs. 1,500",
                initials: "AK",
              },
            ].map((doc) => (
              <div
                key={doc.name}
                className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#EEEDFE] rounded-full flex items-center justify-center text-sm font-medium text-[#534AB7] flex-shrink-0">
                    {doc.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {doc.name}
                    </p>
                    <p className="text-xs text-[#534AB7]">{doc.spec}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-3">{doc.hospital}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400">
                    {doc.exp} experience
                  </span>
                  <span className="text-xs bg-[#EEEDFE] text-[#3C3489] px-2 py-0.5 rounded-full">
                    ★ {doc.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-700">
                    {doc.fee}
                  </span>
                  <Link
                    href={`/doctors/${doc.name.toLowerCase().replace(/ /g, "-")}`}
                    className="text-xs font-medium text-white bg-[#534AB7] px-4 py-2 rounded-lg hover:bg-[#3C3489] transition-colors"
                  >
                    Book now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/doctors"
              className="text-sm font-medium text-[#534AB7] border border-[#534AB7] px-6 py-2.5 rounded-lg hover:bg-[#EEEDFE] transition-colors inline-block"
            >
              View all doctors
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#534AB7]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-3">
            Ready to take control of your health?
          </h2>
          <p className="text-sm text-[#AFA9EC] mb-8 leading-relaxed">
            Join thousands of patients who book appointments with top doctors
            every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/register"
              className="text-sm font-medium text-[#534AB7] bg-white px-6 py-3 rounded-lg hover:bg-[#EEEDFE] transition-colors"
            >
              Create free account
            </Link>
            <Link
              href="/doctors"
              className="text-sm font-medium text-white border border-[#AFA9EC] px-6 py-3 rounded-lg hover:border-white transition-colors"
            >
              Browse doctors
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-gray-100 px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-[#534AB7] rounded-lg" />
                <span className="text-sm font-medium text-gray-900">
                  DocAssist
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Connecting patients with the best doctors across Pakistan.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-xs font-medium text-gray-900 mb-3">Platform</p>
              <div className="flex flex-col gap-2">
                {[
                  "Find Doctors",
                  "Hospitals",
                  "Specializations",
                  "Book Appointment",
                ].map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="text-xs text-gray-400 hover:text-[#534AB7] transition-colors"
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs font-medium text-gray-900 mb-3">Company</p>
              <div className="flex flex-col gap-2">
                {["About Us", "Contact", "Careers", "Blog"].map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="text-xs text-gray-400 hover:text-[#534AB7] transition-colors"
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <p className="text-xs font-medium text-gray-900 mb-3">Legal</p>
              <div className="flex flex-col gap-2">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (l) => (
                    <a
                      key={l}
                      href="#"
                      className="text-xs text-gray-400 hover:text-[#534AB7] transition-colors"
                    >
                      {l}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-400">
              © 2026 DocAssist. All rights reserved.
            </p>
            <p className="text-xs text-gray-400">Made with care in Pakistan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
