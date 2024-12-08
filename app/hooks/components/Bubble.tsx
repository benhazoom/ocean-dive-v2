import React from 'react'
import { motion, MotionValue } from 'framer-motion'

interface BubbleProps {
  children: React.ReactNode
  y: MotionValue<string>
  x: string
  size?: 'small' | 'medium' | 'large'
}

const Bubble: React.FC<BubbleProps> = ({ children, y, x, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-48 h-48',
    large: 'w-64 h-64'
  }

  return (
    <motion.div
      className={`absolute bg-white bg-opacity-50 rounded-full p-4 backdrop-blur-md flex items-center justify-center ${sizeClasses[size]}`}
      style={{
        y,
        x,
        scale: 1,
        rotate: 0,
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      {children}
    </motion.div>
  )
}

export default Bubble

