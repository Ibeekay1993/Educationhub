import React from 'react';
import { GraduationCap, Clock, Award } from 'lucide-react';

function Learning() {
  const courses = [
    {
      title: "Effective Teaching Methods",
      duration: "4 weeks",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Classroom Management",
      duration: "3 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Digital Teaching Tools",
      duration: "2 weeks",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="space-y-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Professional Learning</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enhance your teaching skills with our certified courses and professional development programs
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="h-4 w-4" />
                  {course.level}
                </div>
              </div>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl">
        <div className="flex items-center gap-4 mb-6">
          <Award className="h-8 w-8" />
          <h2 className="text-2xl font-bold">Get Certified</h2>
        </div>
        <p className="mb-6">
          Earn professional certifications recognized by educational institutions across Nigeria
        </p>
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-indigo-50">
          View Certifications
        </button>
      </div>
    </div>
  );
}

export default Learning;