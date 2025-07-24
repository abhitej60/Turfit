import React from 'react';
import { Menu, Search, Bell, Hash } from 'lucide-react';

interface HeaderProps {
  channelName: string;
  onMobileMenuToggle: () => void;
}

export default function Header({ channelName, onMobileMenuToggle }: HeaderProps) {
  return (
    <div className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onMobileMenuToggle}
          className="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="flex items-center space-x-2">
          <Hash className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <h1 className="font-semibold text-gray-900 dark:text-white">
            {channelName}
          </h1>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-3">
        <div className="hidden md:block relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-2xl text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none w-64"
          />
        </div>
        
        <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 relative">
          <Bell className="w-5 h-5" />
          <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
        </button>
      </div>
    </div>
  );
}