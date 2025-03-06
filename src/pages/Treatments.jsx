import React from 'react';
import { motion } from 'framer-motion';

const Treatment = {
  name: '',
  description: '',
  benefits: []
};


const Treatments = () => {
  const treatments = [
    {
      name: "Panchakarma",
      description: "A five-fold detoxification therapy that cleanses the body of toxins and restores balance to the doshas.",
      benefits: [
        "Deep detoxification of tissues",
        "Restoration of metabolic processes",
        "Reversal of disease progression",
        "Enhanced immunity and vitality"
      ],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Abhyanga",
      description: "A full-body massage with warm herbal oils tailored to your specific dosha imbalance.",
      benefits: [
        "Improved circulation",
        "Relaxation of muscles and nerves",
        "Nourishment of tissues",
        "Better sleep and reduced stress"
      ],
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Shirodhara",
      description: "A continuous stream of warm oil poured onto the forehead, specifically on the 'third eye' area.",
      benefits: [
        "Deep relaxation of the nervous system",
        "Relief from anxiety and stress",
        "Improved mental clarity",
        "Treatment for insomnia and certain neurological disorders"
      ],
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Nasya",
      description: "Administration of herbal oils, powders, or pastes through the nasal passages.",
      benefits: [
        "Clears sinus congestion",
        "Improves mental clarity",
        "Enhances sensory perception",
        "Treats headaches and certain neurological conditions"
      ],
      image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Basti",
      description: "Therapeutic enema using medicated oils or decoctions to cleanse and nourish the colon.",
      benefits: [
        "Elimination of toxins from the colon",
        "Balancing of Vata dosha",
        "Relief from constipation and digestive disorders",
        "Treatment for certain neurological and musculoskeletal conditions"
      ],
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Udvartana",
      description: "A vigorous massage using herbal powders to exfoliate and stimulate the skin and underlying tissues.",
      benefits: [
        "Reduction of Kapha dosha",
        "Improved circulation and lymphatic drainage",
        "Breaking down of fat deposits",
        "Toning and firming of skin"
      ],
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
          <h1 className="text-4xl font-playfair font-bold text-primary-green mb-6 text-center">Major <span className="text-gold">Treatments</span> in Ayurveda</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
          
          <p className="text-lg text-center mb-10">
            Ayurveda offers a wide range of therapeutic treatments designed to restore balance, remove toxins, and promote overall health and wellbeing.
          </p>
          
          <div className="space-y-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-beige rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/3">
                  <img 
                    src={treatment.image} 
                    alt={treatment.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="md:w-2/3 p-6">
                  <h2 className="text-2xl font-playfair font-bold text-primary-green mb-3">{treatment.name}</h2>
                  <p className="mb-4">{treatment.description}</p>
                  
                  <h3 className="font-bold mb-2 text-primary-green">Benefits:</h3>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {treatment.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 bg-primary-green text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-playfair font-bold mb-4">Personalized Treatment Approach</h2>
            <p className="mb-4">
              In Ayurveda, treatments are always personalized based on an individual's unique constitution (Prakriti), current imbalances (Vikriti), age, strength, digestive capacity, and many other factors.
            </p>
            <p>
              For the best results, consult with a qualified Ayurvedic practitioner who can design a treatment protocol specifically for your needs and health goals.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Treatments;