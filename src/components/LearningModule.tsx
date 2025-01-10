import React from 'react';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';
import type { Module } from '../types';

const LearningModule = ({ module }: { module: Module }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
          <p className="mt-2 text-gray-600">{module.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          module.level === 'beginner' ? 'bg-green-100 text-green-800' :
          module.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {module.level}
        </span>
      </div>
      
      <div className="mt-4 flex items-center text-sm text-gray-500">
        <Clock className="h-4 w-4 mr-1" />
        <span>{module.duration}</span>
        <BookOpen className="h-4 w-4 ml-4 mr-1" />
        <span>{module.topics.length} topics</span>
      </div>
      
      <button className="mt-4 w-full flex items-center justify-center space-x-2 bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition-colors">
        <span>Start Learning</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default LearningModule;