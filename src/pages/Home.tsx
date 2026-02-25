import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/RkhKG3xg/020.jpg" 
            alt="School Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="w-16 h-1 bg-white mb-6"></div>
            <h1 className="font-serif text-5xl md:text-7xl text-white font-medium leading-tight mb-6">
              The Crossroad <br /> School Texas
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Empowering students to achieve academic excellence and personal growth in a supportive, innovative environment.
            </p>
            <Link 
              to="/about"
              className="inline-block bg-white text-gray-900 px-8 py-3 font-medium text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 leading-tight">
              About Crossroad <br /> School Texas
            </h2>
            <div className="w-12 h-1 bg-primary mb-8"></div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded on the principles of integrity, curiosity, and community, Crossroad Private High School has been a beacon of educational excellence for over two decades. We believe in nurturing the whole student—intellectually, socially, and emotionally.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our dedicated faculty and state-of-the-art facilities provide the perfect backdrop for students to explore their passions, challenge themselves, and prepare for a future of leadership and service.
            </p>
            <Link to="/about" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-primary transition-colors">
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
             <div className="text-center p-8 bg-gray-50 rounded-lg">
                <span className="block font-serif text-5xl text-primary font-bold mb-2">#4</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Ranked in Nation</span>
             </div>
             <div className="text-center p-8 bg-gray-50 rounded-lg">
                <span className="block font-serif text-5xl text-primary font-bold mb-2">32%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Diversity</span>
             </div>
             <div className="text-center p-8 bg-gray-50 rounded-lg">
                <span className="block font-serif text-5xl text-primary font-bold mb-2">2K+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Total Enrollment</span>
             </div>
             <div className="text-center p-8 bg-gray-50 rounded-lg">
                <span className="block font-serif text-5xl text-primary font-bold mb-2">1280</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Avg SAT Score</span>
             </div>
          </div>
        </div>
      </section>

      {/* Video / Campus Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto relative group cursor-pointer">
          <div className="aspect-video w-full overflow-hidden rounded-xl shadow-xl relative">
             <img 
              src="https://picsum.photos/seed/campus_building/1600/900" 
              alt="School Campus" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="ml-1 text-primary" size={32} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-6xl text-primary font-serif leading-none">“</span>
          <h3 className="font-serif text-3xl md:text-4xl text-gray-900 italic leading-relaxed mb-8 -mt-4">
            With the support from our dedicated faculty, every student finds their unique path to success, building confidence and character along the way.
          </h3>
          <p className="font-serif text-lg text-gray-600">— Jonathan Doe, Headmaster</p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Curriculum <br /> Overview</h2>
              <div className="w-12 h-1 bg-primary mb-6"></div>
            </div>
            <p className="max-w-md text-gray-600 text-sm leading-relaxed mb-2 md:mb-0">
              Our curriculum is designed to challenge and inspire. From STEM to the Arts, we offer a diverse range of programs that prepare students for the complexities of the modern world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Computer Science', img: 'https://picsum.photos/seed/cs/600/400', desc: 'Exploring algorithms, coding, and the future of technology.' },
              { title: 'Fine Arts', img: 'https://picsum.photos/seed/art/600/400', desc: 'Unleashing creativity through painting, sculpture, and digital media.' },
              { title: 'Humanities', img: 'https://picsum.photos/seed/humanities/600/400', desc: 'Understanding the human experience through literature and philosophy.' },
              { title: 'History', img: 'https://picsum.photos/seed/history/600/400', desc: 'Learning from the past to shape a better future.' },
              { title: 'Mathematics', img: 'https://picsum.photos/seed/math/600/400', desc: 'Developing critical thinking and problem-solving skills.' },
              { title: 'Science', img: 'https://picsum.photos/seed/science/600/400', desc: 'Investigating the natural world through experimentation and inquiry.' },
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg mb-6">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gray-200 rounded-xl z-0"></div>
             <img 
              src="https://picsum.photos/seed/basketball/800/1000" 
              alt="Student Life" 
              className="relative z-10 w-full rounded-xl shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8">Student Life and <br /> Activities</h2>
            <div className="w-12 h-1 bg-primary mb-8"></div>
            
            <div className="space-y-8">
              {[
                { title: '8th Grade Activities', desc: 'Special programs designed to welcome our newest students and help them transition smoothly.' },
                { title: 'Athletics', desc: 'A robust sports program fostering teamwork, discipline, and school spirit across varsity and junior varsity teams.' },
                { title: 'Publications', desc: 'Student-run newspapers, yearbooks, and literary magazines that give a voice to our community.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif text-xl text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-white/30 mx-auto mb-8"></div>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Stay updated with what's happening at <br /> Crossroad School Texas</h2>
          <form 
            className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto mt-8"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing!');
            }}
          >
            <input 
              type="email" 
              placeholder="Email address" 
              required
              className="px-6 py-3 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
            />
            <button 
              type="submit"
              className="px-8 py-3 bg-gray-900 text-white font-bold uppercase text-sm tracking-wider rounded hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
