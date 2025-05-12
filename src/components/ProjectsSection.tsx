
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Headset, Globe, Microchip, Monitor } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  category: 'web' | 'xr' | 'software' | 'game';
  image?: string;
  technologies: string[];
  link?: string;
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'xr', label: 'XR Projects' },
    { id: 'game', label: 'Games' },
    { id: 'software', label: 'Software' },
  ];
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'VR Training Simulation',
      description: 'An immersive VR training platform for industrial safety procedures with interactive elements.',
      category: 'xr',
      technologies: ['Unity', 'C#', 'VR Development', '3D Modeling'],
      link: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with secure payment processing and inventory management.',
      category: 'web',
      technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'TypeScript'],
      link: '#'
    },
    {
      id: 3,
      title: 'AR Product Visualizer',
      description: 'Augmented reality application allowing users to visualize products in their real environment.',
      category: 'xr',
      technologies: ['Unity', 'AR Foundation', 'C#', 'UI/UX Design'],
      link: '#'
    },
    {
      id: 4,
      title: 'Mobile RPG Game',
      description: 'Fantasy role-playing game with rich storyline and advanced character customization.',
      category: 'game',
      technologies: ['Unity', 'C#', 'Blender', 'Game Design'],
      link: '#'
    },
    {
      id: 5,
      title: 'Cybersecurity Dashboard',
      description: 'Real-time monitoring system for network security with threat detection algorithms.',
      category: 'software',
      technologies: ['React', 'Node.js', 'Python', 'Data Visualization'],
      link: '#'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills with interactive elements.',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js'],
      link: '#'
    }
  ];
  
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'web':
        return <Globe className="w-5 h-5" />;
      case 'xr':
        return <Headset className="w-5 h-5" />;
      case 'game':
        return <Monitor className="w-5 h-5" />;
      case 'software':
        return <Microchip className="w-5 h-5" />;
      default:
        return null;
    }
  };
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-xr-dark-charcoal relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
            <span className="font-inter text-sm uppercase tracking-wider text-xr-primary-purple">Portfolio</span>
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          <p className="mt-4 font-inter text-white/70 max-w-2xl mx-auto">
            Explore my latest work across web development, XR technologies, gaming, and software solutions.
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-xr-primary-purple to-xr-vivid-purple shadow-[0_0_10px_rgba(139,92,246,0.5)]'
                  : 'glass-panel hover:bg-white/10'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              {/* Project image placeholder with gradient background */}
              <div className="h-48 bg-gradient-to-br from-xr-dark-purple to-xr-secondary-purple flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-xr-vivid-purple/20 backdrop-blur-sm"></div>
                <div className="z-10 p-3 glass-panel rounded-full">
                  {getCategoryIcon(project.category)}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase tracking-wider font-medium px-3 py-1 rounded-full glass-panel">
                    {project.category === 'xr' ? 'XR' : 
                     project.category === 'web' ? 'Web' : 
                     project.category === 'game' ? 'Game' : 'Software'}
                  </span>
                </div>
                
                <h3 className="font-orbitron text-xl font-semibold mb-2 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                
                <p className="font-inter text-sm text-white/70 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded bg-white/5 text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded bg-white/5 text-white/50">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                {project.link && (
                  <a
                    href={project.link}
                    className="flex items-center gap-1 text-xr-primary-purple hover:text-xr-vivid-purple transition-colors text-sm font-medium mt-2 group"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
