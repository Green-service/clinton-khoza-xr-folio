import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BrainCircuit, Globe, Microchip, Headset, GitBranch, Cloud, Database, Shield, BarChart2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CV from './CV';

const HeroSection = () => {
  const [showCV, setShowCV] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    
    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        
        const colors = [
          'rgba(155, 135, 245, ',
          'rgba(30, 174, 219, ',
          'rgba(139, 92, 246, ',
        ];
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Boundary check
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        if (!ctx) return;
        
        const opacity = Math.random() * 0.5 + 0.2;
        ctx.fillStyle = this.color + opacity + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    const particles: Particle[] = [];
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Connect particles that are close to each other
      ctx.strokeStyle = 'rgba(155, 135, 245, 0.05)';
      ctx.lineWidth = 0.3;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        
        particles[i].update();
        particles[i].draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background particles */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-20 hero-gradient" />

      {/* Grid background */}
      <div className="absolute inset-0 -z-30 bg-grid" />
      
      {/* Hero content */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-8 mt-32 z-10">
        <div className="flex items-center gap-2 animate-fade-in">
          <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
          <span className="font-inter text-sm uppercase tracking-wider text-xr-primary-purple">Full-Stack Developer</span>
          <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
        </div>
        
        <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Building <span className="text-gradient glow-text">Modern Web Applications</span> & <span className="text-gradient glow-text">Digital Solutions</span>
        </h1>
        
        <p className="font-inter text-lg text-white/70 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Specializing in full-stack development with React, Next.js, Node.js, Angular, ASP.NET, PostgreSQL, and Microsoft SQL Server. Expert in cybersecurity, business analysis, and data science to deliver secure, data-driven, and scalable digital solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            variant="default" 
            size="sm"
            className="bg-xr-primary-purple hover:bg-xr-primary-purple/90"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-xr-primary-purple text-xr-primary-purple hover:bg-xr-primary-purple/10"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-xr-primary-purple text-xr-primary-purple hover:bg-xr-primary-purple/10"
            onClick={() => setShowCV(true)}
          >
            <Download className="w-4 h-4 mr-2" />
            View CV Details
          </Button>
        </div>
        
        {/* Tech icons */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 glass-panel rounded-full animate-pulse-slow">
              <Globe className="text-xr-bright-blue w-6 h-6" />
            </div>
            <span className="text-xs text-white/60 font-inter">Web Dev</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 glass-panel rounded-full animate-pulse-slow" style={{ animationDelay: '0.6s' }}>
              <Headset className="text-xr-primary-purple w-6 h-6" />
            </div>
            <span className="text-xs text-white/60 font-inter">XR Tech</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 glass-panel rounded-full animate-pulse-slow" style={{ animationDelay: '0.8s' }}>
              <Microchip className="text-xr-magenta w-6 h-6" />
            </div>
            <span className="text-xs text-white/60 font-inter">Software</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 glass-panel rounded-full animate-pulse-slow" style={{ animationDelay: '1.0s' }}>
              <BrainCircuit className="text-xr-ocean-blue w-6 h-6" />
            </div>
            <span className="text-xs text-white/60 font-inter">AI/ML</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="p-3 glass-panel rounded-full animate-pulse-slow" style={{ animationDelay: '1.2s' }}>
              <GitBranch className="text-xr-bright-blue w-6 h-6" />
            </div>
            <span className="text-xs text-white/60 font-inter">Git</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="p-3 glass-panel rounded-full animate-pulse-slow" style={{ animationDelay: '1.4s' }}>
              <Cloud className="text-xr-primary-purple w-6 h-6" />
            </div>
            <span className="text-xs text-white/60 font-inter">Cloud</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="p-3 glass-panel rounded-full animate-pulse-slow" style={{ animationDelay: '1.6s' }}>
              <Database className="text-xr-magenta w-6 h-6" />
            </div>
            <span className="text-xs text-white/60 font-inter">Database</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="p-3 glass-panel rounded-full animate-pulse-slow" style={{ animationDelay: '1.8s' }}>
              <Shield className="text-xr-ocean-blue w-6 h-6" />
            </div>
            <span className="text-xs text-white/60 font-inter">Security</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="p-3 glass-panel rounded-full animate-pulse-slow" style={{ animationDelay: '2.0s' }}>
              <BarChart2 className="text-xr-bright-blue w-6 h-6" />
            </div>
            <span className="text-xs text-white/60 font-inter">Data Science</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-1">
          <div className="w-1 h-1 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>

      {showCV && <CV onClose={() => setShowCV(false)} />}
    </section>
  );
};

export default HeroSection;
