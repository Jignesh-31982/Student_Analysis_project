import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import AddStudent from './components/AddStudent';
import Analytics from './components/Analytics';
import Report from './components/Report';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');

  const handleLogin = (loginData) => {
    // Simulate authentication
    setIsAuthenticated(true);
    setUserRole(loginData.role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('');
    setActiveMenuItem('dashboard');
  };

  const handleMenuItemClick = (itemId) => {
    setActiveMenuItem(itemId);
  };

  const renderMainContent = () => {
    if (userRole === 'teacher') {
      switch (activeMenuItem) {
        case 'dashboard':
          return <TeacherDashboard />;
        case 'add-student':
          return <AddStudent />;
        case 'analytics':
          return <Analytics />;
        case 'reports':
          return <Report />;
        case 'students':
          return <div className="p-6"><h2 className="text-2xl font-bold">All Students</h2><p className="text-gray-600">Student management page would go here</p></div>;
        default:
          return <TeacherDashboard />;
      }
    } else if (userRole === 'student') {
      switch (activeMenuItem) {
        case 'dashboard':
          return <StudentDashboard />;
        case 'analytics':
          return <Analytics />;
        case 'reports':
          return <Report />;
        case 'subjects':
          return <div className="p-6"><h2 className="text-2xl font-bold">Subjects</h2><p className="text-gray-600">Subject details would go here</p></div>;
        case 'calendar':
          return <div className="p-6"><h2 className="text-2xl font-bold">Calendar</h2><p className="text-gray-600">Academic calendar would go here</p></div>;
        default:
          return <StudentDashboard />;
      }
    }
    return null;
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          title="Student Performance Analytics System" 
          userRole={userRole}
          onLogout={handleLogout}
        />
        <div className="flex">
          <Sidebar 
            activeItem={activeMenuItem}
            onItemClick={handleMenuItemClick}
            userRole={userRole}
          />
          <main className="flex-1">
            {renderMainContent()}
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
