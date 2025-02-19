import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Users, FileSpreadsheet, Brain } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="font-bold text-xl">EduHub Nigeria</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/resources" className="flex items-center space-x-1 hover:text-indigo-200">
              <BookOpen className="h-5 w-5" />
              <span>Resources</span>
            </Link>
            <Link to="/lesson-planner" className="flex items-center space-x-1 hover:text-indigo-200">
              <FileSpreadsheet className="h-5 w-5" />
              <span>Lesson Planner</span>
            </Link>
            <Link to="/learning" className="flex items-center space-x-1 hover:text-indigo-200">
              <Brain className="h-5 w-5" />
              <span>Learning</span>
            </Link>
            <Link to="/community" className="flex items-center space-x-1 hover:text-indigo-200">
              <Users className="h-5 w-5" />
              <span>Community</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar