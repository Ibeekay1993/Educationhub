import React from 'react';
import { Wand2, FileDown, Save } from 'lucide-react';

function LessonPlanner() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">AI Lesson Planner</h1>
        <p className="text-gray-600">
          Create professional lesson plans, worksheets, and exam questions with AI assistance
        </p>
      </header>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <select className="p-2 border rounded-lg">
            <option>Select Class Level</option>
            <option>Primary 1-3</option>
            <option>Primary 4-6</option>
            <option>JSS 1-3</option>
            <option>SSS 1-3</option>
          </select>

          <select className="p-2 border rounded-lg">
            <option>Select Subject</option>
            <option>Mathematics</option>
            <option>English</option>
            <option>Science</option>
          </select>

          <select className="p-2 border rounded-lg">
            <option>Select Topic</option>
            <option>Addition & Subtraction</option>
            <option>Multiplication</option>
            <option>Division</option>
          </select>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Learning Objectives
            </label>
            <textarea
              className="w-full p-3 border rounded-lg"
              rows={3}
              placeholder="Enter the learning objectives for this lesson..."
            />
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              <Wand2 className="h-5 w-5" />
              Generate Plan
            </button>
            <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
              <FileDown className="h-5 w-5" />
              Download
            </button>
            <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
              <Save className="h-5 w-5" />
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Generate Worksheet</h2>
          <p className="text-gray-600 mb-4">
            Create custom worksheets with practice problems and activities
          </p>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            <Wand2 className="h-5 w-5" />
            Create Worksheet
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Generate Exam Questions</h2>
          <p className="text-gray-600 mb-4">
            Create assessment questions with varying difficulty levels
          </p>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            <Wand2 className="h-5 w-5" />
            Create Questions
          </button>
        </div>
      </div>
    </div>
  );
}

export default LessonPlanner;