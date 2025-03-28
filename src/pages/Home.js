import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center p-8">
      <motion.h1 
        className="text-6xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Abdur Razzaq
      </motion.h1>
      <motion.p 
        className="text-xl mt-4 text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A Frontend Developer specializing in React.js, Tailwind CSS, and modern UI/UX design.
      </motion.p>
      <div className="mt-8 flex space-x-6">
        <Link 
          to="/projects" 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          View Projects
        </Link>
        <Link 
          to="/contact" 
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          Contact Me
        </Link>
      </div>
      <motion.div
        className="mt-12 flex space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="https://github.com/devARcoder" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/abdurrazzaq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
          <i className="fab fa-linkedin"></i>
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
