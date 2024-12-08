import React from 'react'
import { motion } from 'framer-motion'

const Fish: React.FC = () => {
  return (
    <motion.div
      className="fixed pointer-events-none"
      initial={{ x: '-100%', y: '50%' }}
      animate={{
        x: ['0%', '100%', '100%', '0%'], // Move from left to right and back
        y: ['30%', '70%', '40%', '60%'], // Y-axis swimming movement
        rotate: [0, 10, -10, 5, -5, 0], // Rotation effect
      }}
      transition={{
        x: { duration: 10, repeat: Infinity, ease: 'linear' }, // Horizontal movement
        y: { duration: 8, repeat: Infinity, ease: 'easeInOut' }, // Vertical movement
        rotate: { duration: 6, repeat: Infinity, ease: 'linear' }, // Rotation effect
      }}
    >
      <svg width="150" height="90" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M45 15C45 20 35 30 25 30C15 30 0 20 0 15C0 10 15 0 25 0C35 0 45 10 45 15Z"
          fill="#FF9800"
          animate={{
            d: [
              "M45 15C45 20 35 30 25 30C15 30 0 20 0 15C0 10 15 0 25 0C35 0 45 10 45 15Z",
              "M45 15C45 20 38 28 25 28C12 28 0 20 0 15C0 10 12 2 25 2C38 2 45 10 45 15Z",
              "M45 15C45 20 35 30 25 30C15 30 0 20 0 15C0 10 15 0 25 0C35 0 45 10 45 15Z",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="35" cy="10" r="3" fill="white"
          animate={{ cy: [10, 8, 10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M5 15 L15 10 L15 20 Z"
          fill="#FF5722"
          animate={{
            d: [
              "M5 15 L15 10 L15 20 Z",
              "M5 15 L12 12 L12 18 Z",
              "M5 15 L15 10 L15 20 Z",
            ],
          }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
};

export default Fish

