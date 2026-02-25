import React from 'react';
import { motion } from 'motion/react';
import { Flag, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.reed.edu/assets-main/images/hero/reed-clubs-and-activities-student-engagement-fair.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl text-white mb-4"
          >
            About Us
          </motion.h1>
          <div className="flex justify-center gap-4 text-white/70 text-sm uppercase tracking-wider font-medium">
            <span>Home</span>
            <span>•</span>
            <span className="text-white">About</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
              The Crossroad <br /> High School
            </h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>
          <div className="text-gray-600 leading-relaxed space-y-6">
            <p>
              As the oldest continuously run educational institution, Crossroad High School remains committed to providing an academically rigorous education to students who will walk out of school ready for lives of leadership and service to their community. From literacy to music and art, each day at Crossroad High School is filled with activities that are both enriching and fun.
            </p>
            <p>
              We strive to be committed to the students we are privileged to serve, in our alumni association, our dedicated, talented faculty and staff. We also take pride in having the most active and helpful group of partners, visionary parents, well-wishers, alumni and friends.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
           <div className="text-center">
              <span className="block font-serif text-5xl md:text-6xl text-primary font-bold mb-2">2K+</span>
              <span className="text-sm font-medium text-gray-500">Current Enrollments</span>
           </div>
           <div className="text-center">
              <span className="block font-serif text-5xl md:text-6xl text-primary font-bold mb-2">90+</span>
              <span className="text-sm font-medium text-gray-500">Qualified Staff</span>
           </div>
           <div className="text-center">
              <span className="block font-serif text-5xl md:text-6xl text-primary font-bold mb-2">80+</span>
              <span className="text-sm font-medium text-gray-500">Clubs & Activities</span>
           </div>
           <div className="text-center">
              <span className="block font-serif text-5xl md:text-6xl text-primary font-bold mb-2">100+</span>
              <span className="text-sm font-medium text-gray-500">Active PTFA Members</span>
           </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Mission */}
          <div className="grid md:grid-cols-3 gap-8 border-t border-gray-100 pt-16">
            <div className="md:col-span-1">
              <Flag className="text-primary w-8 h-8 mb-4" fill="currentColor" />
              <h3 className="font-serif text-2xl text-gray-900 font-bold">Mission Statement</h3>
            </div>
            <div className="md:col-span-2 text-gray-600 leading-relaxed">
              <p>
                Our mission at Crossroad High School is to develop the unique abilities and potential of each child by offering an enriched educational program. We strive for excellence through a hands-on approach. Rich traditions rooted in our innovative curriculum grow productive, caring, and intellectually curious citizens.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8 border-t border-gray-100 pt-16">
            <div className="md:col-span-1">
              <Heart className="text-primary w-8 h-8 mb-4" fill="currentColor" />
              <h3 className="font-serif text-2xl text-gray-900 font-bold">Our Core Values</h3>
            </div>
            <div className="md:col-span-2 text-gray-600 leading-relaxed">
              <p>
                We have a culture that is modern, relevant, and inspires students to have a brighter future. We are determined in our approach to learning, are creative in our thinking, and bold in our ambitions.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
