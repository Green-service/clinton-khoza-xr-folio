
import { ExtendedReality } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <a href="#home" className="flex items-center gap-2 group mb-6">
            <ExtendedReality className="w-8 h-8 text-xr-vivid-purple group-hover:text-xr-primary-purple transition-colors" />
            <span className="font-orbitron text-2xl font-bold text-gradient">CLINTON KHOZA</span>
          </a>
          
          <p className="font-inter text-white/60 max-w-md mb-8">
            Full-Stack Developer specializing in Angular, ASP.NET, and Extended Reality technologies. Building immersive digital experiences.
          </p>
          
          <div className="flex gap-8 mb-8">
            <a href="#about" className="text-white/70 hover:text-white transition-colors font-inter text-sm">About</a>
            <a href="#skills" className="text-white/70 hover:text-white transition-colors font-inter text-sm">Skills</a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors font-inter text-sm">Projects</a>
            <a href="#experience" className="text-white/70 hover:text-white transition-colors font-inter text-sm">Experience</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors font-inter text-sm">Contact</a>
          </div>
          
          <div className="h-px w-full max-w-xl bg-white/10 mb-6"></div>
          
          <p className="font-inter text-white/40 text-sm">
            © {currentYear} Clinton Khoza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
