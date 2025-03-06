import React from 'react';
import { motion } from 'framer-motion';

const History = () => {
  return (
    <div className="min-h-screen bg-beige py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-playfair font-bold text-primary-green mb-6 text-center">History of <span className="text-gold">Ayurveda</span></h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
          
          <div className="bg-white dark:bg-dark-beige rounded-lg shadow-lg overflow-hidden mb-10">
            <img 
              src="https://images.unsplash.com/photo-1545158535-c3f7168c28b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
              alt="Ancient Ayurvedic Manuscripts" 
              className="w-full h-64 object-cover"
            />
            
            <div className="p-6">
              <h2 className="text-2xl font-playfair font-bold mb-4 text-primary-green">The Origins of Ayurveda</h2>
              <p className="mb-4">
                Ayurveda, which translates to "The Science of Life," is one of the world's oldest holistic healing systems. It originated in India more than 5,000 years ago and is based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit.
              </p>
              <p className="mb-4">
                The knowledge of Ayurveda was passed down orally through generations, from accomplished masters to their disciples. Later, this knowledge was organized in text form, which today is known as the Vedas.
              </p>
              
              <h3 className="text-xl font-playfair font-bold mt-6 mb-3 text-primary-green">The Ancient Texts</h3>
              <p className="mb-4">
                The principles of Ayurveda are found in ancient texts called the Vedas, particularly in the Atharvaveda. The most famous Ayurvedic texts are:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Charaka Samhita</strong> - Focused on internal medicine and considered the oldest and most important Ayurvedic text.</li>
                <li><strong>Sushruta Samhita</strong> - Emphasized surgical techniques and procedures with remarkable detail.</li>
                <li><strong>Ashtanga Hridaya</strong> - A concise compilation of earlier texts that served as a complete manual for Ayurvedic practitioners.</li>
              </ul>
              
              <h3 className="text-xl font-playfair font-bold mt-6 mb-3 text-primary-green">The Three Doshas</h3>
              <p className="mb-4">
                Central to Ayurvedic philosophy is the concept of three doshas or energies that govern physiological activity:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-beige dark:bg-primary-green dark:text-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Vata</h4>
                  <p className="text-sm">Energy that controls bodily functions associated with motion, including blood circulation, breathing, and heartbeat.</p>
                </div>
                <div className="bg-beige dark:bg-primary-green dark:text-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Pitta</h4>
                  <p className="text-sm">Energy that controls the body's metabolic systems, including digestion, absorption, and body temperature.</p>
                </div>
                <div className="bg-beige dark:bg-primary-green dark:text-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Kapha</h4>
                  <p className="text-sm">Energy that controls growth in the body, supplying water to all body parts and maintaining the immune system.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-playfair font-bold mt-6 mb-3 text-primary-green">Global Spread and Modern Revival</h3>
              <p className="mb-4">
                Ayurveda spread to other parts of Asia with the expansion of Buddhism. During the medieval period, Ayurvedic texts were translated into Arabic and Persian.
              </p>
              <p className="mb-4">
                In the modern era, there has been a global revival of interest in Ayurveda. The World Health Organization recognizes Ayurveda as a traditional medicine system, and many countries have established governmental departments for AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy).
              </p>
              <p>
                Today, Ayurveda continues to evolve with scientific research validating many of its principles and practices, while AI technology helps make this ancient wisdom more accessible and personalized for modern wellness seekers.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="italic text-gray-600 dark:text-gray-400">
              "Ayurveda is not just a system of medicine but a way of life." — Ancient Ayurvedic Proverb
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default History;