import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  percentage: number;
  category: 'web' | 'xr' | 'languages' | 'other';
};

const skills: Skill[] = [
  // Web Development
  { name: 'Angular', percentage: 90, category: 'web' },
  { name: 'React', percentage: 85, category: 'web' },
  { name: 'ASP.NET Core', percentage: 80, category: 'web' },
  { name: 'HTML/CSS', percentage: 95, category: 'web' },
  { name: 'TypeScript', percentage: 85, category: 'web' },
  { name: 'JavaScript', percentage: 90, category: 'web' },
  
  // XR Technologies
  { name: 'Unity', percentage: 85, category: 'xr' },
  { name: 'VR Development', percentage: 80, category: 'xr' },
  { name: 'AR Development', percentage: 75, category: 'xr' },
  { name: 'Blender', percentage: 70, category: 'xr' },
  { name: 'XR Integration', percentage: 80, category: 'xr' },
  
  // Languages
  { name: 'C#', percentage: 90, category: 'languages' },
  { name: 'C++', percentage: 80, category: 'languages' },
  { name: 'Java', percentage: 85, category: 'languages' },
  { name: 'Python', percentage: 75, category: 'languages' },
  { name: 'SQL', percentage: 85, category: 'languages' },
  
  // Other
  { name: 'AI/ML', percentage: 70, category: 'other' },
  { name: 'Cybersecurity', percentage: 75, category: 'other' },
  { name: 'Robotics', percentage: 65, category: 'other' },
  { name: 'PLC Programming', percentage: 60, category: 'other' },
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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="bg-xr-dark-purple rounded-xl p-4 border border-xr-primary-purple/20"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-orbitron text-lg font-semibold">{skill.name}</h3>
                <span className="text-xr-primary-purple font-medium">{skill.percentage}%</span>
              </div>
              
              <div className="w-full h-2 bg-xr-dark-charcoal rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-xr-primary-purple to-xr-vivid-purple"
                />
              </div>
              
              <div className="mt-2">
                <span className={cn(
                  "text-xs px-2 py-1 rounded-full",
                  skill.category === 'web' && "bg-blue-500/10 text-blue-400",
                  skill.category === 'xr' && "bg-purple-500/10 text-purple-400",
                  skill.category === 'languages' && "bg-green-500/10 text-green-400",
                  skill.category === 'other' && "bg-orange-500/10 text-orange-400"
                )}>
                  {skill.category === 'web' ? 'Web Development' :
                   skill.category === 'xr' ? 'XR Technologies' :
                   skill.category === 'languages' ? 'Programming Languages' : 'Other'}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
