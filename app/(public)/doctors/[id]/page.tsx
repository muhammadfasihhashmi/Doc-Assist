export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main>
      <h1>Doctor Detail</h1>
      <p>Viewing doctor with ID: {id}</p>
    </main>
  );
}
