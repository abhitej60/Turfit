import React, { useState } from 'react';
import { ArrowLeft, Bell, Moon, Sun, Globe, Shield, Palette, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SettingsProps {
  onBack: () => void;
}

export default function Settings({ onBack }: SettingsProps) {
  const { theme, toggleTheme } = useTheme();
  const [selectedTab, setSelectedTab] = useState('general');
  const [settings, setSettings] = useState({
    notifications: {
      mentions: true,
      messages: true,
      events: false,
      updates: true
    },
    privacy: {
      profileVisible: true,
      activityStatus: true,
      readReceipts: false
    },
    appearance: {
      compactMode: false,
      animations: true,
      fontSize: 'medium'
    }
  });

  const tabs = [
    { id: 'general', name: 'General', icon: Globe },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'privacy', name: 'Privacy', icon: Shield },
    { id: 'turfs', name: 'My Turfs', icon: Users }
  ];

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Account Settings
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Email Address</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">alex.chen@example.com</p>
            </div>
            <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Change
            </button>
          </div>
          <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Password</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Last updated 3 months ago</p>
            </div>
            <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Update
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Language & Region
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Language
            </label>
            <select className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-2xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>English (US)</option>
              <option>English (UK)</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time Zone
            </label>
            <select className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-2xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>Pacific Time (PT)</option>
              <option>Eastern Time (ET)</option>
              <option>Central Time (CT)</option>
              <option>Mountain Time (MT)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Push Notifications
        </h3>
        <div className="space-y-4">
          {Object.entries({
            mentions: 'Direct mentions',
            messages: 'New messages',
            events: 'Upcoming events',
            updates: 'System updates'
          }).map(([key, label]) => (
            <div key={key} className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{label}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Receive notifications for {label.toLowerCase()}
                </p>
              </div>
              <button
                onClick={() => setSettings(prev => ({
                  ...prev,
                  notifications: {
                    ...prev.notifications,
                    [key]: !prev.notifications[key as keyof typeof prev.notifications]
                  }
                }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.notifications[key as keyof typeof settings.notifications]
                    ? 'bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.notifications[key as keyof typeof settings.notifications]
                      ? 'translate-x-6'
                      : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Theme
        </h3>
        <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
          <div className="flex items-center space-x-3">
            {theme === 'dark' ? (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Dark Mode</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Toggle between light and dark themes
              </p>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              theme === 'dark' ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Display Options
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Font Size
            </label>
            <select 
              value={settings.appearance.fontSize}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                appearance: { ...prev.appearance, fontSize: e.target.value }
              }))}
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-2xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Compact Mode</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reduce spacing for more content
              </p>
            </div>
            <button
              onClick={() => setSettings(prev => ({
                ...prev,
                appearance: { ...prev.appearance, compactMode: !prev.appearance.compactMode }
              }))}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.appearance.compactMode ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.appearance.compactMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (selectedTab) {
      case 'general': return renderGeneralSettings();
      case 'notifications': return renderNotificationSettings();
      case 'appearance': return renderAppearanceSettings();
      case 'privacy': return <div className="text-gray-600 dark:text-gray-400">Privacy settings coming soon...</div>;
      case 'turfs': return <div className="text-gray-600 dark:text-gray-400">Turf management coming soon...</div>;
      default: return renderGeneralSettings();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Settings
                </h2>
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-left transition-colors duration-200 ${
                        selectedTab === tab.id
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {tabs.find(tab => tab.id === selectedTab)?.name}
              </h3>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}