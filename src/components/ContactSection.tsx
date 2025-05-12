import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { handleAsyncError, retryOperation } from '../lib/error-handler';
import { MapPin, Mail, Phone, Linkedin, Send } from 'lucide-react';
import { Modal } from '@/components/ui/modal';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await retryOperation(async () => {
        const result = await emailjs.sendForm(
          'service_xxxxxxx',
          'template_xxxxxxx',
          e.target as HTMLFormElement,
          'YOUR_PUBLIC_KEY'
        );
        return result;
      });

      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactItems = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pretoria, Gauteng',
      link: null
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Clintonbonganikhoza@gmail.com',
      link: 'mailto:Clintonbonganikhoza@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+27 64 737 5926',
      link: 'tel:+27647375926'
    },
    {
      icon: Linkedin,
      label: 'Connect',
      value: 'linkedin.com/in/clintonkhoza',
      link: 'https://linkedin.com/in/clintonkhoza'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-xr-dark-charcoal relative overflow-hidden">
      {/* Modal for success/error messages */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={status === 'success' ? 'Success!' : 'Error'}
        message={status === 'success' 
          ? 'Your message has been sent successfully. I will get back to you soon!'
          : 'Failed to send message. Please try again later.'
        }
        type={status === 'success' ? 'success' : 'error'}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-xr-primary-purple/10 to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
            <span className="font-inter text-sm uppercase tracking-wider text-xr-primary-purple">Contact</span>
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          
          <p className="mt-4 font-inter text-white/70 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <div className="glass-panel rounded-xl p-6 h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-xr-primary-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-grid opacity-10" />
                
                <h3 className="font-orbitron font-semibold text-base mb-3 relative">
                  <span className="text-gradient">Contact Information</span>
                </h3>
                
                <div className="space-y-3 relative">
                  {contactItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 group/item"
                    >
                      <div className="p-1 rounded-lg bg-xr-primary-purple/10 group-hover/item:bg-xr-primary-purple/20 transition-colors">
                        <item.icon className="w-3.5 h-3.5 text-xr-primary-purple" />
                      </div>
                      <div>
                        <p className="text-xr-primary-purple text-xs font-medium mb-0.5">{item.label}</p>
                        {item.link ? (
                          <a 
                            href={item.link}
                            target={item.label === 'Connect' ? '_blank' : undefined}
                            rel={item.label === 'Connect' ? 'noopener noreferrer' : undefined}
                            className="font-inter text-xs text-white/80 hover:text-white transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-inter text-xs text-white/80">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="glass-panel rounded-xl p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-xr-primary-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-grid opacity-10" />
                
                <h3 className="font-orbitron font-semibold text-xl mb-6 relative">
                  <span className="text-gradient">Send Me a Message</span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group/input">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-xr-primary-purple focus:outline-none transition-all duration-300 text-white placeholder:text-white/50 group-hover/input:bg-white/10"
                      />
                    </div>
                    <div className="group/input">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-xr-primary-purple focus:outline-none transition-all duration-300 text-white placeholder:text-white/50 group-hover/input:bg-white/10"
                      />
                    </div>
                  </div>
                  
                  <div className="group/input">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-xr-primary-purple focus:outline-none transition-all duration-300 text-white placeholder:text-white/50 group-hover/input:bg-white/10"
                    />
                  </div>
                  
                  <div className="group/input">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your Message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-xr-primary-purple focus:outline-none transition-all duration-300 text-white placeholder:text-white/50 resize-none group-hover/input:bg-white/10"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button
                    type="submit"
                      disabled={loading}
                      className="bg-xr-primary-purple hover:bg-xr-primary-purple/90 px-8 group/button relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {loading ? 'Sending...' : 'Send Message'}
                        <Send className="w-4 h-4" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-xr-primary-purple to-xr-primary-purple/50 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
                    </Button>
                      </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
