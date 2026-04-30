import React from 'react';

/**
 * Experience component rendering a chronological timeline.
 * Utilizes flexbox and dynamic class interpolation for alternating layout geometries.
 */
export default function Experience() {
  // Timeline data structure. Array of objects guarantees sequential rendering order.
  const timeline = [
    {
      year: "Present",
      role: "4th Year Computer Science Student",
      detail: "Specializing in Data Analytics and Full-Stack Engineering. Building highly optimized architectures and deep-diving into statistical algorithms."
    },
    {
      year: "2022 - 2023",
      role: "Software Developer Intern",
      detail: "Developed high-throughput applications, wrote automated test suites, and streamlined data visualization pipelines."
    },
    {
      year: "2021",
      role: "Freelance & Open Source",
      detail: "Began crafting npm packages, experimenting with complex DOM manipulation, and contributing to algorithm visualizers."
    }
  ];

  return (
    <section id="experience" className="w-full max-w-6xl px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center text-white">
        <span className="w-12 h-1 bg-purple-500 mr-4 rounded"></span>
        Experience & Education
      </h2>
      
      <div className="relative pl-8 md:pl-0">
        {/* Animated Data Stream Line */}
        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-1 data-stream transform -translate-x-1/2 rounded-full"></div>
        
        <div className="space-y-12">
          {timeline.map((item, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block absolute left-[50%] w-4 h-4 bg-[#050505] border-2 border-cyan-400 rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,240,255,0.8)]"></div>
              <div className={`w-full md:w-5/12 glass p-6 rounded-2xl glass-hover transition-all duration-300 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <span className="text-cyan-400 font-mono text-sm mb-2 block">{item.year}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.role}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}