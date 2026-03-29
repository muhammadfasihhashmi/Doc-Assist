export default function HospitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Hospital Sidebar will go here */}
      <nav>Hospital Navigation</nav>
      <main>{children}</main>
    </div>
  );
}
