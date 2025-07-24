import React from 'react';
import { Crown, Shield, Users } from 'lucide-react';

export default function MembersList() {
  const members = [
    { 
      id: 1, 
      name: 'Alex Chen', 
      avatar: '👨‍💻', 
      status: 'online', 
      role: 'Admin',
      roleIcon: Crown,
      roleColor: 'text-red-500'
    },
    { 
      id: 2, 
      name: 'Sarah Kim', 
      avatar: '👩‍🎨', 
      status: 'online', 
      role: 'Designer',
      roleIcon: Shield,
      roleColor: 'text-purple-500'
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      avatar: '👨‍🔬', 
      status: 'online', 
      role: 'Developer',
      roleIcon: Shield,
      roleColor: 'text-blue-500'
    },
    { 
      id: 4, 
      name: 'Emma Wilson', 
      avatar: '👩‍💼', 
      status: 'away', 
      role: 'Product Manager',
      roleIcon: Shield,
      roleColor: 'text-green-500'
    },
    { 
      id: 5, 
      name: 'David Park', 
      avatar: '👨‍💻', 
      status: 'offline', 
      role: 'Developer',
      roleIcon: Users,
      roleColor: 'text-gray-500'
    },
    { 
      id: 6, 
      name: 'Lisa Zhang', 
      avatar: '👩‍🔬', 
      status: 'offline', 
      role: 'Designer',
      roleIcon: Users,
      roleColor: 'text-gray-500'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'busy': return 'bg-red-500';
      default: return 'bg-gray-400';
    }
  };

  const onlineMembers = members.filter(m => m.status === 'online');
  const awayMembers = members.filter(m => m.status === 'away');
  const offlineMembers = members.filter(m => m.status === 'offline');

  const MemberGroup = ({ title, members, count }: { title: string, members: typeof members, count: number }) => (
    <div className="mb-4">
      <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 px-2">
        {title} — {count}
      </h4>
      <div className="space-y-1">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer group"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-sm font-bold">
                {member.avatar}
              </div>
              <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${getStatusColor(member.status)} border-2 border-white dark:border-gray-800 rounded-full`} />
            </div>
            <div className="ml-3 flex-1 min-w-0">
              <div className="flex items-center space-x-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {member.name}
                </p>
                <member.roleIcon className={`w-3 h-3 ${member.roleColor} flex-shrink-0`} />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 h-full overflow-y-auto">
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
          Members
        </h3>
        
        {onlineMembers.length > 0 && (
          <MemberGroup title="Online" members={onlineMembers} count={onlineMembers.length} />
        )}
        
        {awayMembers.length > 0 && (
          <MemberGroup title="Away" members={awayMembers} count={awayMembers.length} />
        )}
        
        {offlineMembers.length > 0 && (
          <MemberGroup title="Offline" members={offlineMembers} count={offlineMembers.length} />
        )}
      </div>
    </div>
  );
}