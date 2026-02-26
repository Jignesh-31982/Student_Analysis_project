import React, { useState } from 'react';
import { UserPlus, Save, RotateCcw } from 'lucide-react';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    rollNumber: '',
    class: '',
    section: '',
    subject: '',
    marks: '',
    attendance: '',
    examType: 'midterm'
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.rollNumber.trim()) newErrors.rollNumber = 'Roll number is required';
    if (!formData.class) newErrors.class = 'Class is required';
    if (!formData.section) newErrors.section = 'Section is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.marks || formData.marks < 0 || formData.marks > 100) {
      newErrors.marks = 'Marks must be between 0 and 100';
    }
    if (!formData.attendance || formData.attendance < 0 || formData.attendance > 100) {
      newErrors.attendance = 'Attendance must be between 0 and 100';
    }
    
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      // Show success message
      setShowSuccess(true);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        handleReset();
        setShowSuccess(false);
      }, 2000);
    } else {
      setErrors(formErrors);
    }
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      rollNumber: '',
      class: '',
      section: '',
      subject: '',
      marks: '',
      attendance: '',
      examType: 'midterm'
    });
    setErrors({});
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Add Student</h1>
        <p className="text-gray-600 mt-2">Enter student information and academic details</p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <p className="font-medium">✓ Student information saved successfully!</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Details Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">👤</span> Basic Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Student Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.studentName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter student name"
                />
                {errors.studentName && (
                  <p className="text-red-500 text-xs mt-1">{errors.studentName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Roll Number *
                </label>
                <input
                  type="text"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.rollNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter roll number"
                />
                {errors.rollNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.rollNumber}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Class *
                </label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.class ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Class</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
                {errors.class && (
                  <p className="text-red-500 text-xs mt-1">{errors.class}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Section *
                </label>
                <select
                  name="section"
                  value={formData.section}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.section ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Section</option>
                  <option value="A">Section A</option>
                  <option value="B">Section B</option>
                  <option value="C">Section C</option>
                  <option value="D">Section D</option>
                </select>
                {errors.section && (
                  <p className="text-red-500 text-xs mt-1">{errors.section}</p>
                )}
              </div>
            </div>
          </div>

          {/* Academic Details Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">📚</span> Academic Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Subject</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="History">History</option>
                  <option value="Geography">Geography</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Marks *
                </label>
                <input
                  type="number"
                  name="marks"
                  value={formData.marks}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.marks ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter marks (0-100)"
                  min="0"
                  max="100"
                />
                {errors.marks && (
                  <p className="text-red-500 text-xs mt-1">{errors.marks}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Attendance % *
                </label>
                <input
                  type="number"
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.attendance ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter attendance %"
                  min="0"
                  max="100"
                />
                {errors.attendance && (
                  <p className="text-red-500 text-xs mt-1">{errors.attendance}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Exam Type *
                </label>
                <select
                  name="examType"
                  value={formData.examType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="midterm">Midterm</option>
                  <option value="final">Final</option>
                  <option value="quiz">Quiz</option>
                  <option value="assignment">Assignment</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </button>
            <button
              type="submit"
              className="flex items-center px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Save className="h-4 w-4 mr-2" />
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
