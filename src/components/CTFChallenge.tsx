import React from 'react';
import { Flag, Award, Lock } from 'lucide-react';
import type { Challenge } from '../types';

const CTFChallenge = ({ challenge }: { challenge: Challenge }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <Flag className="h-5 w-5 text-purple-500 mr-2" />
          <h3 className="text-lg font-semibold">{challenge.title}</h3>
        </div>
        <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
          {challenge.points} pts
        </span>
      </div>
      
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
        <span className="flex items-center">
          <Award className="h-4 w-4 mr-1" />
          {challenge.difficulty}
        </span>
        <span>{challenge.category}</span>
      </div>
      
      <button className={`mt-4 w-full flex items-center justify-center space-x-2 py-2 rounded-md transition-colors ${
        challenge.solved
          ? 'bg-green-500 text-white'
          : 'bg-purple-600 text-white hover:bg-purple-700'
      }`}>
        {challenge.solved ? (
          <>
            <span>Solved</span>
            <Award className="h-4 w-4" />
          </>
        ) : (
          <>
            <span>Start Challenge</span>
            <Lock className="h-4 w-4" />
          </>
        )}
      </button>
    </div>
  );
};

export default CTFChallenge;