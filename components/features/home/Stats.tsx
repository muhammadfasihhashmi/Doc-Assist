const stats = [
  { value: "500+", label: "Verified Doctors" },
  { value: "80+", label: "Partner Hospitals" },
  { value: "50k+", label: "Appointments Booked" },
  { value: "30+", label: "Specializations" },
];

export default function Stats() {
  return (
    <section className="border-y border-violet-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 px-4 text-center ${
                i !== stats.length - 1 ? "border-r border-violet-200" : ""
              } ${i >= 2 ? "border-t border-violet-200 lg:border-t-0" : ""}`}
            >
              <p className="text-2xl sm:text-3xl font-bold text-[#5B21B6]">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
