import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import CreateTurfModal from './components/CreateTurfModal';
import UserProfile from './components/UserProfile';
import AuthPages from './components/AuthPages';
import Settings from './components/Settings';
import { ThemeProvider } from './contexts/ThemeContext';

type View = 'landing' | 'dashboard' | 'profile' | 'auth' | 'settings';

function App() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [isCreateTurfOpen, setIsCreateTurfOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Listen for demo login event
  React.useEffect(() => {
    const handleDemoLogin = () => {
      setIsLoggedIn(true);
      setCurrentView('dashboard');
    };
    
    window.addEventListener('demo-login', handleDemoLogin);
    return () => window.removeEventListener('demo-login', handleDemoLogin);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('landing');
  };

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage onGetStarted={() => setCurrentView('auth')} />;
      case 'dashboard':
        return (
          <Dashboard
            onCreateTurf={() => setIsCreateTurfOpen(true)}
            onProfile={() => setCurrentView('profile')}
            onSettings={() => setCurrentView('settings')}
            onLogout={handleLogout}
          />
        );
      case 'profile':
        return <UserProfile onBack={() => setCurrentView('dashboard')} />;
      case 'auth':
        return <AuthPages onLogin={handleLogin} />;
      case 'settings':
        return <Settings onBack={() => setCurrentView('dashboard')} />;
      default:
        return <LandingPage onGetStarted={() => setCurrentView('auth')} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        {renderView()}
        {isCreateTurfOpen && (
          <CreateTurfModal onClose={() => setIsCreateTurfOpen(false)} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;