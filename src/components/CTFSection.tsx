import React from 'react';
import { Flag, Trophy, FileText, Users, Target } from 'lucide-react';

const features = [
  {
    icon: Flag,
    title: "Multiple CTF Formats",
    description: "Participate in both jeopardy-style and attack-defense competitions"
  },
  {
    icon: Trophy,
    title: "Real-time Leaderboards",
    description: "Track your progress and compete with other security enthusiasts"
  },
  {
    icon: FileText,
    title: "Detailed Write-ups",
    description: "Learn from comprehensive solutions and explanations after completion"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Form teams and work together to solve complex challenges"
  },
  {
    icon: Target,
    title: "Custom Challenges",
    description: "Create and share your own challenges with the community"
  }
];

const CTFSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Capture The Flag Challenges
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Test your skills in real-world scenarios through our diverse range of CTF challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-colors">
                <div className="w-12 h-12 bg-cyan-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTFSection;