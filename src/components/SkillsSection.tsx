import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RadialOrbitalTimelineDemo } from './ui/radial-orbital-timeline-demo';

type Skill = {
  name: string;
  percentage: number;
  category: 'web' | 'data' | 'languages' | 'other';
};

const skills: Skill[] = [
    // Web Development
  { name: 'Angular', percentage: 90, category: 'web' },
  { name: 'React', percentage: 85, category: 'web' },
  { name: 'ASP.NET Core', percentage: 80, category: 'web' },
  { name: 'HTML/CSS', percentage: 95, category: 'web' },
  { name: 'TypeScript', percentage: 85, category: 'web' },
  { name: 'JavaScript', percentage: 90, category: 'web' },
  
  // Data Science & Business Analysis
  { name: 'Data Analysis', percentage: 85, category: 'data' },
  { name: 'Machine Learning', percentage: 80, category: 'data' },
  { name: 'Business Intelligence', percentage: 85, category: 'data' },
  { name: 'Data Visualization', percentage: 90, category: 'data' },
  { name: 'Statistical Analysis', percentage: 85, category: 'data' },
  
  // Languages
  { name: 'C#', percentage: 90, category: 'languages' },
  { name: 'Python', percentage: 85, category: 'languages' },
  { name: 'SQL', percentage: 90, category: 'languages' },
  { name: 'R', percentage: 80, category: 'languages' },
  { name: 'Java', percentage: 85, category: 'languages' },
    
    // Other
  { name: 'Business Analysis', percentage: 85, category: 'other' },
  { name: 'Project Management', percentage: 80, category: 'other' },
  { name: 'Agile Methodologies', percentage: 85, category: 'other' },
  { name: 'Requirements Gathering', percentage: 90, category: 'other' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1 }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-xr-dark-charcoal relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
            <span className="font-inter text-sm uppercase tracking-wider text-xr-primary-purple">Skills</span>
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          
          <p className="mt-4 font-inter text-white/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various domains.
          </p>
        </div>
        
        <div className="h-[600px] mb-16">
          <RadialOrbitalTimelineDemo />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="relative group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white/90">{skill.name}</span>
                <span className="text-xs font-mono text-white/50">{skill.percentage}%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-xr-primary-purple to-xr-vivid-purple"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
