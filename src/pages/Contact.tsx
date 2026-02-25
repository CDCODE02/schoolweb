import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white"
          >
            <h1 className="font-serif text-5xl md:text-6xl mb-8">Contact</h1>
            <p className="text-white/80 text-lg mb-12 leading-relaxed max-w-md">
              We'd love to hear from you. Whether you have questions about admissions, academics, or just want to say hello, our team is here to help.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <p className="text-white/80">
                    28 Main Street, <br />
                    Dawsonville, GA 30534, <br />
                    United States.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-white/80">+1 812 221 1479</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-white/80 break-words">administration@crossroadprivatehighschool.org</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20"
          >
            <h3 className="text-white text-xl font-serif mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Full name" 
                  className="w-full px-4 py-3 rounded bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full px-4 py-3 rounded bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-4 py-3 rounded bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                ></textarea>
              </div>
              <button 
                type="button"
                className="bg-white text-primary font-bold uppercase tracking-wider px-8 py-3 rounded hover:bg-gray-100 transition-colors"
              >
                Submit
              </button>
            </form>
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
