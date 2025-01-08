import React from 'react'
import { motion, MotionValue } from 'framer-motion'
import { u } from 'motion/react-client'

interface BubbleProps {
  children: React.ReactNode
  y: MotionValue<string>
  x: string
  size?: 'small' | 'medium' | 'large' | 'xl' | 'board'
}

const Bubble: React.FC<BubbleProps> = ({ children, y, x, size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-[9rem] w-[9rem]',
    medium: 'h-[18rem] w-[18rem]',
    large:'h-[22rem] w-[22rem]',
    xl:'h-[36rem] w-[36rem]',
    board:'h-[60rem] w-[90vw]'
  }

  return (
    <motion.div
      className={`bg-white bg-opacity-50 rounded-full p-4 backdrop-blur-md flex flex-col items-center justify-center text-center ${sizeClasses[size]}`}
      style={{
        y,
        x,
        scale: 1,
        rotate: 0,
      }}
      whileHover={size != "board" ? { scale: 1.1, rotate: 5 }: undefined}
    >
      {children}
    </motion.div>
  )
}

export default Bubble

