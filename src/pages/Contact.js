import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8">
      <motion.h2 
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>
      <p className="text-gray-300 mt-4 text-lg">Let's collaborate! Feel free to reach out.</p>

      <motion.form 
        onSubmit={handleSubmit} 
        className="mt-8 bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full p-3 mb-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full p-3 mb-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          className="w-full p-3 mb-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          required 
        ></textarea>
        <motion.button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Links */}
      <motion.div 
        className="mt-6 flex space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <a href="https://github.com/devARcoder" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-3xl">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/abdurrazzaq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-3xl">
          <i className="fab fa-linkedin"></i>
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
