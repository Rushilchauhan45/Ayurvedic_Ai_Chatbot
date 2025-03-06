import React from 'react';
import { motion } from 'framer-motion';

const FactShape = {
  title: '',
  description: '',
  icon: '',
};




const Facts = () => { 

  const facts = [

    {
      title: "World's Oldest Medical System",
      description: "Ayurveda is considered the oldest healing science, with origins dating back over 5,000 years to the ancient Vedic culture of India.",
      icon: "🌍"
    },
    {
      title: "The Word 'Ayurveda'",
      description: "The term 'Ayurveda' comes from two Sanskrit words: 'Ayur' meaning life and 'Veda' meaning knowledge or science, literally translating to 'The Science of Life.'",
      icon: "📚"
    },
    {
      title: "First Recorded Surgery",
      description: "The Sushruta Samhita, an ancient Ayurvedic text, contains detailed descriptions of over 300 surgical procedures and 120 surgical instruments, including the world's first recorded rhinoplasty (nose reconstruction).",
      icon: "⚕️"
    },
    {
      title: "Eight Branches of Ayurveda",
      description: "Traditional Ayurveda is divided into eight branches: Internal Medicine, Surgery, Treatment of Head and Neck Disease, Pediatrics, Toxicology, Psychiatry, Rejuvenation, and Reproductive Health.",
      icon: "🌿"
    },
    {
      title: "Pulse Diagnosis",
      description: "Ayurvedic practitioners can diagnose diseases by reading the pulse (Nadi Pariksha), detecting subtle variations that indicate specific health conditions and dosha imbalances.",
      icon: "💓"
    },
    {
      title: "Daily Routine Importance",
      description: "Ayurveda places great emphasis on daily routine (Dinacharya) and seasonal routines (Ritucharya) to maintain health and prevent disease by living in harmony with nature's cycles.",
      icon: "🌞"
    },
    {
      title: "Turmeric's Ancient Use",
      description: "Turmeric has been used in Ayurveda for over 4,000 years as both a culinary spice and medicinal herb, long before modern science discovered its anti-inflammatory properties.",
      icon: "🧪"
    },
    {
      title: "Personalized Medicine Pioneer",
      description: "Ayurveda was practicing personalized medicine thousands of years before it became a modern medical trend, with treatments tailored to an individual's unique constitution (Prakriti).",
      icon: "👤"
    },
    {
      title: "Yoga and Ayurveda Connection",
      description: "Yoga and Ayurveda are sister sciences that developed together and complement each other. Yoga focuses on the spiritual aspect while Ayurveda addresses physical health.",
      icon: "🧘"
    },
    {
      title: "Global Recognition",
      description: "In 2014, the United Nations Educational, Scientific and Cultural Organization (UNESCO) recognized traditional Ayurvedic medicine as an Intangible Cultural Heritage of Humanity.",
      icon: "🏆"
    },
    {
      title: "Taste as Medicine",
      description: "Ayurveda recognizes six tastes (sweet, sour, salty, pungent, bitter, and astringent) and uses them therapeutically to balance the doshas and treat various conditions.",
      icon: "👅"
    },
    {
      title: "First Medical Schools",
      description: "Ancient India had some of the world's first medical schools, where students learned Ayurvedic medicine through rigorous training and apprenticeship with master physicians.",
      icon: "🏫"
    }
  ];

  return (
    <div className="min-h-screen bg-beige py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-playfair font-bold text-primary-green mb-6 text-center">Interesting <span className="text-gold">Facts</span> About Ayurveda</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
          
          <p className="text-lg text-center mb-10">
            Discover fascinating insights about this ancient healing system that continues to influence modern wellness practices around the world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white dark:bg-dark-beige rounded-lg shadow-lg p-6"
              >
                <div className="flex items-start">
                  <span className="text-4xl mr-4">{fact.icon}</span>
                  <div>
                    <h2 className="text-xl font-playfair font-bold text-primary-green mb-2">{fact.title}</h2>
                    <p>{fact.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 bg-primary-green text-white p-6 rounded-lg shadow-lg text-center"
          >
            <h2 className="text-2xl font-playfair font-bold mb-4">The Living Tradition</h2>
            <p>
              Ayurveda is not just a historical medical system but a living tradition that continues to evolve and adapt while maintaining its core principles. Today, modern research is validating many Ayurvedic practices, creating a bridge between ancient wisdom and contemporary science.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Facts;