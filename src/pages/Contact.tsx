import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Loader2, Check, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary py-8 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          
          {/* Left Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white"
          >
            <h1 className="font-serif text-3xl md:text-6xl mb-4 md:mb-8">Contact</h1>
            <p className="text-white/80 text-sm md:text-lg mb-8 md:mb-12 leading-relaxed max-w-md">
              We'd love to hear from you. Whether you have questions about admissions, academics, or just want to say hello, our team is here to help.
            </p>

            <div className="space-y-4 md:space-y-8">
              <div className="flex gap-3 md:gap-4">
                <MapPin className="mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <h3 className="font-bold text-base md:text-lg mb-1">Address</h3>
                  <p className="text-white/80 text-xs md:text-base">
                    28 Main Street, <br />
                    Dawsonville, GA 30534, <br />
                    United States.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <Phone className="mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <h3 className="font-bold text-base md:text-lg mb-1">Phone</h3>
                  <p className="text-white/80 text-xs md:text-base">+1 812 221 1479</p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <Mail className="mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <h3 className="font-bold text-base md:text-lg mb-1">Email</h3>
                  <p className="text-white/80 text-xs md:text-base break-all md:break-words">administration@crossroadprivatehighschool.org</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="bg-white/10 backdrop-blur-sm p-4 md:p-8 rounded-lg border border-white/20 w-full"
          >
            <h3 className="text-white text-lg md:text-xl font-serif mb-4 md:mb-6">Send Us a Message</h3>
            
            {status === 'success' ? (
              <div className="bg-green-500/20 border border-green-500/50 rounded p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500 mb-4">
                  <Check className="text-white" size={24} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Message Sent!</h4>
                <p className="text-white/80">Thank you for contacting us. We will get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm text-white underline hover:text-white/80"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded p-3 flex items-center gap-2 text-white text-sm">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}
                
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name" 
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address" 
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message" 
                    rows={3}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none text-sm md:text-base"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-white text-primary font-bold uppercase tracking-wider px-6 py-2 md:px-8 md:py-3 rounded hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 text-sm md:text-base w-full md:w-auto justify-center"
                >
                  {status === 'loading' && <Loader2 className="animate-spin" size={18} />}
                  {status === 'loading' ? 'Sending...' : 'Submit'}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 w-full bg-gray-200 relative">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.785461234567!2d-84.119076!3d34.420658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f58692b8c8c8c9%3A0x1234567890abcdef!2s28%20Main%20St%2C%20Dawsonville%2C%20GA%2030534!5e0!3m2!1sen!2sus!4v1626362244585!5m2!1sen!2sus" 
           width="100%" 
           height="100%" 
           style={{border:0}} 
           allowFullScreen={false} 
           loading="lazy"
           className="grayscale opacity-80"
         ></iframe>
      </section>
    </div>
  );
}
