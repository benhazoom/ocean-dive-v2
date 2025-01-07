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
    small: 'h-[10rem] w-[10rem]',
    medium: 'h-[20rem] w-[20rem]',
    large:'h-[25rem] w-[25rem]',
    xl:'h-[40rem] w-[40rem]',
    board:'h-[60rem] w-[90vw]'
  }

  return (
    <motion.div
      className={`absolute bg-white bg-opacity-50 rounded-full p-4 backdrop-blur-md flex flex-col items-center justify-center text-center ${sizeClasses[size]}`}
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

