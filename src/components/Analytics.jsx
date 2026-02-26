import React, { useState } from 'react';
import { LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertTriangle, TrendingUp, Target, BookOpen } from 'lucide-react';
import ChartCard from './ChartCard';

const Analytics = () => {
  const [selectedStudent, setSelectedStudent] = useState('John Smith');
  const [timeFilter, setTimeFilter] = useState('monthly');

  // Sample student options
  const students = [
    'John Smith',
    'Sarah Johnson',
    'Mike Wilson',
    'Emily Davis',
    'James Brown'
  ];

  // Sample data for marks progression
  const marksProgression = [
    { month: 'Jan', math: 65, science: 70, english: 75, computer: 80 },
    { month: 'Feb', math: 68, science: 72, english: 73, computer: 82 },
    { month: 'Mar', math: 70, science: 75, english: 76, computer: 85 },
    { month: 'Apr', math: 72, science: 73, english: 78, computer: 86 },
    { month: 'May', math: 75, science: 78, english: 80, computer: 88 },
    { month: 'Jun', math: 78, science: 80, english: 82, computer: 90 }
  ];

  // Sample data for subject comparison (Radar Chart)
  const subjectComparison = [
    { subject: 'Math', score: 78, fullMark: 100 },
    { subject: 'Science', score: 80, fullMark: 100 },
    { subject: 'English', score: 82, fullMark: 100 },
    { subject: 'Computer', score: 90, fullMark: 100 },
    { subject: 'History', score: 75, fullMark: 100 },
    { subject: 'Geography', score: 77, fullMark: 100 }
  ];

  // AI Recommendations based on performance
  const recommendations = [
    {
      icon: TrendingUp,
      title: 'Improve practice in Algebra',
      description: 'Focus on solving more algebraic problems to strengthen mathematical foundations',
      priority: 'high'
    },
    {
      icon: BookOpen,
      title: 'Attend extra classes',
      description: 'Join weekend mathematics workshops for additional support',
      priority: 'medium'
    },
    {
      icon: Target,
      title: 'Increase attendance above 75%',
      description: 'Regular attendance is crucial for consistent academic performance',
      priority: 'high'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Performance Analytics</h1>
        <p className="text-gray-600 mt-2">Detailed analysis of student academic performance</p>
      </div>

      {/* Student Selection Panel */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Student
            </label>
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {students.map(student => (
                <option key={student} value={student}>{student}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Filter
            </label>
            <div className="flex space-x-2">
              {['monthly', 'semester', 'yearly'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setTimeFilter(filter)}
                  className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                    timeFilter === filter
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-end">
            <div className="bg-indigo-50 p-4 rounded-lg w-full">
              <p className="text-sm text-gray-600">Current Student</p>
              <p className="text-lg font-semibold text-indigo-700">{selectedStudent}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weak Subject Detection */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <div className="flex items-center">
          <AlertTriangle className="h-5 w-5 text-red-600 mr-3" />
          <div>
            <p className="font-semibold text-red-800">Weak Subject Detected</p>
            <p className="text-red-600">Mathematics performance below 40% threshold - requires immediate attention</p>
          </div>
        </div>
      </div>

      {/* Performance Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Marks Progression Chart */}
        <ChartCard title="Marks Progression Over Time">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marksProgression}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="math" stroke="#ef4444" strokeWidth={2} />
              <Line type="monotone" dataKey="science" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="english" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="computer" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Subject Comparison Radar Chart */}
        <ChartCard title="Subject Comparison">
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={subjectComparison}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#4f46e5"
                fill="#4f46e5"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Recommendations</h3>
        <div className="space-y-4">
          {recommendations.map((rec, index) => {
            const Icon = rec.icon;
            return (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className={`p-2 rounded-full mr-4 ${
                  rec.priority === 'high' ? 'bg-red-100' : 'bg-blue-100'
                }`}>
                  <Icon className={`h-5 w-5 ${
                    rec.priority === 'high' ? 'text-red-600' : 'text-blue-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{rec.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{rec.description}</p>
                  <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                    rec.priority === 'high' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {rec.priority} priority
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-sm text-gray-600">Average Score</p>
          <p className="text-2xl font-bold text-gray-800">78.5%</p>
          <p className="text-xs text-green-600">↑ 3.2% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-sm text-gray-600">Best Subject</p>
          <p className="text-2xl font-bold text-gray-800">Computer</p>
          <p className="text-xs text-gray-500">90% average</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-sm text-gray-600">Needs Improvement</p>
          <p className="text-2xl font-bold text-red-600">Math</p>
          <p className="text-xs text-gray-500">78% average</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-sm text-gray-600">Overall Trend</p>
          <p className="text-2xl font-bold text-green-600">Positive</p>
          <p className="text-xs text-gray-500">Improving steadily</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
