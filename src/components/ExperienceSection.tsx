
import { cn } from '@/lib/utils';

type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  current?: boolean;
};

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Full-Stack Developer (Intern)",
      company: "Softelsie",
      location: "Gauteng, Randburg",
      period: "Feb 2024 - Feb 2025",
      description: [
        "Designed and implemented scalable web applications using Angular, React, and ASP.NET Core.",
        "Optimized database interactions with SQL server for improved application performance.",
        "Collaborated within an agile team to deliver innovative solutions tailored to client needs."
      ],
      current: true
    },
    {
      id: 2,
      title: "Game Developer (Intern)",
      company: "CXI-Africa",
      location: "Noordwyk, Midrand",
      period: "Sep 2023 - Feb 2024",
      description: [
        "Developed immersive VR and mobile games utilizing Unity and C#.",
        "Modeled 3D objects and animations in Blender for realistic gaming environments."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-xr-primary-purple/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-xr-bright-blue/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
            <span className="font-inter text-sm uppercase tracking-wider text-xr-primary-purple">Career</span>
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          
          <p className="mt-4 font-inter text-white/70 max-w-2xl mx-auto">
            My journey in the tech industry, focusing on full-stack development and XR technologies.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-xr-primary-purple via-xr-vivid-purple to-xr-ocean-blue"></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-12">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-xr-vivid-purple border-2 border-xr-primary-purple z-10"></div>
              
              <div 
                className={cn(
                  "md:w-1/2 glass-panel rounded-xl p-6 relative",
                  index % 2 === 0 
                    ? "md:ml-auto md:mr-6 ml-6" 
                    : "md:mr-auto md:ml-6 ml-6"
                )}
              >
                {/* Current job indicator */}
                {exp.current && (
                  <span className="absolute top-6 right-6 px-2 py-1 text-xs font-medium bg-xr-vivid-purple/30 rounded-full border border-xr-vivid-purple text-xr-vivid-purple">
                    Current
                  </span>
                )}
                
                <div className="mb-4">
                  <h3 className="font-orbitron text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="font-inter text-xr-primary-purple">{exp.company} • {exp.location}</p>
                  <p className="font-inter text-sm text-white/60">{exp.period}</p>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-xr-primary-purple mt-1.5 mr-2 flex-shrink-0"></span>
                      <p className="font-inter text-sm text-white/80">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
