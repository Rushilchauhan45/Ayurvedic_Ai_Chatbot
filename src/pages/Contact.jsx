import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';



const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-beige py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-playfair font-bold text-primary-green mb-6 text-center">Contact <span className="text-gold">Us</span></h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
          
          <div className="bg-white dark:bg-dark-beige rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-primary-green text-white p-8">
                <h2 className="text-2xl font-playfair font-bold mb-6">Get in Touch</h2>
                <p className="mb-8">
                  Have questions about Ayurveda or our AI-powered wellness solutions? We'd love to hear from you! Fill out the form or use our contact information below.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-gold mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p>123 Wellness Street, Harmony City, HC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-gold mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-gold mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p>info@ayurvedaai.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-bold mb-4">Hours of Operation</h3>
                  <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="text-2xl font-playfair font-bold text-primary-green mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
                  >
                    <p className="font-bold">Thank you for reaching out!</p>
                    <p>We've received your message and will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Ayurvedic Consultation">Ayurvedic Consultation</option>
                        <option value="AI Chatbot Feedback">AI Chatbot Feedback</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="flex items-center justify-center bg-primary-green text-white px-6 py-3 rounded-md hover:bg-secondary-green transition-colors duration-300"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white dark:bg-dark-beige p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-playfair font-bold text-primary-green mb-4">Join Our Community</h2>
            <p className="mb-6">
              Subscribe to our newsletter to receive the latest updates on Ayurvedic wisdom, wellness tips, and exclusive offers.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-green dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
              <button className="bg-gold text-primary-green px-6 py-2 rounded-r-md hover:bg-light-gold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;