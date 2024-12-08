import React from 'react';
import { motion } from 'framer-motion';

const Fish: React.FC = () => {
  return (
    <motion.div
      // Fixed position, non-interactive
      className="fixed pointer-events-none"
      initial={{ x: '-100%', y: '50%' }} // Start off-screen to the left, vertically centered
      animate={{
        x: ['0%', '2000%', '2000%', '0%'], // Swim horizontally back and forth
        y: ['30%', '70%', '40%', '60%'], // Simulate vertical swimming motion
        rotate: [0, 10, -10, 5, -5, 0], // Gentle rotation for a realistic swimming effect
      }}
      transition={{
        x: { duration: 300, repeat: Infinity, ease: 'linear' }, // Constant horizontal movement
        y: { duration: 80, repeat: Infinity, ease: 'easeInOut' }, // Smooth vertical oscillation
        rotate: { duration: 6, repeat: Infinity, ease: 'linear' }, // Continuous rotation
      }}
    >
      <svg width="100%" height="90" viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg">
        {/* Fish body morphing animation */}
        <motion.path
          d="M45 15C45 20 35 30 25 30C15 30 0 20 0 15C0 10 15 0 25 0C35 0 45 10 45 15Z"
          fill="#FF9800"
          animate={{
            d: [
              // 'd' defines the fish body shape; animates to morph the fish body dynamically
              "M45 15C45 20 35 30 25 30C15 30 0 20 0 15C0 10 15 0 25 0C35 0 45 10 45 15Z",
              "M45 15C45 20 38 28 25 28C12 28 0 20 0 15C0 10 12 2 25 2C38 2 45 10 45 15Z",
              "M45 15C45 20 35 30 25 30C15 30 0 20 0 15C0 10 15 0 25 0C35 0 45 10 45 15Z",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Fish eye with subtle movement */}
        <motion.circle
          cx="35" cy="10" r="3" fill="white"
          animate={{ cy: [10, 8, 10] }} // Eye moves slightly up and down
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Fish tail wagging animation */}
        <motion.path
          d="M5 15 L15 10 L15 20 Z"
          fill="#FF5722"
          animate={{
            d: [
              // 'd' for the tail changes between keyframes to simulate tail wagging
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

export default Fish;
