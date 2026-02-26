import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Globe, Award, Star, Trophy, Box, Sprout } from 'lucide-react';

export default function Academics() {
  const subjects = [
    {
      title: 'Computer Science',
      desc: 'Our Computer Science program goes beyond coding. Students learn computational thinking, problem-solving, and the ethical implications of technology. From introductory courses in Python to advanced AP Computer Science, we prepare students for the digital future.',
      img: 'https://www.smwc.edu/wp-content/uploads/2022/09/students-in-campus-life-office-e1663091520151.jpg'
    },
    {
      title: 'Fine Arts',
      desc: 'The Fine Arts department encourages students to explore their creativity through visual and performing arts. Whether it is painting, sculpture, drama, or music, our programs provide a platform for self-expression and artistic growth.',
      img: 'https://i.ibb.co/yBZQZ4wn/school-template-curriculum-img-2.jpg'
    },
    {
      title: 'Humanities',
      desc: 'In Humanities, students engage with the great works of literature, philosophy, and history. We foster critical thinking and empathy by examining the human experience across different cultures and time periods.',
      img: 'https://i.ibb.co/prkWq5K5/school-template-curriculum-img-3.jpg'
    },
    {
      title: 'History',
      desc: 'Our History curriculum emphasizes primary source analysis and historical inquiry. Students explore the events that have shaped our world, developing a nuanced understanding of the past to better understand the present.',
      img: 'https://i.ibb.co/GfsdCtJ1/historyschoolimg.jpg'
    },
    {
      title: 'Mathematics',
      desc: 'We view Mathematics as a language of logic and patterns. Our curriculum ranges from Algebra and Geometry to Calculus and Statistics, focusing on both theoretical understanding and real-world application.',
      img: 'https://i.ibb.co/M5crh80H/school-template-curriculum-img-5.jpg'
    },
    {
      title: 'Science',
      desc: 'Our Science program is hands-on and inquiry-based. Through laboratory experiments and field studies in Biology, Chemistry, and Physics, students develop a deep appreciation for the natural world and the scientific method.',
      img: 'https://i.ibb.co/fY6CNLYD/school-template-curriculum-img-4.jpg'
    }
  ];

  const [startIndex, setStartIndex] = React.useState(0);

  const logos = [
    "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/logo-18.svg",
    "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/logo-20.svg",
    "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/logo-21.svg",
    "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/logo-22.svg",
    "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/logo-2.svg",
    "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/logo-3.svg",
    "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/logo-5.svg"
  ];

  const next = () => {
    setStartIndex((prev) => (prev + 1) % logos.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + logos.length) % logos.length);
  };

  // Get 5 visible logos handling wrap-around
  const visibleLogos = [];
  for (let i = 0; i < 5; i++) {
    visibleLogos.push(logos[(startIndex + i) % logos.length]);
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.reed.edu/assets-main/images/hero/reed-campus-life-renn-fayre.jpg" 
            alt="Academics Background" 
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
            Academics
          </motion.h1>
          <div className="flex justify-center gap-4 text-white/70 text-sm uppercase tracking-wider font-medium">
            <span>Home</span>
            <span>•</span>
            <span className="text-white">Academics</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">Curriculum Overview</span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 leading-tight">
            A Commitment to Excellence
          </h2>
          <div className="w-12 h-1 bg-primary mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed text-sm">
            <p>
              At Crossroad Private High School, we believe that academic excellence is achieved through a rigorous and balanced curriculum. Our courses are designed to challenge students to think critically, communicate effectively, and collaborate with others.
            </p>
            <ul className="space-y-2 list-disc pl-5">
               <li>Comprehensive AP and Honors programs</li>
               <li>Small class sizes for personalized attention</li>
               <li>Interdisciplinary projects and real-world applications</li>
               <li>Focus on research, writing, and analytical skills</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Subjects List */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-24">
          {subjects.map((subject, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={subject.img} 
                    alt={subject.title} 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">{subject.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {subject.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* College Opportunities */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
         <div className="max-w-7xl mx-auto text-center">
            <h3 className="font-serif text-3xl text-gray-900 font-bold mb-16">College Opportunities</h3>
            
            <div className="relative flex items-center justify-center group">
              <button 
                onClick={prev}
                className="absolute left-0 p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors z-10 text-gray-400 hover:text-gray-600"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <div className="flex flex-nowrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale px-8 md:px-12 w-full overflow-hidden">
                {visibleLogos.map((logo, idx) => (
                  <motion.img 
                    key={`${startIndex}-${idx}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    src={logo} 
                    alt={`Partner Logo ${idx}`} 
                    className={`h-16 md:h-24 w-auto ${idx === 2 ? 'hidden md:block' : ''} ${idx > 2 ? 'hidden lg:block' : ''}`} 
                  />
                ))}
              </div>

              <button 
                onClick={next}
                className="absolute right-0 p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors z-10 text-gray-400 hover:text-gray-600"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
         </div>
      </section>
    </div>
  );
}
