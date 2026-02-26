import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, TrendingUp, CheckCircle, Calendar } from 'lucide-react';
import ChartCard from './ChartCard';
import StudentTable from './StudentTable';

const TeacherDashboard = () => {
  // Sample data for summary cards
  const summaryData = [
    {
      title: 'Total Students',
      value: '120',
      icon: Users,
      color: 'bg-blue-500',
      description: 'Enrolled this semester'
    },
    {
      title: 'Average Class Score',
      value: '78%',
      icon: TrendingUp,
      color: 'bg-green-500',
      description: 'Across all subjects'
    },
    {
      title: 'Pass Percentage',
      value: '85%',
      icon: CheckCircle,
      color: 'bg-purple-500',
      description: 'Students passing'
    },
    {
      title: 'Attendance Average',
      value: '82%',
      icon: Calendar,
      color: 'bg-orange-500',
      description: 'Monthly average'
    }
  ];

  // Sample data for subject-wise marks
  const subjectData = [
    { subject: 'Math', average: 75 },
    { subject: 'Science', average: 82 },
    { subject: 'English', average: 78 },
    { subject: 'Computer', average: 88 }
  ];

  // Sample data for class performance trend
  const performanceData = [
    { month: 'Jan', score: 72 },
    { month: 'Feb', score: 75 },
    { month: 'Mar', score: 78 },
    { month: 'Apr', score: 76 },
    { month: 'May', score: 80 },
    { month: 'Jun', score: 78 }
  ];

  // Sample data for recent activity
  const recentActivity = [
    {
      studentName: 'John Smith',
      activity: 'New student added',
      time: '2 hours ago',
      type: 'student'
    },
    {
      studentName: 'Sarah Johnson',
      activity: 'Report generated',
      time: '5 hours ago',
      type: 'report'
    },
    {
      studentName: 'Mike Wilson',
      activity: 'Marks updated',
      time: '1 day ago',
      type: 'marks'
    },
    {
      studentName: 'Emily Davis',
      activity: 'New student added',
      time: '2 days ago',
      type: 'student'
    }
  ];

  const activityColumns = [
    { key: 'studentName', label: 'Student Name' },
    { key: 'activity', label: 'Activity' },
    { key: 'time', label: 'Time' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Teacher Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's an overview of your class performance.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((card, index) => {
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
                  <p className="text-xs text-gray-500">{card.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Subject-wise Average Marks */}
        <ChartCard title="Subject-wise Average Marks">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="average" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Class Performance Trend */}
        <ChartCard title="Class Performance Trend (Last 6 Months)">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <StudentTable data={recentActivity} columns={activityColumns} />
      </div>
    </div>
  );
};

export default TeacherDashboard;
