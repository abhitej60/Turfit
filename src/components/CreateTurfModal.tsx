import React, { useState } from 'react';
import { X, Upload, Users, Building, GraduationCap, Heart } from 'lucide-react';

interface CreateTurfModalProps {
  onClose: () => void;
}

export default function CreateTurfModal({ onClose }: CreateTurfModalProps) {
  const [step, setStep] = useState(1);
  const [turfData, setTurfData] = useState({
    type: '',
    name: '',
    description: '',
    logo: '',
    modules: [] as string[],
    roles: [] as string[]
  });

  const turfTypes = [
    {
      id: 'college',
      title: 'College Community',
      description: 'Connect students, faculty, and staff',
      icon: GraduationCap,
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800'
    },
    {
      id: 'startup',
      title: 'Startup Workspace',
      description: 'Collaborate with your team remotely',
      icon: Building,
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800'
    },
    {
      id: 'club',
      title: 'Private Club',
      description: 'Exclusive space for members',
      icon: Users,
      color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800'
    },
    {
      id: 'hobby',
      title: 'Hobby Community',
      description: 'Share interests and passions',
      icon: Heart,
      color: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800'
    }
  ];

  const modules = [
    { id: 'polls', name: 'Polls & Voting', description: 'Create polls and gather feedback' },
    { id: 'events', name: 'Events Calendar', description: 'Schedule and manage events' },
    { id: 'files', name: 'File Sharing', description: 'Share documents and media' },
    { id: 'calendar', name: 'Team Calendar', description: 'Coordinate schedules' },
    { id: 'tasks', name: 'Task Management', description: 'Assign and track tasks' },
    { id: 'announcements', name: 'Announcements', description: 'Broadcast important updates' }
  ];

  const defaultRoles = [
    { id: 'admin', name: 'Admin', permissions: ['All permissions'] },
    { id: 'moderator', name: 'Moderator', permissions: ['Manage channels', 'Moderate chat'] },
    { id: 'member', name: 'Member', permissions: ['Send messages', 'Join voice'] }
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else {
      // Create turf logic here
      onClose();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleModule = (moduleId: string) => {
    setTurfData(prev => ({
      ...prev,
      modules: prev.modules.includes(moduleId)
        ? prev.modules.filter(id => id !== moduleId)
        : [...prev.modules, moduleId]
    }));
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Choose your Turf type
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Select the type that best describes your community
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {turfTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setTurfData(prev => ({ ...prev, type: type.id }))}
            className={`p-6 rounded-2xl border-2 text-left transition-all duration-200 hover:scale-105 ${
              turfData.type === type.id
                ? type.color
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <type.icon className="w-8 h-8 mb-3" />
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              {type.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {type.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Customize your Turf
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Add a logo, name, and description for your community
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
            <Upload className="w-8 h-8 text-gray-400" />
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-medium transition-colors duration-200">
              Upload Logo
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              PNG, JPG up to 2MB
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Turf Name
          </label>
          <input
            type="text"
            value={turfData.name}
            onChange={(e) => setTurfData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Enter your Turf name"
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-0 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </label>
          <textarea
            value={turfData.description}
            onChange={(e) => setTurfData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Describe your community..."
            rows={4}
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-0 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Choose modules
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Select the features you want to enable for your Turf
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => toggleModule(module.id)}
            className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
              turfData.modules.includes(module.id)
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              {module.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {module.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Set up roles
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Configure default roles and permissions for your members
        </p>
      </div>

      <div className="space-y-3">
        {defaultRoles.map((role) => (
          <div key={role.id} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {role.name}
              </h4>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                Customize
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {role.permissions.map((permission, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {permission}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (step) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      default: return renderStep1();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Create New Turf
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Step {step} of 4
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`flex-1 h-2 rounded-full ${
                    stepNumber <= step
                      ? 'bg-blue-600'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step Content */}
          {renderCurrentStep()}

          {/* Footer */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={step === 1 && !turfData.type}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === 4 ? 'Create Turf' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}