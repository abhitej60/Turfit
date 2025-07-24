import React from 'react';
import { Plus, Settings, User, LogOut } from 'lucide-react';

interface TurfSidebarProps {
  selectedTurf: string;
  onSelectTurf: (turfId: string) => void;
  onCreateTurf: () => void;
  onProfile: () => void;
  onSettings: () => void;
  onLogout: () => void;
}

export default function TurfSidebar({ 
  selectedTurf, 
  onSelectTurf, 
  onCreateTurf,
  onProfile,
  onSettings,
  onLogout
}: TurfSidebarProps) {
  const turfs = [
    { id: 'startup-hub', name: 'Startup Hub', logo: '🚀', color: 'bg-blue-500' },
    { id: 'college-cs', name: 'CS Department', logo: '🎓', color: 'bg-green-500' },
    { id: 'design-club', name: 'Design Club', logo: '🎨', color: 'bg-purple-500' },
    { id: 'photography', name: 'Photo Society', logo: '📸', color: 'bg-orange-500' },
  ];

  return (
    <div className="w-20 bg-gray-800 dark:bg-gray-950 flex flex-col items-center py-4 space-y-2 h-full">
      {/* Turfs */}
      {turfs.map((turf) => (
        <div key={turf.id} className="relative group">
          <button
            onClick={() => onSelectTurf(turf.id)}
            className={`w-14 h-14 ${turf.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg transition-all duration-200 hover:rounded-xl ${
              selectedTurf === turf.id ? 'rounded-xl' : ''
            }`}
          >
            {turf.logo}
          </button>
          {/* Tooltip */}
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            {turf.name}
          </div>
          {/* Active indicator */}
          {selectedTurf === turf.id && (
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
          )}
        </div>
      ))}

      {/* Add Turf Button */}
      <button
        onClick={onCreateTurf}
        className="w-14 h-14 bg-gray-700 hover:bg-green-600 rounded-2xl hover:rounded-xl flex items-center justify-center text-green-400 hover:text-white transition-all duration-200 group"
      >
        <Plus className="w-6 h-6" />
        <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
          Create Turf
        </div>
      </button>

      {/* Spacer */}
      <div className="flex-1" />

      {/* User Actions */}
      <div className="space-y-2">
        <button
          onClick={onProfile}
          className="w-14 h-14 bg-gray-700 hover:bg-blue-600 rounded-2xl hover:rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 group"
        >
          <User className="w-5 h-5" />
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            Profile
          </div>
        </button>
        
        <button
          onClick={onSettings}
          className="w-14 h-14 bg-gray-700 hover:bg-gray-600 rounded-2xl hover:rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 group"
        >
          <Settings className="w-5 h-5" />
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            Settings
          </div>
        </button>
        
        <button
          onClick={onLogout}
          className="w-14 h-14 bg-gray-700 hover:bg-red-600 rounded-2xl hover:rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 group"
        >
          <LogOut className="w-5 h-5" />
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            Logout
          </div>
        </button>
      </div>
    </div>
  );
}