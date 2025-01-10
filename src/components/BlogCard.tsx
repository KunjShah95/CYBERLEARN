import React from 'react';
import { Clock, User } from 'lucide-react';
import type { BlogPost } from '../types';

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
          {post.category}
        </span>
        
        <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
        <p className="mt-2 text-gray-600">{post.excerpt}</p>
        
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </span>
          </div>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;