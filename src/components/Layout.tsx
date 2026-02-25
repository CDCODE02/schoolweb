import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Activities', path: '/activities' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white py-4 px-6 md:px-12 lg:px-24 shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="https://i.ibb.co/hRMKW1y9/schoollogo.png" alt="Crossroad High School Logo" className="h-12 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none text-primary">Crossroad</span>
              <span className="text-xs font-medium text-gray-500 tracking-wider uppercase">Private High School</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors ${
                  location.pathname === link.path ? 'text-primary font-bold' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-4 text-primary">
            <a href="#" className="hover:text-primary-dark transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-primary-dark transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-primary-dark transition-colors"><Instagram size={18} /></a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-t mt-4"
            >
              <div className="flex flex-col py-4 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-center py-2 text-sm font-medium uppercase tracking-wide hover:text-primary ${
                      location.pathname === link.path ? 'text-primary font-bold' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex justify-center gap-6 mt-2 text-primary">
                  <a href="#"><Twitter size={20} /></a>
                  <a href="#"><Facebook size={20} /></a>
                  <a href="#"><Instagram size={20} /></a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="font-serif text-2xl text-gray-900 mb-6">Crossroad Private High School</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              1234 Education Lane, <br />
              Springfield, IL 62704, <br />
              United States.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-serif text-2xl text-gray-900 mb-6">Main Office</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-1">+1 123-456-7890</p>
            <p className="text-gray-600 text-sm leading-relaxed">8:00 a.m. – 4:00 p.m.</p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-serif text-2xl text-gray-900 mb-6">Attendance</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-1">+1 123-456-7891</p>
            <p className="text-gray-600 text-sm leading-relaxed hover:text-primary cursor-pointer">
              attendance@crossroad.edu
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/hRMKW1y9/schoollogo.png" alt="Crossroad High School Logo" className="h-8 w-auto" />
            <span className="font-bold text-gray-900">Crossroad School</span>
          </div>
          
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/about" className="hover:text-primary">About</Link>
            <Link to="/academics" className="hover:text-primary">Academics</Link>
            <Link to="/activities" className="hover:text-primary">Activities</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </div>

          <div className="flex gap-4 text-primary">
            <a href="#" className="hover:text-primary-dark"><Twitter size={16} /></a>
            <a href="#" className="hover:text-primary-dark"><Facebook size={16} /></a>
            <a href="#" className="hover:text-primary-dark"><Instagram size={16} /></a>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-gray-400">
          Copyright © {new Date().getFullYear()} Crossroad Private High School.
        </div>
      </footer>
    </div>
  );
}
