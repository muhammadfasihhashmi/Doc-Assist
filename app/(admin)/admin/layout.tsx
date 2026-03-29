export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Admin Sidebar will go here */}
      <nav>Admin Navigation</nav>
      <main>{children}</main>
    </div>
  );
}
