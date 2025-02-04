import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, User, Book, Briefcase, 
  Award, GraduationCap, PhoneCall, Brain, Menu
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);


  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Skills', path: '/skills', icon: Book },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Certificates', path: '/certificate', icon: Award },
    { name: 'Education', path: '/education', icon: GraduationCap },
    { name: 'Contact', path: '/contact', icon: PhoneCall }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="fixed top-0 left-0 right-0 z-50 bg-green-900 py-3 shadow-md"
        >
          <div className="container mx-auto px-6 flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <Brain className="text-green-300 w-8 h-8" />
              <Link
                to="/"
                className="text-xl font-bold text-green-200 hover:text-green-400 transition-colors"
              >
                Sanjay N
              </Link>
            </motion.div>

            <button 
              className="md:hidden text-white" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-8 h-8" />
            </button>

            <div className={`md:flex items-center space-x-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <motion.div
                    key={item.path}
                    onHoverStart={() => setHoveredItem(item.path)}
                    onHoverEnd={() => setHoveredItem(null)}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <Link
                      to={item.path}
                      className={`relative flex items-center space-x-2 text-sm font-medium transition-colors 
                        ${isActive ? 'text-green-200' : 'text-green-400/70 hover:text-green-200'}`}
                    >
                      <IconComponent className={`w-5 h-5 ${isActive ? 'text-green-300' : 'text-green-500/70'}`} />
                      <span>{item.name}</span>
                      {hoveredItem === item.path && (
                        <motion.div
                          layoutId="hover-indicator"
                          className="absolute -bottom-2 left-0 right-0 h-1 bg-green-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                >
                  <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg py-2 z-50">
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Dashboard</Link>
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Settings</Link>
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Earnings</Link>
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
