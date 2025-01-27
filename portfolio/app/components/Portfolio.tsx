"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Github, Mail, Linkedin } from 'lucide-react';

const styles = {
  gradientText: 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600',
  card: 'backdrop-blur-lg bg-opacity-10 bg-white border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300',
  button: 'px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-all duration-300',
  iconButton: 'p-2 rounded-full hover:bg-white/10 transition-all duration-300'
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const backgroundVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="fixed top-4 right-4 flex gap-4">
        <a href="mailto:your@email.com" className={styles.iconButton}>
          <Mail />
        </a>
        <a href="https://linkedin.com/in/your-profile" className={styles.iconButton}>
          <Linkedin />
        </a>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen flex flex-col justify-center items-center p-4 relative overflow-hidden"
      >
        <motion.div 
          variants={backgroundVariants}
          animate="animate"
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
        <motion.div 
          variants={backgroundVariants}
          animate="animate"
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
        
        <h1 className={`text-6xl font-bold mb-4 text-center ${styles.gradientText}`}>Charana Randula</h1>
        <h2 className="text-2xl text-gray-400 mb-8">Electrical & Electronics Engineer</h2>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="cursor-pointer"
          onClick={() => {
            const contentElement = document.getElementById('content');
            if (contentElement) {
              contentElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <ChevronDown size={48} className="text-gray-400 hover:text-white transition-colors duration-300" />
        </motion.div>
      </motion.div>

      <div id="content" className="container mx-auto px-4 py-16">
        <div className="flex gap-8 mb-16 justify-center">
          {['about', 'experience', 'projects'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`text-xl capitalize transition-all duration-300 hover:text-blue-400 ${
                activeSection === section ? styles.gradientText : 'text-gray-500'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {activeSection === 'about' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={styles.card}>
                <h3 className={`text-4xl font-bold mb-6 ${styles.gradientText}`}>About Me</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Graduate from Curtin University with a degree in Electrical and Electronics Engineering.
                  Passionate about [your interests/specializations].
                </p>
              </div>
              <div className={`${styles.card} overflow-hidden relative h-64 md:h-auto`}>
                <Image 
                  src="/your-image.jpg"
                  alt="Profile"
                  fill
                  className="object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="space-y-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className={styles.card}>
                  <h3 className={`text-2xl font-bold mb-2 ${styles.gradientText}`}>Position {index + 1}</h3>
                  <p className="text-gray-400 mb-4">Company • Duration</p>
                  <p className="text-gray-300">Description of responsibilities and achievements</p>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((_, index) => (
                <motion.div
                  key={index}
                  className={styles.card}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className={`text-2xl font-bold mb-4 ${styles.gradientText}`}>Project {index + 1}</h3>
                  <p className="text-gray-300 mb-4">Project description</p>
                  <div className="flex gap-4">
                    <a href="#" className={`${styles.button} inline-flex items-center gap-2`}>
                      <ExternalLink size={20} /> Live Demo
                    </a>
                    <a href="#" className={`${styles.button} inline-flex items-center gap-2`}>
                      <Github size={20} /> Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;