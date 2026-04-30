import React from 'react';

/**
 * Footer component utilizing semantic HTML5 tags.
 * Includes security best practices for external anchors (rel="noreferrer").
 */
export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-20 glass bg-black/50 z-10 relative">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2 text-glow">Zaki Amin</h3>
          <p className="text-gray-400 font-mono text-sm">Data Analyst & Full-Stack Engineer</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="https://github.com/zakiaminn" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/zakiamin/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            LinkedIn
          </a>
          <a href="mailto:zakiaminn@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
      
      <div className="text-center py-4 border-t border-white/5 text-xs font-mono text-gray-600">
        &copy; {new Date().getFullYear()} Zaki Amin. All rights reserved. System executing normally.
      </div>
    </footer>
  );
}