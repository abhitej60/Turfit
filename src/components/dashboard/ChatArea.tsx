import React, { useState } from 'react';
import { Send, Smile, Paperclip, Plus, Heart, ThumbsUp } from 'lucide-react';

interface ChatAreaProps {
  channelName: string;
}

export default function ChatArea({ channelName }: ChatAreaProps) {
  const [message, setMessage] = useState('');

  const messages = [
    {
      id: 1,
      user: { name: 'Alex Chen', avatar: '👨‍💻', role: 'Admin', color: 'text-red-500' },
      content: 'Welcome everyone to the startup hub! Let\'s make this week productive.',
      timestamp: '10:30 AM',
      reactions: [{ emoji: '👍', count: 3 }, { emoji: '🚀', count: 1 }]
    },
    {
      id: 2,
      user: { name: 'Sarah Kim', avatar: '👩‍🎨', role: 'Designer', color: 'text-purple-500' },
      content: 'Just finished the new landing page mockups. Check them out in #design when you get a chance!',
      timestamp: '10:45 AM',
      reactions: [{ emoji: '🎨', count: 2 }, { emoji: '👀', count: 4 }]
    },
    {
      id: 3,
      user: { name: 'Mike Johnson', avatar: '👨‍🔬', role: 'Developer', color: 'text-blue-500' },
      content: 'The API integration is looking good. Should be ready for testing by tomorrow.',
      timestamp: '11:15 AM',
      reactions: [{ emoji: '⚡', count: 1 }]
    },
    {
      id: 4,
      user: { name: 'Emma Wilson', avatar: '👩‍💼', role: 'Product Manager', color: 'text-green-500' },
      content: 'Great work team! Our sprint is on track. Let\'s keep this momentum going 💪',
      timestamp: '11:30 AM',
      reactions: [{ emoji: '💪', count: 5 }, { emoji: '🔥', count: 2 }]
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message sending
      setMessage('');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-gray-900">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
          <span className="text-gray-500 dark:text-gray-400 mr-2">#</span>
          {channelName}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Team collaboration and updates
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="group hover:bg-gray-50 dark:hover:bg-gray-800 -mx-4 px-4 py-2 rounded-lg transition-colors duration-200">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {msg.user.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {msg.user.name}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${msg.user.color} bg-opacity-10 font-medium`}>
                    {msg.user.role}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {msg.timestamp}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {msg.content}
                </p>
                {msg.reactions.length > 0 && (
                  <div className="flex items-center space-x-1 mt-2">
                    {msg.reactions.map((reaction, index) => (
                      <button
                        key={index}
                        className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded-full text-sm transition-colors duration-200"
                      >
                        <span>{reaction.emoji}</span>
                        <span className="text-gray-600 dark:text-gray-400">{reaction.count}</span>
                      </button>
                    ))}
                    <button className="flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Plus className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <form onSubmit={handleSendMessage} className="flex items-end space-x-3">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Message #${channelName}`}
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-0 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                <button type="button" className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button type="button" className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">
                  <Smile className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={!message.trim()}
            className="p-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-700 text-white rounded-2xl transition-colors duration-200 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}