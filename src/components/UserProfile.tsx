import React, { useState } from 'react';
import { ArrowLeft, Camera, Edit3, MapPin, Calendar, Github, Linkedin, Globe } from 'lucide-react';

interface UserProfileProps {
  onBack: () => void;
}

export default function UserProfile({ onBack }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Alex Chen',
    username: '@alexchen',
    bio: 'Full-stack developer passionate about building communities. Currently working on making remote collaboration more human.',
    location: 'San Francisco, CA',
    joinDate: 'March 2023',
    github: 'alexchen',
    linkedin: 'alexchen-dev',
    website: 'alexchen.dev'
  });

  const userTurfs = [
    { 
      id: 1, 
      name: 'Startup Hub', 
      logo: '🚀', 
      role: 'Admin', 
      members: 24,
      color: 'bg-blue-500'
    },
    { 
      id: 2, 
      name: 'CS Department', 
      logo: '🎓', 
      role: 'Member', 
      members: 156,
      color: 'bg-green-500'
    },
    { 
      id: 3, 
      name: 'Design Club', 
      logo: '🎨', 
      role: 'Moderator', 
      members: 89,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </button>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-medium transition-colors duration-200"
            >
              <Edit3 className="w-4 h-4" />
              <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Cover Photo */}
          <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative">
            {isEditing && (
              <button className="absolute top-4 right-4 p-2 bg-black bg-opacity-20 text-white rounded-2xl hover:bg-opacity-30 transition-colors duration-200">
                <Camera className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="px-8 pb-8">
            {/* Avatar */}
            <div className="relative -mt-16 mb-6">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold border-4 border-white dark:border-gray-800">
                👨‍💻
              </div>
              {isEditing && (
                <button className="absolute bottom-2 right-2 p-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors duration-200">
                  <Camera className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Profile Info */}
            <div className="space-y-4">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                    className="text-3xl font-bold bg-transparent border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={profileData.username}
                    onChange={(e) => setProfileData(prev => ({ ...prev, username: e.target.value }))}
                    className="text-lg text-gray-600 dark:text-gray-400 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:outline-none"
                  />
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                    rows={3}
                    className="w-full text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-3 border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                  />
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {profileData.name}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
                    {profileData.username}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                    {profileData.bio}
                  </p>
                </div>
              )}

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {profileData.joinDate}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href={`https://github.com/${profileData.github}`} className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-2xl transition-colors duration-200">
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a href={`https://linkedin.com/in/${profileData.linkedin}`} className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 rounded-2xl transition-colors duration-200">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a href={`https://${profileData.website}`} className="flex items-center space-x-2 px-4 py-2 bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 text-green-700 dark:text-green-300 rounded-2xl transition-colors duration-200">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">Website</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Turfs Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            My Turfs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userTurfs.map((turf) => (
              <div key={turf.id} className="p-6 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 ${turf.color} rounded-2xl flex items-center justify-center text-white text-xl`}>
                    {turf.logo}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {turf.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {turf.members} members
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    turf.role === 'Admin' 
                      ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                      : turf.role === 'Moderator'
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}>
                    {turf.role}
                  </span>
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    Visit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}