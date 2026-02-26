import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { User, Award, TrendingUp, TrendingDown, BookOpen, Target } from 'lucide-react';
import StudentTable from './StudentTable';

const StudentDashboard = () => {
  // Student profile data
  const studentProfile = {
    name: 'John Smith',
    rollNo: '2024001',
    class: '10-A',
    overallGrade: 'B+',
    attendance: '85%'
  };

  // Academic overview cards data
  const academicOverview = [
    {
      title: 'Total Subjects',
      value: '6',
      icon: BookOpen,
      color: 'bg-blue-500'
    },
    {
      title: 'Highest Score',
      value: '92%',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      title: 'Lowest Score',
      value: '78%',
      icon: TrendingDown,
      color: 'bg-red-500'
    },
    {
      title: 'Class Rank',
      value: '#12',
      icon: Award,
      color: 'bg-purple-500'
    }
  ];

  // Sample marks data
  const marksData = [
    {
      subject: 'Mathematics',
      marks: 78,
      grade: 'B',
      attendance: '88%',
      status: 'Pass'
    },
    {
      subject: 'Science',
      marks: 82,
      grade: 'B+',
      attendance: '92%',
      status: 'Pass'
    },
    {
      subject: 'English',
      marks: 85,
      grade: 'B+',
      attendance: '90%',
      status: 'Pass'
    },
    {
      subject: 'Computer Science',
      marks: 92,
      grade: 'A',
      attendance: '95%',
      status: 'Pass'
    },
    {
      subject: 'History',
      marks: 79,
      grade: 'B',
      attendance: '85%',
      status: 'Pass'
    },
    {
      subject: 'Geography',
      marks: 81,
      grade: 'B+',
      attendance: '87%',
      status: 'Pass'
    }
  ];

  // Performance trend data
  const performanceTrend = [
    { month: 'Jan', score: 72 },
    { month: 'Feb', score: 75 },
    { month: 'Mar', score: 78 },
    { month: 'Apr', score: 76 },
    { month: 'May', score: 80 },
    { month: 'Jun', score: 82 }
  ];

  // Table columns configuration
  const marksColumns = [
    { key: 'subject', label: 'Subject' },
    { key: 'marks', label: 'Marks' },
    { key: 'grade', label: 'Grade' },
    { key: 'attendance', label: 'Attendance' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value) => (
        <span className={`px-2 py-1 text-xs rounded-full ${
          value === 'Pass' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {value}
        </span>
      )
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's your academic overview.</p>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-indigo-600 p-4 rounded-full mr-4">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{studentProfile.name}</h2>
              <p className="text-gray-600">Roll No: {studentProfile.rollNo} | Class: {studentProfile.class}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg">
              <p className="text-sm">Overall Grade</p>
              <p className="text-3xl font-bold">{studentProfile.overallGrade}</p>
            </div>
            <p className="text-gray-600 mt-2">Attendance: {studentProfile.attendance}</p>
          </div>
        </div>
      </div>

      {/* Academic Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {academicOverview.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className={`${card.color} p-3 rounded-full`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-800">{card.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Marks Table and Progress Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Marks Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Subject Performance</h3>
          <StudentTable data={marksData} columns={marksColumns} />
        </div>

        {/* Progress Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={performanceTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Target className="h-5 w-5 text-green-600 mr-2" />
              <h4 className="font-semibold text-green-800">Strengths</h4>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Excellent performance in Computer Science</li>
              <li>• Consistent attendance above 85%</li>
              <li>• Strong analytical skills</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-5 w-5 text-yellow-600 mr-2" />
              <h4 className="font-semibold text-yellow-800">Improvements</h4>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Mathematics scores improved by 6%</li>
              <li>• Better participation in class</li>
              <li>• Steady progress over last 3 months</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Award className="h-5 w-5 text-blue-600 mr-2" />
              <h4 className="font-semibold text-blue-800">Goals</h4>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Achieve A grade in all subjects</li>
              <li>• Improve class rank to top 10</li>
              <li>• Maintain 90%+ attendance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
