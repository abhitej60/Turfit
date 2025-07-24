import React, { useState } from 'react';
import TurfSidebar from './dashboard/TurfSidebar';
import ChannelSidebar from './dashboard/ChannelSidebar';
import ChatArea from './dashboard/ChatArea';
import MembersList from './dashboard/MembersList';
import Header from './dashboard/Header';

interface DashboardProps {
  onCreateTurf: () => void;
  onProfile: () => void;
  onSettings: () => void;
  onLogout: () => void;
}

export default function Dashboard({ onCreateTurf, onProfile, onSettings, onLogout }: DashboardProps) {
  const [selectedTurf, setSelectedTurf] = useState('startup-hub');
  const [selectedChannel, setSelectedChannel] = useState('general');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Turf Sidebar */}
      <div className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-50 transition-transform duration-300`}>
        <TurfSidebar
          selectedTurf={selectedTurf}
          onSelectTurf={setSelectedTurf}
          onCreateTurf={onCreateTurf}
          onProfile={onProfile}
          onSettings={onSettings}
          onLogout={onLogout}
        />
      </div>

      {/* Channel Sidebar */}
      <div className={`${isMobileMenuOpen ? 'translate-x-20' : '-translate-x-full lg:translate-x-0'} fixed lg:relative z-40 transition-transform duration-300`}>
        <ChannelSidebar
          selectedChannel={selectedChannel}
          onSelectChannel={setSelectedChannel}
          turfName="Startup Hub"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          channelName={selectedChannel}
          onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        
        <div className="flex-1 flex min-h-0">
          <ChatArea channelName={selectedChannel} />
          
          {/* Members List - Hidden on mobile */}
          <div className="hidden xl:block">
            <MembersList />
          </div>
        </div>
      </div>
    </div>
  );
}