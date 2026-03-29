export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Patient Sidebar/Navbar will go here */}
      <nav>Patient Navigation</nav>
      <main>{children}</main>
    </div>
  );
}
