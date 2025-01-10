import React from 'react';
import { BookOpen, Video, Beaker, RefreshCw, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Structured Courses",
    description: "Comprehensive courses covering network security, cryptography, web security, and more"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Expert-led video demonstrations of security concepts and practical applications"
  },
  {
    icon: Beaker,
    title: "Hands-on Labs",
    description: "Practice in secure, isolated environments with real-world security tools"
  },
  {
    icon: RefreshCw,
    title: "Weekly Updates",
    description: "Stay current with new content on emerging threats and countermeasures"
  },
  {
    icon: GraduationCap,
    title: "Progressive Learning",
    description: "Advance from beginner to expert with structured learning paths"
  }
];

const LearningSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Learning Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master cybersecurity through our structured learning paths, hands-on labs, and expert-led courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;