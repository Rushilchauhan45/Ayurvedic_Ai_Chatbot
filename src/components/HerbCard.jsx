import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Herb = {
  name: "",
  title: "",
  description: "",
  image: "",
  benefits: []
};


const HerbCardProps= {
  herb: Herb
}

const HerbCard = ({ herb }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="herb-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={herb.image} 
          alt={herb.name} 
          className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-green to-transparent opacity-70"></div>
        <h3 className="absolute bottom-4 left-4 text-white font-playfair font-bold text-xl">
          🌿 {herb.name}
        </h3>
      </div>
      
      <div className="herb-card-content">
        <h4 className="font-bold mb-2">{herb.title}</h4>
        <p className="mb-4">{herb.description}</p>
        
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <h5 className="font-bold mb-2 mt-4">Benefits:</h5>
            <ul className="list-disc pl-5 space-y-1">
              {herb.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default HerbCard;