import React from 'react';
import { motion } from 'motion/react';

export default function Activities() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.reed.edu/admission-aid/assets/images/feature-panels/reed-this-is-reed-reedies-tug-of-war.jpg" 
            alt="Co-curricular Activities Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white"
          >
            Co-curricular Activities
          </motion.h1>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* 10th Grade Activities */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
               <img 
                src="https://i.ibb.co/G3BTMsLq/testro.webp" 
                alt="Students walking" 
                className="rounded-lg shadow-lg w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="font-serif text-4xl text-gray-900 mb-6">10th Grade Activities</h2>
              <p className="text-gray-600 leading-relaxed">
                Our 10th-grade transition program is designed to welcome new students into the Crossroad family. Through orientation camps, mentorship programs, and social events, we ensure that every student feels connected and supported from day one. These activities build friendships and confidence before the academic year fully kicks into gear.
              </p>
            </div>
          </div>

          {/* Athletics */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/2">
               <img 
                src="https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-activities-img-2.jpg" 
                alt="Basketball game" 
                className="rounded-lg shadow-lg w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="font-serif text-4xl text-gray-900 mb-6">Athletics</h2>
              <p className="text-gray-600 leading-relaxed">
                Athletics at Crossroad is about more than just winning; it's about teamwork, discipline, and physical well-being. We offer a wide range of sports including basketball, soccer, volleyball, and track & field. Our state-of-the-art facilities and dedicated coaches help student-athletes reach their full potential on and off the field.
              </p>
            </div>
          </div>

          {/* Publications */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
               <img 
                src="https://picsum.photos/seed/library_books/800/600" 
                alt="Student with books" 
                className="rounded-lg shadow-lg w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="font-serif text-4xl text-gray-900 mb-6">Publications</h2>
              <p className="text-gray-600 leading-relaxed">
                The student voice is strong at Crossroad. Our publications program includes the school newspaper, the annual yearbook, and a literary arts magazine. Students learn journalism, photography, graphic design, and editing skills, producing professional-quality work that documents the history and creativity of our school year.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
