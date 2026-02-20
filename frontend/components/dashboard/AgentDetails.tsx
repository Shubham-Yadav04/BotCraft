'use client';

import { User, ShieldCheck, Download, ExternalLink, Activity, Terminal } from 'lucide-react';
import { MOCK_AGENTS } from '@/lib/mockData';
import { useState } from 'react';

export default function AgentDetails({ id }: { id: string }) {
  const agent = MOCK_AGENTS.find((a) => a.id === id);
  const [isActivating, setIsActivating] = useState(false);

  if (!agent) return <div className="p-8 text-center">Agent not found</div>;

  const handleActivate = () => {
    setIsActivating(true);
    setTimeout(() => {
        setIsActivating(false);
        // Toggle owned state logic would go here
        alert('Agent activated! (Demo)');
    }, 2000);
  }

  return (
    <div className="flex flex-col h-[80vh] md:h-auto md:min-h-[500px]">
      {/* Header Image / Gradient */}
      <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 relative">
         <div className="absolute -bottom-8 left-8 p-1 bg-white dark:bg-gray-900 rounded-2xl">
            <div className="w-16 h-16 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
               <User size={32} className="text-gray-700 dark:text-gray-300" />
            </div>
         </div>
      </div>

      <div className="mt-12 px-8 pb-8">
         <div className="flex justify-between items-start mb-6">
            <div>
               <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                 {agent.name}
                 {agent.owned && <ShieldCheck size={20} className="text-green-500" />}
               </h1>
               <p className="text-gray-500 dark:text-gray-400 mt-1">{agent.description}</p>
            </div>
            {!agent.owned && (
              <div className="text-xl font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                 {agent.price}
              </div>
            )}
         </div>

         {agent.owned ? (
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-medium mb-1">
                         <Activity size={18} />
                         Status
                      </div>
                      <div className="text-2xl font-bold text-green-900 dark:text-green-300">Active</div>
                   </div>
                   <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-medium mb-1">
                         <Terminal size={18} />
                         Tasks Run
                      </div>
                      <div className="text-2xl font-bold text-blue-900 dark:text-blue-300">1,248</div>
                   </div>
                   <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-medium mb-1">
                         <ShieldCheck size={18} />
                         Health
                      </div>
                      <div className="text-2xl font-bold text-purple-900 dark:text-purple-300">100%</div>
                   </div>
                </div>

                <div className="bg-black text-green-400 p-4 rounded-xl font-mono text-sm h-48 overflow-y-auto">
                   <p>{'>'} Agent initialized...</p>
                   <p>{'>'} Monitoring tasks queue...</p>
                   <p>{'>'} [SUCCESS] Task #4920 completed.</p>
                   <p className="animate-pulse">{'>'} <span className="inline-block w-2 h-4 bg-green-400 align-middle ml-1"/></p>
                </div>
            </div>
         ) : (
            <div className="space-y-6">
               <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <p>
                    This is a placeholder description for the marketplace agent. It would detailed
                    capabilities, requirements, and use cases.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                     <li>Automated workflow execution</li>
                     <li>Integration with 3rd party APIs</li>
                     <li>24/7 Availability</li>
                  </ul>
               </div>

               <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <button 
                    onClick={handleActivate}
                    disabled={isActivating}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2"
                  >
                    {isActivating ? (
                       <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                       <>
                         <Download size={20} />
                         Activate Agent
                       </>
                    )}
                  </button>
                  <button className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium py-3 px-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                     <ExternalLink size={18} />
                     View Documentation
                  </button>
               </div>
            </div>
         )}
      </div>
    </div>
  );
}
