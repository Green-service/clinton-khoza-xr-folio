
import { Code, Monitor, GitBranch, Database } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-xr-dark-charcoal relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            {/* Profile image with futuristic frame */}
            <div className="relative mx-auto md:ml-0 w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-xr-primary-purple via-xr-bright-blue to-xr-vivid-purple opacity-70 blur-xl animate-pulse-slow"></div>
              <div className="relative w-full h-full rounded-xl glass-panel p-1 z-10">
                <div className="w-full h-full bg-xr-dark-purple/50 rounded-lg flex items-center justify-center overflow-hidden">
                  {/* Avatar with initials as placeholder (replace with actual image if available) */}
                  <div className="text-5xl font-orbitron text-gradient">CK</div>
                </div>
                
                {/* Decorative corner marks */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-xr-primary-purple"></div>
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-xr-primary-purple"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-xr-primary-purple"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-xr-primary-purple"></div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
              <span className="font-inter text-sm uppercase tracking-wider text-xr-primary-purple">About Me</span>
            </div>
            
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
              Certified <span className="text-gradient">Full-Stack Developer</span> & XR Specialist
            </h2>
            
            <div className="space-y-4 font-inter text-white/80">
              <p>
                I'm a tech enthusiast specializing in full-stack development with Angular, ASP.NET, and Extended Reality technologies. With a background in software development, game design, and AI/ML integration, I create immersive and intelligent digital solutions.
              </p>
              <p>
                My journey in information technology has equipped me with a diverse skill set spanning web development, 3D modeling, and cybersecurity. I'm passionate about combining technical expertise with creative problem-solving to build applications that push boundaries.
              </p>
            </div>
            
            {/* Key areas */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-panel p-4 rounded-lg">
                <Code className="text-xr-ocean-blue mb-2" />
                <h3 className="font-orbitron text-sm font-semibold">Web Development</h3>
                <p className="text-xs text-white/60 mt-1">Angular, React, ASP.NET</p>
              </div>
              
              <div className="glass-panel p-4 rounded-lg">
                <Monitor className="text-xr-magenta mb-2" />
                <h3 className="font-orbitron text-sm font-semibold">XR Technologies</h3>
                <p className="text-xs text-white/60 mt-1">VR/AR Development, Unity</p>
              </div>
              
              <div className="glass-panel p-4 rounded-lg">
                <GitBranch className="text-xr-primary-purple mb-2" />
                <h3 className="font-orbitron text-sm font-semibold">Software Dev</h3>
                <p className="text-xs text-white/60 mt-1">C#, C++, Java, Python</p>
              </div>
              
              <div className="glass-panel p-4 rounded-lg">
                <Database className="text-xr-vivid-purple mb-2" />
                <h3 className="font-orbitron text-sm font-semibold">Database/AI</h3>
                <p className="text-xs text-white/60 mt-1">SQL, AI/ML Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
