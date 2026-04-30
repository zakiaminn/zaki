import React, { useEffect, useRef } from 'react';
import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  // useRef hook to maintain a mutable reference to the canvas DOM element 
  // without triggering expensive re-renders during the animation loop.
  const canvasRef = useRef(null);

  // Component mount lifecycle: Initializes a high-performance interactive particle physics engine 
  // using the HTML5 Canvas API to simulate a dynamic data network.
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray = [];
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Mouse coordinate state vector and interaction radius.
    const mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Particle entity class encapsulating position, velocity vectors, and mass-density.
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.density = (Math.random() * 30) + 1;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
      }

      draw() {
        ctx.fillStyle = 'rgba(0, 240, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

        // Mouse repulsion physics calculation using Euclidean distance
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          // Apply inverse-square-like repulsion force modulated by particle density
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;
          
          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }

    function init() {
      particlesArray = [];
      // Dynamically scale particle count based on screen area to maintain performance
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    // Time complexity: O(N^2) where N is the number of particles.
    // Draws edges between adjacent nodes to form a dynamic network graph.
    function connect() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = dx * dx + dy * dy;
          
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            let opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Recursive animation loop synced to the display refresh rate.
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    // Cleanup function to prevent memory leaks and dangling event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500 selection:text-black">
      {/* Hardware-accelerated Canvas Background Layer */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-auto z-0 opacity-40"
      />

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}