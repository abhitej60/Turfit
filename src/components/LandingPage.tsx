import React from 'react';
import { MessageCircle, Users, Calendar, Shield, ArrowRight, Zap, Globe, Lock } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const features = [
    {
      icon: MessageCircle,
      title: 'Smart Chat',
      description: 'Organized channels with threads, reactions, and real-time messaging'
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Role-based permissions and member management tools'
    },
    {
      icon: Calendar,
      title: 'Events & Planning',
      description: 'Built-in calendar and event planning for your community'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'End-to-end encryption and granular privacy controls'
    }
  ];

  const useCases = [
    {
      icon: Globe,
      title: 'College Communities',
      description: 'Connect students across departments, organize study groups, and manage campus events',
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
    },
    {
      icon: Zap,
      title: 'Startup Workspaces',
      description: 'Collaborate with your team, share updates, and maintain company culture remotely',
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
    },
    {
      icon: Lock,
      title: 'Private Clubs',
      description: 'Create exclusive spaces for hobbyists, interest groups, or professional networks',
      color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Turfit</span>
          </div>
          <button
            onClick={onGetStarted}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-medium transition-colors duration-200"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Build Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"> Community</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Create custom spaces for your college, startup, club, or hobby community. 
            Chat, collaborate, and connect with powerful tools designed for modern teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105"
            >
              Create Your Turf
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 rounded-2xl font-semibold text-lg transition-colors duration-200">
              Join Existing Turf
            </button>
          </div>
          
          {/* Demo Access Button */}
          <div className="mt-6">
            <button
              onClick={() => {
                // Simulate login for demo purposes
                const event = new CustomEvent('demo-login');
                window.dispatchEvent(event);
              }}
              className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-2xl font-medium text-sm transition-colors duration-200"
            >
              🚀 Demo Dashboard (Skip Auth)
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Everything you need to build community
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Perfect for any community
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className={`w-12 h-12 ${useCase.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <useCase.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to build your community?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of communities already using Turfit to connect and collaborate.
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}