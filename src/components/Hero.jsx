import React, { useState, useEffect } from 'react';

/**
 * Hero component featuring a state-driven typewriter effect.
 * Utilizes React hooks to manage side effects and local state updates.
 */
export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Zaki.";

  // Mount lifecycle: Handles the asynchronous text generation
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    
    // Clear interval on unmount to prevent state updates on destroyed components
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="min-h-screen flex flex-col justify-center items-start w-full max-w-6xl px-6">
      <div className="inline-block px-4 py-2 rounded-full glass text-cyan-400 font-mono text-sm tracking-widest mb-6 uppercase">
        Systems Online // Status: Optimal
      </div>
      
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-tight">
        <span className="block text-2xl md:text-4xl text-cyan-400 font-mono mb-4 h-10">
          {text}<span className="blinker">_</span>
        </span>
        Data Analyst. <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          Full-Stack Engineer.
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-10">
        I synthesize raw data into actionable insights and build robust software architectures. 
        Oh, and occasionally, I build tools that let users shatter the DOM.
      </p>
    </header>
  );
}