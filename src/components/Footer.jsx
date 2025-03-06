import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {

  return (
    <footer className="bg-primary-green text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-playfair font-bold mb-4 border-b border-gold pb-2">Ayurveda<span className="text-gold">AI</span></h3>
            <p className="mb-4">Blending ancient Ayurvedic wisdom with modern AI technology to provide holistic wellness solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-playfair font-bold mb-4 border-b border-gold pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gold transition-colors duration-300">Home</a></li>
              <li><a href="/chatbot" className="hover:text-gold transition-colors duration-300">AI Chatbot</a></li>
              <li><a href="/history" className="hover:text-gold transition-colors duration-300">History of Ayurveda</a></li>
              <li><a href="/contact" className="hover:text-gold transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-playfair font-bold mb-4 border-b border-gold pb-2">Contact</h3>
            <p className="mb-2">Email: info@ayurvedaai.com</p>
            <p className="mb-2">Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Wellness Street, Harmony City, HC 12345</p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gold text-center">
          <p className="flex items-center justify-center text-sm font-light">
            Made with <Heart className="h-4 w-4 text-gold mx-1 animate-pulse-slow" /> for Ayurveda & AI Lovers
          </p>
          <p className="mt-2 text-sm">© {new Date().getFullYear()} AyurvedaAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;