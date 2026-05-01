import React, { useState } from 'react';
import domolitionGif from '../assets/DOMolitionDemo.gif';
import aegisGif from '../assets/AegisGridDemo.gif';
import frankenImg from '../assets/ssdemo.png';

/**
 * Encapsulated Project Card component to maintain localized flip-state per card.
 * Utilizes CSS 3D transforms for hardware-accelerated card flipping.
 */
const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="group perspective-1000 h-full">
      {/* 3D Wrapper - Handles the flip rotation and the hover lift */}
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:-translate-y-2 ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Face (Original Project Details) */}
        <div className={`backface-hidden w-full h-full glass p-8 rounded-2xl flex flex-col glass-hover ${project.shatter ? 'shatter-fx' : ''}`}>
          <div className={`w-full h-2 rounded-t-full bg-gradient-to-r ${project.color} absolute top-0 left-0 opacity-70 group-hover:opacity-100 transition-opacity`}></div>
          <h3 className="text-2xl font-bold text-white mb-2 mt-2">{project.title}</h3>
          <p className="text-sm font-mono text-cyan-400 mb-6">{project.tagline}</p>
          <p className="text-gray-300 flex-grow mb-8 text-sm leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {project.tech.map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">{t}</span>
            ))}
          </div>
          <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
            <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-mono text-gray-400 hover:text-cyan-400 transition-colors">{'<Source />'}</a>
            <button onClick={() => setIsFlipped(true)} className="text-sm font-bold text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-cyan-500 hover:text-black transition-colors">Live Demo</button>
          </div>
        </div>

        {/* Back Face (Demo GIF View) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 glass p-8 rounded-2xl flex flex-col items-center justify-center">
          <div className={`w-full h-2 rounded-t-full bg-gradient-to-r ${project.color} absolute top-0 left-0 opacity-100`}></div>
          <h3 className="text-xl font-bold text-white mb-4 text-center">{project.title} Demo</h3>
          
          <div className="w-full flex-grow bg-black/50 rounded-lg border border-white/10 mb-6 overflow-hidden flex items-center justify-center relative">
            <img src={project.demoGif} alt={`${project.title} Demo`} className="absolute w-full h-full object-cover" />
          </div>

          <button onClick={() => setIsFlipped(false)} className="text-sm font-bold text-black bg-cyan-500 px-6 py-2 rounded-lg hover:bg-cyan-400 transition-colors w-full">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Projects component iterating over portfolio items.
 */
export default function Projects() {
  const projects = [
    {
      title: "DOMolition",
      tagline: "Rage-Quit Shatter Engine",
      description: "An interactive NPM package that allows users to obliterate the UI when frustration peaks. Demonstrates advanced DOM manipulation, complex event handling, and CSS 3D physics disguised as pure chaos.",
      tech: ["JavaScript", "DOM API", "CSS Physics", "NPM"],
      color: "from-red-500 to-orange-600",
      shatter: true,
      github: "https://github.com/zakiaminn/DOMolition",
      demo: "#demo-placeholder",
      demoGif: "/DOMolitionDemo.gif" 
    },
    {
      title: "AegisGrid",
      tagline: "A* Pathfinding Engine",
      description: "A strategic grid-based application powered by the A* pathfinding algorithm. Designed to challenge users with complex environmental obstacles, it demonstrates high-level logic implementation and efficient real-time state management.",
      tech: ["JavaScript", "Algorithms", "HTML5 Canvas", "Game Dev"],
      color: "from-cyan-400 to-blue-600",
      shatter: false,
      github: "https://github.com/zakiaminn/AegisGrid",
      demo: "#demo-placeholder",
      demoGif: "/AegisGridDemo.gif" 
    },
    {
      title: "FrankenSorter",
      tagline: "AI-Powered Directory Manager",
      description: "An intelligent organization system that evolved from a Python-based script into a robust local AI application. Utilizes Ollama to automate complex file routing logic, providing a streamlined GUI for high-volume tasks.",
      tech: ["Python", "Ollama AI", "Automation", "Software Design"],
      color: "from-purple-500 to-pink-600",
      shatter: false,
      github: "https://github.com/zakiaminn/FrankenSorter",
      demo: "#demo-placeholder",
      demoGif: "/ssdemo.png" 
    }
  ];

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center text-white">
        <span className="w-12 h-1 bg-cyan-500 mr-4 rounded"></span>
        Featured Projects
      </h2>
      
      {/* 3-column grid for the perfect trio of projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}