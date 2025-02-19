import React from 'react';
import { MessageSquare, Users, Bookmark, TrendingUp } from 'lucide-react';

function Community() {
  const discussions = [
    {
      title: "Best practices for teaching mathematics in primary school",
      author: "Sarah Johnson",
      replies: 23,
      category: "Teaching Methods"
    },
    {
      title: "How to handle classroom discipline effectively",
      author: "Michael Okonkwo",
      replies: 45,
      category: "Classroom Management"
    },
    {
      title: "Using technology in rural schools - challenges and solutions",
      author: "Aisha Mohammed",
      replies: 32,
      category: "EdTech"
    }
  ];

  return (
    <div className="space-y-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Teacher Community</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Connect with fellow educators, share experiences, and learn from each other
        </p>
      </header>

      <div className="grid md:grid-cols-4 gap-8">
        <div className="col-span-3">
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <div className="flex items-center gap-4 mb-6">
              <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Start Discussion
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                <TrendingUp className="h-5 w-5" />
                Latest
              </button>
            </div>

            <div className="space-y-6">
              {discussions.map((discussion, index) => (
                <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
                  <h3 className="text-lg font-semibold mb-2">
                    <a href="#" className="hover:text-indigo-600">
                      {discussion.title}
                    </a>
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>By {discussion.author}</span>
                    <span>•</span>
                    <span>{discussion.replies} replies</span>
                    <span>•</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {discussion.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Community Stats</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-indigo-600" />
                <div>
                  <div className="font-semibold">1,234</div>
                  <div className="text-sm text-gray-600">Members</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
                <div>
                  <div className="font-semibold">5,678</div>
                  <div className="text-sm text-gray-600">Discussions</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bookmark className="h-5 w-5 text-indigo-600" />
                <div>
                  <div className="font-semibold">892</div>
                  <div className="text-sm text-gray-600">Resources Shared</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {["Teaching Methods", "Classroom Management", "EdTech", "Assessment", "Special Education", "STEM"].map((tag) => (
                <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;