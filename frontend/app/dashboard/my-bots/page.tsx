'use client';
import { motion } from 'framer-motion';
import { Plus, MoreVertical, Bot } from 'lucide-react';
import Link from 'next/link';

export default function MyBotsPage() {
  const bots = [
    {
      id: 1,
      name: 'Assistant Bot',
      description: 'A helpful assistant for general queries.',
      status: 'Active',
      lastActive: '2 hours ago',
    },
    {
      id: 2,
      name: 'Code Reviewer',
      description: 'Analyzes code and suggests improvements.',
      status: 'Inactive',
      lastActive: '1 day ago',
    },
    {
        id: 3,
        name: 'Story Teller',
        description: 'Creates engaging stories for kids.',
        status: 'Active',
        lastActive: '5 mins ago',
      },
  ];

  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            My Bots
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            View and manage your created bots.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-sm">
          <Plus size={20} />
          <span>Create New Bot</span>
        </button>
      </header>

       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bots.map((bot, index) => (
          <motion.div
            key={bot.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group relative p-6 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-500/30"
          >
            <div className="absolute top-4 right-4">
              <button className="p-1 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <MoreVertical size={16} />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                <Bot size={24} />
              </div>
              <div>
                 <h3 className="font-semibold text-gray-900 dark:text-white">{bot.name}</h3>
                 <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${
                    bot.status === 'Active' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                 }`}>
                    {bot.status}
                 </span>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                {bot.description}
            </p>

             <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                <span className="text-xs text-gray-500 dark:text-gray-500">
                   Active {bot.lastActive}
                </span>
                <Link href={`/dashboard/bot/${bot.id}`} className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                   Manage &rarr;
                </Link>
             </div>
          </motion.div>
        ))}
        
         {/* Create New Bot Card (Empty State) */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: bots.length * 0.1 }}
            className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl hover:border-indigo-500/50 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-all duration-300 group"
          >
             <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-3 transition-colors">
                <Plus size={24} />
             </div>
             <span className="font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Create New Bot</span>
          </motion.button>
      </div>
    </div>
  );
}
