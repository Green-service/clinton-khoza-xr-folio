
import { useState, useEffect } from 'react';
import { ExtendedReality, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'py-2 bg-black/60 backdrop-blur-md border-b border-white/10'
          : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <ExtendedReality className="w-8 h-8 text-xr-vivid-purple group-hover:text-xr-primary-purple transition-colors" />
          <span className="font-orbitron text-xl font-bold text-gradient">CLINTON KHOZA</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-inter text-sm text-white/80 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-xr-vivid-purple after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-4 py-2 bg-gradient-to-r from-xr-primary-purple to-xr-vivid-purple rounded-md font-medium transition-all hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] text-sm"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-40 top-16 flex flex-col items-center justify-center gap-8 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-orbitron text-xl text-white hover:text-xr-primary-purple transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
