"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeTest() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-4 shadow-lg">
      <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
        Current theme: <span className="font-semibold">{theme}</span>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => setTheme("light")}
          className={`px-3 py-1 rounded text-xs ${
            theme === "light" 
              ? "bg-indigo-600 text-white" 
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`px-3 py-1 rounded text-xs ${
            theme === "dark" 
              ? "bg-indigo-600 text-white" 
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
        >
          Dark
        </button>
        <button
          onClick={() => setTheme("system")}
          className={`px-3 py-1 rounded text-xs ${
            theme === "system" 
              ? "bg-indigo-600 text-white" 
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
        >
          System
        </button>
      </div>
    </div>
  );
}