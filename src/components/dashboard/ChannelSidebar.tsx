import React from 'react';
import { Hash, Volume2, Video, Plus, ChevronDown, Settings } from 'lucide-react';

interface ChannelSidebarProps {
  selectedChannel: string;
  onSelectChannel: (channelId: string) => void;
  turfName: string;
}

export default function ChannelSidebar({ selectedChannel, onSelectChannel, turfName }: ChannelSidebarProps) {
  const textChannels = [
    { id: 'general', name: 'general', description: 'General discussion' },
    { id: 'announcements', name: 'announcements', description: 'Important updates' },
    { id: 'random', name: 'random', description: 'Off-topic chat' },
    { id: 'resources', name: 'resources', description: 'Shared resources' },
  ];

  const voiceChannels = [
    { id: 'meeting-room', name: 'Meeting Room', connected: 3 },
    { id: 'focus-room', name: 'Focus Room', connected: 0 },
    { id: 'casual-chat', name: 'Casual Chat', connected: 1 },
  ];

  const videoChannels = [
    { id: 'all-hands', name: 'All Hands', scheduled: true },
    { id: 'brainstorm', name: 'Brainstorm', scheduled: false },
  ];

  return (
    <div className="w-60 bg-gray-200 dark:bg-gray-800 h-full flex flex-col">
      {/* Turf Header */}
      <div className="p-4 border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-gray-900 dark:text-white truncate">{turfName}</h2>
          <button className="p-1 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <Settings className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Channels */}
      <div className="flex-1 overflow-y-auto">
        {/* Text Channels */}
        <div className="p-2">
          <div className="flex items-center justify-between px-2 py-1 mb-1">
            <div className="flex items-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              <ChevronDown className="w-3 h-3 mr-1" />
              Text Channels
            </div>
            <Plus className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer transition-colors duration-200" />
          </div>
          {textChannels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => onSelectChannel(channel.id)}
              className={`w-full flex items-center px-2 py-1.5 rounded-lg text-left transition-colors duration-200 group ${
                selectedChannel === channel.id
                  ? 'bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Hash className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="truncate">{channel.name}</span>
            </button>
          ))}
        </div>

        {/* Voice Channels */}
        <div className="p-2">
          <div className="flex items-center justify-between px-2 py-1 mb-1">
            <div className="flex items-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              <ChevronDown className="w-3 h-3 mr-1" />
              Voice Channels
            </div>
            <Plus className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer transition-colors duration-200" />
          </div>
          {voiceChannels.map((channel) => (
            <button
              key={channel.id}
              className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-left transition-colors duration-200 group text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
            >
              <div className="flex items-center">
                <Volume2 className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">{channel.name}</span>
              </div>
              {channel.connected > 0 && (
                <span className="text-xs bg-green-500 text-white px-1.5 py-0.5 rounded-full">
                  {channel.connected}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Video Channels */}
        <div className="p-2">
          <div className="flex items-center justify-between px-2 py-1 mb-1">
            <div className="flex items-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              <ChevronDown className="w-3 h-3 mr-1" />
              Video Channels
            </div>
            <Plus className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer transition-colors duration-200" />
          </div>
          {videoChannels.map((channel) => (
            <button
              key={channel.id}
              className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-left transition-colors duration-200 group text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
            >
              <div className="flex items-center">
                <Video className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">{channel.name}</span>
              </div>
              {channel.scheduled && (
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}