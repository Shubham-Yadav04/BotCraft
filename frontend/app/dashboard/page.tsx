'use client';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Personal Info
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Manage your account details and preferences.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Profile Card */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 p-6 rounded-2xl bg-white dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 shadow-sm"
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
              JS
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">John Smith</h2>
              <p className="text-gray-500 dark:text-gray-400">john.smith@example.com</p>
              <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                Pro Plan
              </div>
            </div>
          </div>
          
           <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                 <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</label>
                 <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                    John Smith
                 </div>
              </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</label>
                 <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                    john.smith@example.com
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Stats / Quick Info */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 shadow-sm space-y-6"
        >
           <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Usage Overview</h3>
           
           <div className="space-y-4">
              <div>
                 <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500 dark:text-gray-400">Bots Created</span>
                    <span className="font-medium text-gray-900 dark:text-white">3 / 5</span>
                 </div>
                 <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: '60%' }}></div>
                 </div>
              </div>
              
               <div>
                 <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500 dark:text-gray-400">API Calls</span>
                    <span className="font-medium text-gray-900 dark:text-white">1,240 / 5,000</span>
                 </div>
                 <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '25%' }}></div>
                 </div>
              </div>
           </div>
           
           <button className="w-full py-2 px-4 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
              Upgrade Plan
           </button>
        </motion.div>
      </section>
    </div>
  );
}
