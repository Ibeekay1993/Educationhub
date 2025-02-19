import React from 'react';
import { BookOpen, FileText, HelpCircle } from 'lucide-react';

function Resources() {
  const categories = [
    {
      level: 'Primary School',
      subjects: ['Mathematics', 'English', 'Basic Science', 'Social Studies'],
    },
    {
      level: 'Junior Secondary',
      subjects: ['Mathematics', 'English', 'Basic Science', 'Social Studies', 'Business Studies'],
    },
    {
      level: 'Senior Secondary',
      subjects: ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology', 'Economics'],
    },
  ];

  return (
    <div className="space-y-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Educational Resources</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Access high-quality lesson plans, worksheets, and exam questions for all class levels
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <ResourceCard
          icon={<BookOpen className="h-6 w-6" />}
          title="Lesson Plans"
          description="Comprehensive lesson plans aligned with the Nigerian curriculum"
        />
        <ResourceCard
          icon={<FileText className="h-6 w-6" />}
          title="Worksheets"
          description="Printable worksheets and activities for classroom use"
        />
        <ResourceCard
          icon={<HelpCircle className="h-6 w-6" />}
          title="Exam Questions"
          description="Past questions and practice tests for all subjects"
        />
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.level} className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">{category.level}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.subjects.map((subject) => (
                <button
                  key={subject}
                  className="p-4 text-left border rounded-lg hover:bg-gray-50 transition"
                >
                  <h3 className="font-medium mb-1">{subject}</h3>
                  <p className="text-sm text-gray-600">View all resources</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResourceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Resources;