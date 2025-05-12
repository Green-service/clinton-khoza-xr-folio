import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Shield, 
  Cloud, 
  Network, 
  BarChart2, 
  Brain, 
  Database, 
  Glasses 
} from 'lucide-react';

const qualifications = [
  {
    id: 1,
    title: "National Diploma in Information Technology",
    specialization: "Intelligent Industrial Systems",
    icon: GraduationCap,
    institution: "Tshwane University of Technology",
    description: "Specialized in Software Development and Network Management",
    year: "2020"
  },
  {
    id: 2,
    title: "Microsoft Azure Fundamentals",
    specialization: "AZ-900",
    icon: Cloud
  },
  {
    id: 3,
    title: "Cisco Certified Network Associate",
    specialization: "CCNAv7",
    icon: Network
  },
  {
    id: 4,
    title: "CompTIA Security+",
    specialization: "Security Certification",
    icon: Shield
  },
  {
    id: 5,
    title: "Business Analysis",
    specialization: "Professional Certification",
    icon: BarChart2
  },
  {
    id: 6,
    title: "Data Analysis",
    specialization: "Professional Certification",
    icon: Database
  },
  {
    id: 7,
    title: "Extended Reality",
    specialization: "Professional Certification",
    icon: Glasses
  },
  {
    id: 8,
    title: "Cybersecurity",
    specialization: "Professional Certification",
    icon: Shield
  }
];

const QualificationsSection = () => {
  return (
    <section id="qualifications" className="py-24 bg-xr-dark-charcoal relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
            <span className="font-inter text-sm uppercase tracking-wider text-xr-primary-purple">Qualifications</span>
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
            Academic & Professional <span className="text-gradient">Certifications</span>
          </h2>
          
          <p className="mt-4 font-inter text-white/70 max-w-2xl mx-auto">
            A collection of my academic achievements and professional certifications in technology and business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {qualifications.map((qualification, index) => (
            <motion.div
              key={qualification.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-xr-dark-purple rounded-xl p-6 border border-xr-primary-purple/20 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-xr-primary-purple/10">
                    <qualification.icon className="w-6 h-6 text-xr-primary-purple" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-lg font-semibold text-gradient">
                      {qualification.title}
                    </h3>
                    <p className="font-inter text-white/70 text-sm mt-1">
                      {qualification.specialization}
                    </p>
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

export default QualificationsSection; 