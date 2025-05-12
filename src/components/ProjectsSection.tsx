import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Headset, Globe, Microchip, Monitor, RotateCw } from 'lucide-react';
import { ThreeDPhotoCarousel } from '@/components/ui/3d-carousel';
import { motion } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  category: 'web' | 'xr' | 'software' | 'game';
  image?: string;
  technologies: string[];
  link?: string;
  longDescription: string;
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
      title: 'GreenFina AI',
      description: 'An AI-powered loan management system for efficient financial operations and risk assessment.',
      category: 'software',
      technologies: ['React', 'Node.js', 'Python', 'AI/ML', 'MongoDB'],
      link: 'https://greenfina.netlify.app',
      longDescription: 'GreenFina AI is an advanced loan management system that leverages artificial intelligence to streamline financial operations. The system uses machine learning algorithms to assess loan applications, predict risk factors, and automate approval processes. Built with a modern tech stack including React for the frontend, Node.js for the backend, and MongoDB for data storage, it provides a seamless experience for both administrators and users.'
    },
    {
      id: 2,
      title: 'Doctor Queue Management',
      description: 'Smart ticketing system for medical facilities to manage patient queues efficiently.',
      category: 'software',
      technologies: ['React', 'Node.js', 'Python', 'Data Visualization'],
      link: 'https://softelsie.co.za',
      longDescription: 'A comprehensive queue management system designed specifically for medical facilities. The system helps doctors and staff manage patient appointments, reduce wait times, and improve overall clinic efficiency. Features include real-time queue updates, appointment scheduling, and analytics dashboard for performance monitoring.'
    },
    {
      id: 3,
      title: 'Smart Car Robot',
      description: 'Autonomous vehicle project demonstrating advanced robotics and AI integration.',
      category: 'xr',
      technologies: ['Arduino', 'C++', 'Robotics', 'AI'],
      link: 'https://www.tiktok.com/@clintonkhoza/video/7321753193967373573',
      longDescription: 'An innovative autonomous vehicle project that combines robotics, artificial intelligence, and sensor technology. The smart car robot can navigate complex environments, avoid obstacles, and make real-time decisions using advanced algorithms and sensor fusion techniques.'
    },
    {
      id: 4,
      title: 'Smart Elevator System',
      description: 'Intelligent elevator control system with advanced scheduling algorithms.',
      category: 'software',
      technologies: ['C++', 'Arduino', 'Control Systems'],
      link: 'https://www.tiktok.com/@clintonkhoza/video/7269766276354968838',
      longDescription: 'A sophisticated elevator control system that optimizes passenger flow and reduces wait times. The system uses advanced algorithms to predict traffic patterns and efficiently manage multiple elevator cars. Features include smart scheduling, energy optimization, and real-time monitoring capabilities.'
    },
    {
      id: 5,
      title: 'All Things Ads',
      description: 'Digital advertising platform connecting businesses with potential customers.',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Payment Integration'],
      link: 'https://testfrontend-si7e.vercel.app',
      longDescription: 'A comprehensive advertising platform that enables businesses to create, manage, and track their advertising campaigns. The platform features a commission-based revenue model, real-time analytics, and advanced targeting capabilities. Built with modern web technologies for optimal performance and user experience.'
    },
    {
      id: 6,
      title: 'Squatta App',
      description: 'Accommodation rental platform for finding and managing property rentals.',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
      longDescription: 'A specialized platform for accommodation rentals, helping users find and manage property rentals efficiently. The app includes features for property listing, search, booking management, and user reviews. Built with a focus on user experience and reliable property management.'
    }
  ];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const projectImages = filteredProjects.map(project => project.image || '/placeholder.jpg');

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
        
        {/* Rotating indicator */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-xr-primary-purple"
          >
            <RotateCw className="w-5 h-5" />
          </motion.div>
          <span className="text-sm text-white/70">Drag to explore more projects</span>
        </div>
        
        {/* 3D Carousel */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="min-h-[400px] flex flex-col justify-center border border-dashed rounded-lg space-y-4">
            <div className="p-2">
              <ThreeDPhotoCarousel projects={filteredProjects} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
