import React from 'react';
import { BookOpen, FileSpreadsheet, Brain, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to EduHub Nigeria</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Your comprehensive platform for educational resources, lesson planning, and professional development
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<BookOpen className="h-8 w-8" />}
          title="Educational Resources"
          description="Access lesson plans, worksheets, and exam questions for all classes"
          link="/resources"
        />
        <FeatureCard
          icon={<FileSpreadsheet className="h-8 w-8" />}
          title="AI Lesson Planner"
          description="Create lesson plans and worksheets using AI assistance"
          link="/lesson-planner"
        />
        <FeatureCard
          icon={<Brain className="h-8 w-8" />}
          title="Professional Learning"
          description="Take courses and earn certifications"
          link="/learning"
        />
        <FeatureCard
          icon={<Users className="h-8 w-8" />}
          title="Teacher Community"
          description="Connect with other educators and share experiences"
          link="/community"
        />
      </section>

      <section className="bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Latest Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Mathematics - Primary 4",
            "English Language - JSS 2",
            "Basic Science - SSS 1"
          ].map((subject, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">{subject}</h3>
              <p className="text-gray-600 text-sm">Latest lesson plans and resources</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }) {
  return (
    <Link to={link} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}

export default Home;