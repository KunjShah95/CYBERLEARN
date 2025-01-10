import React from 'react';
import { Wrench, ExternalLink } from 'lucide-react';
import type { Tool } from '../types';

const ToolCard = ({ tool }: { tool: Tool }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={tool.imageUrl}
        alt={tool.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{tool.name}</h3>
          <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
            {tool.category}
          </span>
        </div>
        
        <p className="mt-2 text-gray-600">{tool.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">{tool.difficulty}</span>
          <button className="flex items-center space-x-2 text-cyan-600 hover:text-cyan-700">
            <span>Learn More</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;