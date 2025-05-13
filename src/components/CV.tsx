import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface CVProps {
  onClose: () => void;
}

const CV: React.FC<CVProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-zinc-900 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6 text-white">
          <div className="flex gap-6 items-start">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
              <p className="text-zinc-300">
                Dynamic Full-Stack Developer with expertise in Angular, React, and Next.js. 
                Specialized in cybersecurity implementation, business analysis, and data science. 
                Passionate about creating secure, scalable, and data-driven solutions that drive business growth.
              </p>
            </div>
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="/pic.jpg"
                alt="Clinton Khoza"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Academic & Qualifications</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Diploma in Information Technology</h4>
                <p className="text-zinc-300">Tshwane University of Technology</p>
              </div>
              <div>
                <h4 className="font-medium">CompTIA Security+</h4>
                <p className="text-zinc-300">Certified Information Security Professional</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-3">Programming Languages</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-300">TypeScript/JavaScript</span>
                      <span className="text-zinc-400">90%</span>
                    </div>
                    <div className="w-full h-4 bg-zinc-800 rounded-full">
                      <div className="w-[90%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-300">C#</span>
                      <span className="text-zinc-400">85%</span>
                    </div>
                    <div className="w-full h-4 bg-zinc-800 rounded-full">
                      <div className="w-[85%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-300">Python</span>
                      <span className="text-zinc-400">80%</span>
                    </div>
                    <div className="w-full h-4 bg-zinc-800 rounded-full">
                      <div className="w-[80%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">Frameworks & Tools</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-300">Angular</span>
                      <span className="text-zinc-400">90%</span>
                    </div>
                    <div className="w-full h-4 bg-zinc-800 rounded-full">
                      <div className="w-[90%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-300">React/Next.js</span>
                      <span className="text-zinc-400">85%</span>
                    </div>
                    <div className="w-full h-4 bg-zinc-800 rounded-full">
                      <div className="w-[85%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-300">ASP.NET</span>
                      <span className="text-zinc-400">85%</span>
                    </div>
                    <div className="w-full h-4 bg-zinc-800 rounded-full">
                      <div className="w-[85%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Professional Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Junior Full-Stack Developer</h4>
                <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                  <li>Led development of enterprise applications using Angular and ASP.NET</li>
                  <li>Implemented CI/CD pipelines and automated testing</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <div>
              <h4 className="font-medium">Diploma in Information Technology</h4>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CV; 