'use client';

import Link from 'next/link';
import { Bot, Plus, MoreVertical, MessageSquare, Activity } from 'lucide-react';
import { MOCK_BOTS } from '@/lib/mockData';

export default function MyBotsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
           <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Bots</h1>
           <p className="text-gray-500 dark:text-gray-400">Manage and monitor your AI assistants.</p>
        </div>
        <Link
          href="/dashboard/bots/new"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-colors"
        >
          <Plus size={20} />
          <span>Create Bot</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_BOTS.map((bot) => (
          <Link key={bot.id} href={`/dashboard/bots/${bot.id}`} passHref>
             <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:shadow-md transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Bot size={20} />
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    bot.status === 'active' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                  }`}>
                    {bot.status}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {bot.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-2">
                  {bot.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
                   <div className="flex items-center gap-1">
                      <MessageSquare size={14} />
                      <span>1.2k msgs</span>
                   </div>
                   <div className="flex items-center gap-1">
                      <Activity size={14} />
                      <span>98% uptime</span>
                   </div>
                </div>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
