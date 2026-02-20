import BotDetails from '@/components/dashboard/BotDetails';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function BotPage({ params }: { params: { id: string } }) {
  const {id} = await  params;
  return (
    <div className="space-y-6">
       <Link href="/dashboard/my-bots" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
        <ArrowLeft size={16} className="mr-2" />
        Back to My Bots
      </Link>
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <BotDetails id={id} />
      </div>
    </div>
  );
}
