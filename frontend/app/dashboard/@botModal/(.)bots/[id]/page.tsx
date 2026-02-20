import BotDetailsModal from '@/components/dashboard/BotDetailsModal';

export default async function BotInterceptorPage({ params }: { params: { id: string } }) {
  const {id} = await params;
  return <BotDetailsModal id={id} />;
}
