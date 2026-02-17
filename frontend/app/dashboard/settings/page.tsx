"use client"
import React, { useState, useEffect } from 'react';
import { useTheme } from "next-themes";


export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    notifications: true,
  });

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    // Handle checkbox separately
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setProfile((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (name === 'theme') {
      setTheme(value);
    } else {
      setProfile((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="space-y-10 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-8">
          <div>
            <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Profile</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <div className="sm:col-span-2 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={profile.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={profile.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        <div className="pt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-8">
          <div>
            <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Preferences</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Manage how you interact with the application.</p>
          </div>

          <div className="sm:col-span-2 space-y-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="notifications"
                  name="notifications"
                  type="checkbox"
                  checked={profile.notifications}
                  onChange={handleInputChange}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="notifications" className="font-medium text-gray-700 dark:text-gray-300">Email Notifications</label>
                <p className="text-gray-500 dark:text-gray-400">Get notified about important updates and activity.</p>
              </div>
            </div>

            <div>
              <label htmlFor="theme" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Appearance</label>
              <select
                id="theme"
                name="theme"
                value={theme}
                onChange={handleInputChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
          </div>
        </div>

        <div className="pt-5 flex justify-end">
          <button
            type="button"
            className="bg-white dark:bg-gray-800 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

