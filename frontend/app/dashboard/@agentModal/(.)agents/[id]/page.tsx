import AgentDetailsModal from "@/components/dashboard/AgentDetailsModal";

export default async function AgentInterceptorPage({ params }: { params: { id: string } }) {
  const {id} = await params;
  return <AgentDetailsModal id={id} />;
}
