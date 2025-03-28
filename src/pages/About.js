import React from "react";
import { motion } from "framer-motion";
import profile from '../assets/profile.png'
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-16 lg:px-32">
      {/* Heading */}
      <motion.h2
        className="text-5xl font-extrabold text-gray-900 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About <span className="text-green-500">Me</span>
      </motion.h2>

      {/* Description Section */}
      <motion.div
        className="mt-8 grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Image Section */}
        <motion.img
          src={profile} // Replace with your image
          alt="Profile"
          className="rounded-xl w-full md:max-w-md mx-auto"
          whileHover={{ scale: 1.05 }}
        />

        {/* Bio Section */}
        <div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hi, I'm <span className="font-bold text-green-600">Abdur Razzaq</span>, a passionate
            front-end developer specializing in **React.js, JavaScript, and Tailwind CSS**.  
            I love crafting beautiful and **interactive web experiences** with smooth animations 
            and modern UI/UX principles.
          </p>
          <p className="text-gray-700 mt-4">
            My goal is to create **efficient, scalable, and user-friendly applications** that make a difference. 
            I keep up with the latest trends in web development to deliver the best solutions.
          </p>

          {/* Download Resume Button */}
          <motion.a
            href="/resume.pdf" // Replace with your resume file
            download
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.1 }}
          >
            📄 Download Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h3 className="text-3xl font-bold text-gray-900">My Skills</h3>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "HTML5", icon: "🌐" },
            { name: "CSS3", icon: "🎨" },
            { name: "JavaScript", icon: "⚡" },
            { name: "React.js", icon: "⚛️" },
            { name: "Tailwind CSS", icon: "💨" },
            { name: "Bootstrap", icon: "📦" },
            { name: "Git & GitHub", icon: "🔧" },
            { name: "Framer Motion", icon: "🎥" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-4xl">{skill.icon}</span>
              <p className="mt-2 font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
