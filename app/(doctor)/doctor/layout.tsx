export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Doctor Sidebar will go here */}
      <nav>Doctor Navigation</nav>
      <main>{children}</main>
    </div>
  );
}
