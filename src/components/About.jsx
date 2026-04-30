import React from 'react';

/**
 * About component displaying the technical stack.
 * Renders an array of strings into styled glassmorphic badges.
 */
export default function About() {
  // Static array extracted outside the return statement to avoid unnecessary re-allocations during render cycles.
  const skills = [
    "Data Analytics", "React", "JavaScript", "TypeScript", 
    "C", "C++", "C#", ".NET", "Xcode", "Android Studio", "Java"
  ];

  return (
    <section id="about" className="w-full max-w-6xl px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center text-white">
        <span className="w-12 h-1 bg-cyan-500 mr-4 rounded"></span>
        Technical Arsenal
      </h2>
      <div className="flex flex-wrap gap-4">
        {/* Maps over the skills array. Keys are explicitly provided to optimize React's Fiber reconciliation algorithm. */}
        {skills.map(skill => (
          <span key={skill} className="glass px-6 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white glass-hover transition-all cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}