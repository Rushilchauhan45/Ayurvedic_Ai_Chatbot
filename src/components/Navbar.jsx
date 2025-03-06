import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, Leaf, CircuitBoard } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleExplore = () => {
    setExploreOpen(!exploreOpen);
  };

  return (
    <nav className="bg-primary-green text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Leaf className="w-10 h-10 text-gold absolute" />
              <CircuitBoard className="w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <span className="text-xl font-playfair font-bold">Ayurveda<span className="text-gold">AI</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">🏠 Home</Link>
            <Link to="/chatbot" className="nav-link">🤖 Chatbot</Link>

            <div className="relative group">
              <button className="nav-link flex items-center" onClick={toggleExplore}>
                📚 Explore
                <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${exploreOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`dropdown ${exploreOpen ? 'dropdown-open' : ''}`}>
                <div className="py-1">
                  <Link to="/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold hover:text-primary-green">
                    🌍 History of Ayurveda
                  </Link>
                  <Link to="/diseases" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold hover:text-primary-green">
                    💊 Diseases & Ayurvedic Solutions
                  </Link>
                  <Link to="/treatments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold hover:text-primary-green">
                    🧑‍⚕️ Major Treatments in Ayurveda
                  </Link>
                  <Link to="/facts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold hover:text-primary-green">
                    🔍 Interesting Facts About Ayurveda
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/contact" className="nav-link">📞 Contact Us</Link>

            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-secondary-green transition-colors duration-300" aria-label="Toggle dark mode">
              {darkMode ? <Sun className="h-5 w-5 text-gold" /> : <Moon className="h-5 w-5 text-gold" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-secondary-green transition-colors duration-300 mr-2" aria-label="Toggle dark mode">
              {darkMode ? <Sun className="h-5 w-5 text-gold" /> : <Moon className="h-5 w-5 text-gold" />}
            </button>
            <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-secondary-green transition-colors duration-300" aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-green">
          <Link to="/" className="block px-3 py-2 rounded-md hover:bg-secondary-green">🏠 Home</Link>
          <Link to="/chatbot" className="block px-3 py-2 rounded-md hover:bg-secondary-green">🤖 Chatbot</Link>

          <div>
            <button onClick={toggleExplore} className="flex justify-between items-center w-full px-3 py-2 rounded-md hover:bg-secondary-green">
              <span>📚 Explore</span>
              <svg className={`h-4 w-4 transition-transform duration-200 ${exploreOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`pl-4 ${exploreOpen ? 'block' : 'hidden'}`}>
              <Link to="/history" className="block px-3 py-2 rounded-md hover:bg-secondary-green">
                🌍 History of Ayurveda
              </Link>
              <Link to="/diseases" className="block px-3 py-2 rounded-md hover:bg-secondary-green">
                💊 Diseases & Ayurvedic Solutions
              </Link>
              <Link to="/treatments" className="block px-3 py-2 rounded-md hover:bg-secondary-green">
                🧑‍⚕️ Major Treatments in Ayurveda
              </Link>
              <Link to="/facts" className="block px-3 py-2 rounded-md hover:bg-secondary-green">
                🔍 Interesting Facts About Ayurveda
              </Link>
            </div>
          </div>

          <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-secondary-green">📞 Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
