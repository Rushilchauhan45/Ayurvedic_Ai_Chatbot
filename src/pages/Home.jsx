import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HerbCard from '../components/HerbCard';
import QuoteCarousel from '../components/QuoteCarousel';

const Home = () => {
  const herbsRef = useRef(null);

  const herbs = [
    {
      name: "Tulsi",
      title: "The Queen of Herbs",
      description: "Sacred plant with antibacterial, anti-inflammatory, and adaptogenic properties.",
      image: "https://images.unsplash.com/photo-1593484812012-5a1cbc5d06d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      benefits: ["Boosts immunity", "Reduces stress", "Improves respiratory health"]
    },
    {
      name: "Ashwagandha",
      title: "For Strength & Immunity",
      description: "Powerful adaptogen that helps the body manage stress and boosts overall vitality.",
      image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      benefits: ["Reduces anxiety", "Enhances stamina", "Improves concentration"]
    },
    {
      name: "Brahmi",
      title: "The Memory Booster",
      description: "Cognitive enhancer that supports memory, focus, and mental clarity.",
      image: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      benefits: ["Enhances memory", "Reduces anxiety", "Supports brain health"]
    },
    {
      name: "Neem",
      title: "The Skin Purifier",
      description: "Natural antiseptic with powerful cleansing and detoxifying properties.",
      image: "https://images.unsplash.com/photo-1618159083892-b94d0d7e8319?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      benefits: ["Purifies blood", "Treats skin conditions", "Natural insect repellent"]
    },
    {
      name: "Amla",
      title: "The Super Antioxidant",
      description: "One of the richest natural sources of Vitamin C with powerful rejuvenating properties.",
      image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      benefits: ["Boosts immunity", "Improves digestion", "Enhances skin health"]
    }
  ];

  const quotes = [
    {
      text: "When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need.",
      author: "Ayurvedic Proverb"
    },
    {
      text: "The natural healing force within each one of us is the greatest force in getting well.",
      author: "Hippocrates"
    },
    {
      text: "Health is a state of complete harmony of the body, mind, and spirit.",
      author: "B.K.S. Iyengar"
    },
    {
      text: "Ayurveda is the science of life and it has a very basic, simple kind of approach, which is that we are part of the universe and the universe is intelligent and the human body is part of the cosmic body.",
      author: "Deepak Chopra"
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="hero-gradient min-h-[90vh] flex items-center justify-center text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6">
            Harness the Ancient Wisdom of Ayurveda with <span className="text-gold">AI-Powered Insights!</span>
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover personalized wellness solutions combining 5,000-year-old knowledge with cutting-edge technology.
          </motion.p>
          <Link to="/chatbot" className="inline-block bg-gold text-primary-green font-bold py-4 px-8 rounded-lg shadow-lg">
            🌿 Start Your Ayurveda Journey
          </Link>
        </div>
      </section>

      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-green">About <span className="text-gold">Ayurveda</span></h2>
          <p className="text-lg max-w-3xl mx-auto">
            Ayurveda, the "Science of Life," is one of the world's oldest holistic healing systems, developed more than 5,000 years ago in India.
          </p>
        </div>
      </section>

      <section className="py-16 bg-primary-green text-white text-center">
        <QuoteCarousel quotes={quotes} />
      </section>

      <section ref={herbsRef} className="py-16 bg-beige">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-green">Popular <span className="text-gold">Herbs</span> of Ayurveda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {herbs.map((herb, index) => (
              <HerbCard key={index} herb={herb} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-green text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Thank You for Exploring Ayurveda with Us!</h2>
      </section>
    </div>
  );
};

export default Home;