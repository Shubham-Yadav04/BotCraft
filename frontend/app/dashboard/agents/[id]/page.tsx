import AgentDetails from '@/components/dashboard/AgentDetails';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function AgentPage({ params }: { params: { id: string } }) {
  const {id} = await params;
  return (
    <div className="space-y-6">
       <Link href="/dashboard/agents" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
        <ArrowLeft size={16} className="mr-2" />
        Back to Agents Marketplace
      </Link>
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <AgentDetails id={id} />
      </div>
    </div>
  );
}
