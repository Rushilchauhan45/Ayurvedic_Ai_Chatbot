import React from 'react';
import { motion } from 'framer-motion';

const Diseases = () => {
  const diseases = [
    {
      name: "Arthritis (Sandhivata)",
      description: "Inflammation of joints causing pain and stiffness, often worsening with age.",
      ayurvedicSolutions: [
        "Turmeric and ginger paste applied externally",
        "Ashwagandha supplements to reduce inflammation",
        "Castor oil massage for joint pain",
        "Panchakarma therapy for detoxification"
      ],
      dosha: "Vata"
    },
    {
      name: "Digestive Disorders (Ajirna)",
      description: "Issues with digestion including bloating, gas, and irregular bowel movements.",
      ayurvedicSolutions: [
        "Triphala for digestive health",
        "Cumin, coriander, and fennel tea",
        "Ginger before meals to stimulate digestion",
        "Specific dietary changes based on dosha imbalance"
      ],
      dosha: "Pitta"
    },
    {
      name: "Respiratory Issues (Shwasa Roga)",
      description: "Conditions affecting breathing, including asthma, bronchitis, and allergies.",
      ayurvedicSolutions: [
        "Tulsi (Holy Basil) tea for respiratory health",
        "Steam inhalation with eucalyptus oil",
        "Sitopaladi powder for cough and congestion",
        "Pranayama breathing exercises"
      ],
      dosha: "Kapha"
    },
    {
      name: "Skin Conditions (Twak Roga)",
      description: "Various skin issues including eczema, psoriasis, acne, and rashes.",
      ayurvedicSolutions: [
        "Neem paste for external application",
        "Turmeric and sandalwood face packs",
        "Aloe vera gel for soothing irritated skin",
        "Blood-purifying herbs like Manjistha"
      ],
      dosha: "Pitta"
    },
    {
      name: "Stress and Anxiety (Chinta)",
      description: "Mental and emotional conditions causing worry, tension, and sleep disturbances.",
      ayurvedicSolutions: [
        "Ashwagandha for stress reduction",
        "Brahmi for mental clarity",
        "Jatamansi for anxiety and sleep",
        "Shirodhara therapy (oil pouring on forehead)"
      ],
      dosha: "Vata"
    },
    {
      name: "Diabetes (Prameha)",
      description: "Metabolic disorder characterized by high blood sugar levels.",
      ayurvedicSolutions: [
        "Bitter gourd juice to regulate blood sugar",
        "Fenugreek seeds soaked overnight",
        "Gymnema sylvestre (Gurmar) tea",
        "Amla for its antioxidant properties"
      ],
      dosha: "Kapha"
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
          <h1 className="text-4xl font-playfair font-bold text-primary-green mb-6 text-center">Diseases & <span className="text-gold">Ayurvedic Solutions</span></h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
          
          <p className="text-lg text-center mb-10">
            Ayurveda offers holistic approaches to treating various ailments by addressing their root causes rather than just symptoms. Below are common health conditions and their traditional Ayurvedic remedies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diseases.map((disease, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-beige rounded-lg shadow-lg overflow-hidden"
              >
                <div className="bg-primary-green text-white p-4">
                  <h2 className="text-xl font-playfair font-bold">{disease.name}</h2>
                  <span className="text-sm bg-gold text-primary-green px-2 py-1 rounded-full">
                    {disease.dosha} Dosha
                  </span>
                </div>
                
                <div className="p-4">
                  <p className="mb-4">{disease.description}</p>
                  
                  <h3 className="font-bold mb-2 text-primary-green">Ayurvedic Solutions:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {disease.ayurvedicSolutions.map((solution, idx) => (
                      <li key={idx}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 bg-white dark:bg-dark-beige p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-playfair font-bold text-primary-green mb-4">Important Note</h2>
            <p className="mb-4">
              The information provided here is for educational purposes only and is not intended to replace professional medical advice. Always consult with a qualified Ayurvedic practitioner before starting any new treatment.
            </p>
            <p>
              Ayurvedic treatments are highly personalized based on an individual's unique constitution (Prakriti) and current imbalances (Vikriti). What works for one person may not be suitable for another, even with the same condition.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Diseases;