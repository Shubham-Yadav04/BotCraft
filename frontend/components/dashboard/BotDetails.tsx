'use client';

import { useState } from 'react';
import { Bot, MessageSquare, Activity, Settings, Send, User } from 'lucide-react';
import { MOCK_BOTS } from '@/lib/mockData';

export default function BotDetails({ id }: { id: string }) {
  const bot = MOCK_BOTS.find((b) => b.id === id);
  const [activeTab, setActiveTab] = useState<'chat' | 'settings' | 'logs'>('chat');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  if (!bot) return <div className="p-8 text-center">Bot not found</div>;

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: `I received: "${input}". This is a demo response.` }]);
    }, 1000);
    setInput('');
  };

  return (
    <div className="flex flex-col h-[80vh]">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-white dark:bg-gray-900 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <Bot size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">{bot.name}</h1>
            <div className="flex items-center gap-2">
               <span className={`inline-block w-2 h-2 rounded-full ${bot.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`} />
               <p className="text-sm text-gray-500 dark:text-gray-400">{bot.status === 'active' ? 'Online' : 'Offline'}</p>
            </div>
          </div>
        </div>
        
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          {['chat', 'settings', 'logs'].map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab as any)}
               className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                 activeTab === tab
                   ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                   : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
               }`}
             >
               {tab.charAt(0).toUpperCase() + tab.slice(1)}
             </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-black/20 p-6">
        {activeTab === 'chat' && (
          <div className="max-w-3xl mx-auto flex flex-col h-full">
            <div className="flex-1 space-y-4 mb-4">
               {messages.map((msg, idx) => (
                 <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-indigo-600 text-white rounded-br-none' 
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-100 dark:border-gray-700 rounded-bl-none'
                    }`}>
                       <p className="text-sm">{msg.text}</p>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="mt-auto">
               <div className="relative">
                 <input
                   type="text"
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                   placeholder="Type a message..."
                   className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
                 />
                 <button 
                   onClick={handleSend}
                   className="absolute right-2 top-2 p-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                 >
                   <Send size={16} />
                 </button>
               </div>
            </div>
          </div>
        )}
        
        {activeTab === 'settings' && (
           <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Configuration</h3>
              <p className="text-gray-500">Settings panel placeholder.</p>
           </div>
        )}

        {activeTab === 'logs' && (
           <div className="max-w-2xl mx-auto space-y-2">
              <div className="text-xs font-mono p-2 bg-gray-100 dark:bg-gray-800 rounded text-green-600">
                 [INFO] Bot initialized successfully.
              </div>
               <div className="text-xs font-mono p-2 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400">
                 [DEBUG] Connected to vector store.
              </div>
           </div>
        )}
      </div>
    </div>
  );
}
