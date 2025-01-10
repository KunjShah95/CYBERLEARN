import React from 'react';
import Navigation from './components/Navigation';
import LearningModule from './components/LearningModule';
import CTFChallenge from './components/CTFChallenge';
import ToolCard from './components/ToolCard';
import BlogCard from './components/BlogCard';
import LearningSection from './components/LearningSection';
import CTFSection from './components/CTFSection';
import ToolsSection from './components/ToolsSection';
import { Shield } from 'lucide-react';

function App() {
  const featuredModule = {
    id: '1',
    title: 'Introduction to Cybersecurity',
    level: 'beginner',
    description: 'Learn the fundamentals of cybersecurity, including basic concepts, terminology, and best practices.',
    duration: '2 hours',
    topics: ['Security Basics', 'Threat Models', 'Security Controls']
  };

  const featuredChallenge = {
    id: '1',
    title: 'Web Exploitation Basics',
    category: 'Web Security',
    difficulty: 'Beginner',
    points: 100,
    solved: false
  };

  const featuredTool = {
    id: '1',
    name: 'Wireshark',
    category: 'Network Analysis',
    description: 'Learn how to analyze network traffic with the most popular packet analyzer.',
    difficulty: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000'
  };

  const featuredPost = {
    id: '1',
    title: 'Understanding Zero-Day Vulnerabilities',
    author: 'Sarah Chen',
    date: 'Mar 12, 2024',
    category: 'Security Research',
    excerpt: 'An in-depth look at zero-day vulnerabilities and their impact on cybersecurity.',
    readTime: '5 min read'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-6">
                Master Cybersecurity Through Interactive Learning
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Join our community of security professionals and learn through hands-on
                experience with real-world scenarios and challenges.
              </p>
              <button className="bg-cyan-600 hover:bg-cyan-700 px-8 py-3 rounded-md text-lg font-semibold transition-colors">
                Start Learning Now
              </button>
            </div>
            <Shield className="h-64 w-64 text-cyan-500 hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Featured Learning Path</h2>
            <LearningModule module={featuredModule} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Latest Challenge</h2>
            <CTFChallenge challenge={featuredChallenge} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Featured Tool</h2>
            <ToolCard tool={featuredTool} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Latest Blog Post</h2>
            <BlogCard post={featuredPost} />
          </div>
        </div>
      </div>

      {/* Detailed Sections */}
      <LearningSection />
      <CTFSection />
      <ToolsSection />
    </div>
  );
}

export default App;