import React from 'react';
import { Wrench, Terminal, Book, Shield, HelpCircle } from 'lucide-react';

const features = [
  {
    icon: Terminal,
    title: "Interactive Guides",
    description: "Step-by-step tutorials for popular security tools like Wireshark, Metasploit, and Burp Suite"
  },
  {
    icon: Shield,
    title: "Virtual Labs",
    description: "Practice in safe, isolated environments with pre-configured tools and targets"
  },
  {
    icon: Book,
    title: "Documentation",
    description: "Comprehensive documentation covering tool usage, best practices, and common scenarios"
  },
  {
    icon: Wrench,
    title: "Tool Categories",
    description: "Organized sections for penetration testing, forensics, and network analysis tools"
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions to help you overcome technical challenges"
  }
];

const ToolsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Security Tools Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master essential cybersecurity tools through hands-on training and practical exercises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group p-6 border border-gray-200 rounded-lg hover:border-cyan-500 transition-colors">
                <div className="w-12 h-12 bg-gray-100 group-hover:bg-cyan-100 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <Icon className="h-6 w-6 text-gray-600 group-hover:text-cyan-600" />
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

export default ToolsSection;