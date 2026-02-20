'use client';

import Link from 'next/link';
import { User, Star, Download } from 'lucide-react';
import { MOCK_AGENTS } from '@/lib/mockData';

export default function AgentsMarketplacePage() {
  return (
    <div className="space-y-6">
      <div>
         <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Agent Marketplace</h1>
         <p className="text-gray-500 dark:text-gray-400">Discover and activate powerful AI agents.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_AGENTS.map((agent) => (
          <Link key={agent.id} href={`/dashboard/agents/${agent.id}`} passHref>
             <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <User size={24} />
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 text-sm font-medium">
                    <Star size={14} fill="currentColor" />
                    <span>4.8</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {agent.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-1">
                  {agent.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                   <div className="text-sm font-bold text-gray-900 dark:text-white">
                      {agent.price}
                   </div>
                   {agent.owned ? (
                      <span className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-md">
                        Owned
                      </span>
                   ) : (
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                         <Download size={14} />
                         <span>1.5k installs</span>
                      </div>
                   )}
                </div>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
