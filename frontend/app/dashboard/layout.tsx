import Sidebar from '@/components/dashboard/Sidebar';

export default function DashboardLayout({

  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative w-full">
         <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="mt-16 md:mt-0"> {/* Mobile header spacer */}
             {children}
             {modal}
            </div>
         </div>
      </main>
    </div>
  );
}
