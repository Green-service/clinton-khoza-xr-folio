import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  projects: { name: string; description: string }[];
};

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Full-Stack Developer",
      company: "Softelsie",
      location: "Gauteng, Randburg",
      period: "Feb 2023 - Feb 2025",
      description: [
        "Designed and implemented scalable web applications using Angular, React, and ASP.NET Core.",
        "Optimized database interactions with SQL Server and Progress Database for improved application performance.",
        "Collaborated within an agile team to deliver innovative solutions tailored to client needs.",
        "Developed and maintained multiple projects including Squatta (accommodation platform), Doctor Queue Management System, and WePledge (community platform).",
        "Implemented responsive designs and interactive features using Next.js and modern web technologies.",
        "Worked fully remotely, maintaining high productivity and effective communication with team members."
      ],
      skills: [
        "React", "Next.js", "Angular", "ASP.NET Core", 
        "SQL Server", "Progress Database", "TypeScript", 
        "Tailwind CSS", "Git", "Agile Methodologies"
      ],
      projects: [
        {
          name: "Squatta",
          description: "Accommodation rental platform with property management features"
        },
        {
          name: "Doctor Queue Management",
          description: "Smart ticketing system for medical facilities"
        },
        {
          name: "WePledge",
          description: "Community platform for social initiatives"
        }
      ]
    },
    {
      id: 2,
      role: "Game Developer",
      company: "CXI-Africa",
      location: "Noordwyk, Midrand",
      period: "Feb 2022 - Feb 2023",
      description: [
        "Developed immersive VR and mobile games utilizing Unity and C#.",
        "Modeled 3D objects and animations in Blender for realistic gaming environments.",
        "Created extended reality (XR) experiences for various client projects.",
        "Collaborated in a hybrid work environment, combining remote and on-site development.",
        "Implemented game mechanics and interactive features for both VR and mobile platforms."
      ],
      skills: [
        "Unity", "C#", "Blender", "VR Development",
        "AR Development", "3D Modeling", "Game Design",
        "Mobile Development", "XR Technologies"
      ],
      projects: [
        {
          name: "VR Training Simulation",
          description: "Immersive training platform for industrial safety"
        },
        {
          name: "Mobile RPG Game",
          description: "Fantasy role-playing game with advanced mechanics"
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-xr-dark-charcoal relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
            <span className="font-inter text-sm uppercase tracking-wider text-xr-primary-purple">Experience</span>
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          
          <p className="mt-4 font-inter text-white/70 max-w-2xl mx-auto">
            A timeline of my professional experience and key achievements in software development.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <div className="bg-xr-dark-purple rounded-xl p-6 border border-xr-primary-purple/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-orbitron text-xl font-semibold text-gradient">
                      {experience.role}
                    </h3>
                    <p className="font-inter text-white/70">
                      {experience.company} • {experience.location}
                    </p>
                  </div>
                  <span className="font-mono text-sm text-xr-primary-purple mt-2 md:mt-0">
                    {experience.period}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {experience.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-xr-primary-purple mt-2"></div>
                      <span className="font-inter text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <h4 className="font-orbitron text-sm font-semibold text-white/90 mb-2">Key Projects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.projects.map((project, i) => (
                      <div key={i} className="bg-xr-primary-purple/10 rounded-lg px-3 py-1">
                        <span className="text-sm text-xr-primary-purple">{project.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-orbitron text-sm font-semibold text-white/90 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-xr-primary-purple/10 text-xr-primary-purple"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
