'use client';

import Link from 'next/link';
import { User, ExternalLink, ShieldCheck } from 'lucide-react';
import { MOCK_AGENTS } from '@/lib/mockData';

export default function MyAgentsPage() {
  const ownedAgents = MOCK_AGENTS.filter(a => a.owned);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
           <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Agents</h1>
           <p className="text-gray-500 dark:text-gray-400">Active autonomous agents working for you.</p>
        </div>
        <Link
          href="/dashboard/agents"
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <span>Browse Marketplace</span>
          <ExternalLink size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ownedAgents.length > 0 ? (
          ownedAgents.map((agent) => (
            <Link key={agent.id} href={`/dashboard/agents/${agent.id}`} passHref>
               <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                     <ShieldCheck size={18} className="text-green-500" />
                  </div>
                  
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                    <User size={24} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {agent.description}
                  </p>

                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    Active
                  </div>
               </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-12 text-center bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800">
             <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400">
                <User size={32} />
             </div>
             <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No agents yet</h3>
             <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">
               You haven't activated any autonomous agents. Explore the marketplace to find agents that can help automate your workflow.
             </p>
             <Link
                href="/dashboard/agents"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Browse Marketplace
              </Link>
          </div>
        )}
      </div>
    </div>
  );
}
