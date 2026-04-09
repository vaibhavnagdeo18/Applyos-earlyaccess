import React from 'react';
import { Bot } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-gray-500" />
          <span className="font-semibold text-gray-400 tracking-tight">ApplyOS</span>
        </div>
        
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} ApplyOS. All rights reserved.
        </div>

        <div className="flex gap-4">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            Github
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
