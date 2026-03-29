export default async function HospitalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main>
      <h1>Hospital Detail</h1>
      <p>Viewing hospital with ID: {id}</p>
    </main>
  );
}
