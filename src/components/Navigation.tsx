import React from 'react';
import { Shield, Flag, Wrench, BookOpen, Users } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-cyan-500" />
              <span className="ml-2 text-xl font-bold">CyberEdu</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <NavLink icon={BookOpen} text="Learning" />
              <NavLink icon={Flag} text="CTF" />
              <NavLink icon={Wrench} text="Tools" />
              <NavLink icon={Users} text="Community" />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <a href="#" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
    <Icon className="h-5 w-5" />
    <span>{text}</span>
  </a>
);

export default Navigation;