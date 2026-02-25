import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary py-24 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-6xl text-white mb-4"
        >
          About
        </motion.h1>
        <div className="flex justify-center gap-4 text-white/70 text-sm uppercase tracking-wider font-medium">
          <span>Home</span>
          <span>•</span>
          <span className="text-white">About</span>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 leading-tight">
            The Crossroad High <br /> School
          </h2>
          <div className="w-12 h-1 bg-primary mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
            <p>
              Crossroad Private High School is more than just an educational institution; it is a vibrant community dedicated to fostering intellectual curiosity and personal growth. Founded in 2001, our school has consistently ranked among the top private schools in the state, known for our rigorous academic curriculum and supportive environment.
            </p>
            <p>
              We believe that every student has unique potential waiting to be unlocked. Our approach combines traditional academic disciplines with innovative teaching methods, ensuring that students are not only prepared for college but also for life. We emphasize critical thinking, ethical leadership, and global citizenship.
            </p>
          </div>
        </div>
      </section>

      {/* Headmaster */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/headmaster/800/900" 
              alt="Headmaster" 
              className="rounded-lg shadow-xl w-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-lg rounded-lg hidden md:block">
              <span className="text-6xl text-primary font-serif leading-none">“</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 italic leading-relaxed mb-8">
              With the support from our faculty, we cultivate an environment where students feel safe to take risks, ask questions, and discover their true selves.
            </h3>
            <div>
              <p className="font-serif text-xl text-gray-900 font-bold">Jonathan Doe</p>
              <p className="text-gray-500 uppercase tracking-wider text-sm mt-1">Headmaster</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h3 className="font-serif text-2xl text-gray-900 font-bold">Crossroad School at a Glance</h3>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="text-center">
              <span className="block font-serif text-6xl text-primary font-bold mb-2">4</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Ranked #4 in Nation</span>
           </div>
           <div className="text-center">
              <span className="block font-serif text-6xl text-primary font-bold mb-2">32%</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Low-income Families</span>
           </div>
           <div className="text-center">
              <span className="block font-serif text-6xl text-primary font-bold mb-2">2K+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Total Enrollment</span>
           </div>
           <div className="text-center">
              <span className="block font-serif text-6xl text-primary font-bold mb-2">1280</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Composite SAT</span>
           </div>
        </div>
      </section>

      {/* Mission & Beliefs */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto space-y-20">
          <div className="grid md:grid-cols-3 gap-8">
            <h3 className="font-serif text-2xl text-gray-900 font-bold">Mission Statement</h3>
            <div className="md:col-span-2 text-gray-600 leading-relaxed space-y-4">
              <p>
                Our mission is to inspire a diverse community of students to lead lives of purpose, integrity, and compassion. We are committed to academic excellence and the development of the whole child.
              </p>
              <p>
                We strive to create a learning environment that encourages intellectual risk-taking and fosters a love of learning that lasts a lifetime. Through a rigorous curriculum and a wide range of extracurricular activities, we prepare our students to be active and responsible citizens of the world.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <h3 className="font-serif text-2xl text-gray-900 font-bold">Beliefs</h3>
            <div className="md:col-span-2 text-gray-600 leading-relaxed space-y-4">
              <p>
                We believe that every student has the capacity to learn and grow. We value diversity in all its forms and believe that an inclusive community enriches the educational experience for everyone.
              </p>
              <p>
                We believe in the power of collaboration and the importance of character. Integrity, respect, and responsibility are the cornerstones of our community. We are dedicated to helping our students develop the skills and values they need to navigate a complex and changing world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
