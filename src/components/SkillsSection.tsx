import { useState } from 'react';
import { cn } from '@/lib/utils';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'web', label: 'Web' },
    { id: 'xr', label: 'XR Tech' },
    { id: 'languages', label: 'Languages' },
    { id: 'other', label: 'Other' },
  ];
  
  const skills = [
    // Web Development
    { name: 'Angular', category: 'web', level: 90 },
    { name: 'React', category: 'web', level: 85 },
    { name: 'ASP.NET Core', category: 'web', level: 80 },
    { name: 'HTML/CSS', category: 'web', level: 95 },
    { name: 'TypeScript', category: 'web', level: 85 },
    { name: 'JavaScript', category: 'web', level: 90 },
    
    // XR Technologies
    { name: 'Unity', category: 'xr', level: 85 },
    { name: 'VR Development', category: 'xr', level: 80 },
    { name: 'AR Development', category: 'xr', level: 75 },
    { name: 'Blender', category: 'xr', level: 70 },
    { name: 'XR Integration', category: 'xr', level: 80 },
    
    // Programming Languages
    { name: 'C#', category: 'languages', level: 90 },
    { name: 'C++', category: 'languages', level: 80 },
    { name: 'Java', category: 'languages', level: 85 },
    { name: 'Python', category: 'languages', level: 75 },
    { name: 'SQL', category: 'languages', level: 85 },
    
    // Other
    { name: 'AI/ML', category: 'other', level: 70 },
    { name: 'Cybersecurity', category: 'other', level: 75 },
    { name: 'Robotics', category: 'other', level: 65 },
    { name: 'PLC Programming', category: 'other', level: 60 },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-xr-vivid-purple/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-xr-ocean-blue/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
            <span className="font-inter text-sm uppercase tracking-wider text-xr-primary-purple">Expertise</span>
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          
          <p className="mt-4 font-inter text-white/70 max-w-2xl mx-auto">
            Proficient in a wide range of technologies across web development, XR, and software engineering.
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-xr-primary-purple to-xr-vivid-purple shadow-[0_0_10px_rgba(139,92,246,0.5)]'
                  : 'glass-panel hover:bg-white/10'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="glass-panel p-5 rounded-lg hover:bg-white/5 transition-all">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-orbitron font-semibold">{skill.name}</h3>
                <span className="text-xr-primary-purple font-mono">{skill.level}%</span>
              </div>
              
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-xr-primary-purple to-xr-vivid-purple"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
