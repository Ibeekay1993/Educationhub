import React from 'react';
import { GraduationCap } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6" />
              <span className="font-bold text-lg">EduHub Nigeria</span>
            </div>
            <p className="text-gray-400">
              Empowering educators with resources and tools for better teaching and learning.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/resources" className="hover:text-white">Resources</a></li>
              <li><a href="/lesson-planner" className="hover:text-white">Lesson Planner</a></li>
              <li><a href="/learning" className="hover:text-white">Learning</a></li>
              <li><a href="/community" className="hover:text-white">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Primary School</a></li>
              <li><a href="#" className="hover:text-white">Junior Secondary</a></li>
              <li><a href="#" className="hover:text-white">Senior Secondary</a></li>
              <li><a href="#" className="hover:text-white">Teacher Training</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>support@eduhub.ng</li>
              <li>+234 800 EDU HUB</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EduHub Nigeria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;