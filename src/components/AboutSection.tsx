import { Code, Monitor, GitBranch, Database } from 'lucide-react';
import SkillsTimelineDemo from './SkillsTimeline';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-xr-dark-charcoal relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
              <span className="font-inter text-sm uppercase tracking-wider text-xr-primary-purple">About Me</span>
            </div>
            
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
              Certified <span className="text-gradient">Full-Stack Developer</span> & Technology Specialist
            </h2>
            
            <div className="space-y-4 font-inter text-white/80">
              <p>
                I'm a versatile technology professional specializing in full-stack web development, business analysis, and data science. With expertise in React, Next.js, Node.js, Angular, and ASP.NET, I create robust and scalable digital solutions that drive business value.
              </p>
              <p>
                My comprehensive skill set spans web development, cybersecurity, AI/ML, and robotics. I combine technical expertise with business acumen to deliver secure, data-driven applications that solve complex problems and drive innovation.
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            {/* Profile image with futuristic frame */}
            <div className="relative mx-auto md:ml-0 w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-xr-primary-purple via-xr-bright-blue to-xr-vivid-purple opacity-70 blur-xl animate-pulse-slow"></div>
              <div className="relative w-full h-full rounded-xl glass-panel p-1 z-10">
                <div className="w-full h-full bg-xr-dark-purple/50 rounded-lg flex items-center justify-center overflow-hidden">
                  {/* Profile image */}
                  <img 
                    src="/pic.jpg" 
                    alt="Clinton Khoza" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative corner marks */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-xr-primary-purple"></div>
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-xr-primary-purple"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-xr-primary-purple"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-xr-primary-purple"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
