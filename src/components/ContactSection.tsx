
import { useState, FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message received!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-xr-dark-charcoal relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
            <span className="font-inter text-sm uppercase tracking-wider text-xr-primary-purple">Get In Touch</span>
            <div className="h-0.5 w-5 bg-xr-primary-purple"></div>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
            Contact <span className="text-gradient">Me</span>
          </h2>
          
          <p className="mt-4 font-inter text-white/70 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact information */}
            <div className="md:col-span-1">
              <div className="glass-panel rounded-xl p-6 h-full">
                <h3 className="font-orbitron font-semibold text-xl mb-4">Contact Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-xr-primary-purple font-medium mb-1">Location</p>
                    <p className="font-inter text-white/80">Pretoria, Gauteng</p>
                  </div>
                  
                  <div>
                    <p className="text-xr-primary-purple font-medium mb-1">Email</p>
                    <a 
                      href="mailto:Clintonbonganikhoza@gmail.com" 
                      className="font-inter text-white/80 hover:text-white transition-colors"
                    >
                      Clintonbonganikhoza@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-xr-primary-purple font-medium mb-1">Phone</p>
                    <a 
                      href="tel:+27647375926" 
                      className="font-inter text-white/80 hover:text-white transition-colors"
                    >
                      +27 64 737 5926
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-xr-primary-purple font-medium mb-1">Connect</p>
                    <a 
                      href="https://linkedin.com/in/clintonkhoza" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-white/80 hover:text-white transition-colors"
                    >
                      linkedin.com/in/clintonkhoza
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="md:col-span-2">
              <div className="glass-panel rounded-xl p-6">
                <h3 className="font-orbitron font-semibold text-xl mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xr-primary-purple font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-xr-primary-purple focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xr-primary-purple font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-xr-primary-purple focus:outline-none transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xr-primary-purple font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-xr-primary-purple focus:outline-none transition-colors resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-gradient-to-r from-xr-primary-purple to-xr-vivid-purple rounded-lg font-medium transition-all hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] w-full flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
