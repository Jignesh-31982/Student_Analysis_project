import React from 'react';
import { User, Download, Printer, CheckCircle, XCircle, TrendingUp, Calendar } from 'lucide-react';
import StudentTable from './StudentTable';

const Report = () => {
  // Student information
  const studentInfo = {
    name: 'John Smith',
    rollNo: '2024001',
    class: '10-A',
    overallPercentage: '82.8%',
    grade: 'B+',
    academicYear: '2023-2024'
  };

  // Detailed marks data
  const detailedMarks = [
    {
      subject: 'Mathematics',
      midterm: 75,
      final: 82,
      assignment: 78,
      practical: 80,
      total: 78.75,
      grade: 'B+'
    },
    {
      subject: 'Science',
      midterm: 78,
      final: 85,
      assignment: 82,
      practical: 88,
      total: 83.25,
      grade: 'B+'
    },
    {
      subject: 'English',
      midterm: 82,
      final: 88,
      assignment: 85,
      practical: 85,
      total: 85.0,
      grade: 'B+'
    },
    {
      subject: 'Computer Science',
      midterm: 90,
      final: 95,
      assignment: 92,
      practical: 98,
      total: 93.75,
      grade: 'A'
    },
    {
      subject: 'History',
      midterm: 76,
      final: 80,
      assignment: 78,
      practical: 82,
      total: 79.0,
      grade: 'B'
    },
    {
      subject: 'Geography',
      midterm: 79,
      final: 83,
      assignment: 80,
      practical: 82,
      total: 81.0,
      grade: 'B+'
    }
  ];

  // Strengths and areas for improvement
  const strengths = [
    'Strong in Computer Science with 93.75% average',
    'Good attendance record (85% overall)',
    'Consistent performance across subjects',
    'Excellent practical skills',
    'Active participation in class activities'
  ];

  const improvements = [
    'Needs improvement in Mathematics (78.75% - below target)',
    'Low participation in Science practical sessions',
    'Could improve assignment scores',
    'Better time management needed for exams',
    'Focus on weak areas identified in assessments'
  ];

  // Table columns for detailed marks
  const marksColumns = [
    { key: 'subject', label: 'Subject' },
    { key: 'midterm', label: 'Midterm' },
    { key: 'final', label: 'Final' },
    { key: 'assignment', label: 'Assignment' },
    { key: 'practical', label: 'Practical' },
    { key: 'total', label: 'Total' },
    { 
      key: 'grade', 
      label: 'Grade',
      render: (value) => (
        <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
          value === 'A' ? 'bg-green-100 text-green-700' :
          value === 'B+' ? 'bg-blue-100 text-blue-700' :
          'bg-yellow-100 text-yellow-700'
        }`}>
          {value}
        </span>
      )
    }
  ];

  const handleDownloadPDF = () => {
    // Simulate PDF generation
    alert('PDF report generation would be implemented here with a library like jsPDF');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Academic Report</h1>
          <p className="text-gray-600 mt-2">Comprehensive student performance report</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handlePrint}
            className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Printer className="h-4 w-4 mr-2" />
            Print
          </button>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </button>
        </div>
      </div>

      {/* Student Info Card */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-indigo-600 p-4 rounded-full mr-4">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{studentInfo.name}</h2>
              <p className="text-gray-600">
                Roll No: {studentInfo.rollNo} | Class: {studentInfo.class} | 
                Academic Year: {studentInfo.academicYear}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg">
              <p className="text-sm">Overall Performance</p>
              <p className="text-2xl font-bold">{studentInfo.overallPercentage}</p>
              <p className="text-lg">Grade: {studentInfo.grade}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Marks Table */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Detailed Marks Breakdown</h3>
        <StudentTable data={detailedMarks} columns={marksColumns} />
        
        {/* Summary Statistics */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Average Score</p>
            <p className="text-xl font-bold text-blue-700">82.8%</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Highest Score</p>
            <p className="text-xl font-bold text-green-700">93.75%</p>
            <p className="text-xs text-gray-500">Computer Science</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Lowest Score</p>
            <p className="text-xl font-bold text-yellow-700">78.75%</p>
            <p className="text-xs text-gray-500">Mathematics</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Total Subjects</p>
            <p className="text-xl font-bold text-purple-700">6</p>
            <p className="text-xs text-gray-500">All passed</p>
          </div>
        </div>
      </div>

      {/* Strengths and Areas for Improvement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Strengths */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            Strengths
          </h3>
          <ul className="space-y-3">
            {strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✔</span>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas for Improvement */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <XCircle className="h-5 w-5 text-red-600 mr-2" />
            Areas for Improvement
          </h3>
          <ul className="space-y-3">
            {improvements.map((improvement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-600 mr-2 mt-1">❌</span>
                <span className="text-gray-700">{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 text-indigo-600 mr-2" />
          Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-semibold text-indigo-800 mb-2">Academic Focus</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Extra practice in Mathematics</li>
              <li>• Join study groups for weak subjects</li>
              <li>• Regular revision schedule</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Skill Development</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Continue excellence in Computer Science</li>
              <li>• Improve practical skills</li>
              <li>• Participate in competitions</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Personal Growth</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Time management workshops</li>
              <li>• Improve class participation</li>
              <li>• Set realistic academic goals</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Report Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>This report was generated on {new Date().toLocaleDateString()}</p>
        <p>For any queries, please contact the academic office</p>
      </div>
    </div>
  );
};

export default Report;
