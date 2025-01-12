'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface BlueFishProps {
  children: React.ReactNode
}

const BlueFish: React.FC<BlueFishProps> = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const swimAnimation = {
    x: ['0%', '5%', '0%'],
    y: ['0%', '2%', '0%'],
    rotate: [0, 1, -1, 0],
  }

  return (
    <div ref={ref} className="relative w-full min-h-[500px] overflow-hidden rounded-3xl">

      {/* Fish shape container */}
      <motion.div
        className="absolute inset-0 p-8"
        animate={isInView ? swimAnimation : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <div className="relative w-full h-full">
          {/* Fish body SVG as a container background */}
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 340 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Fish body */}
            <motion.path
              d="M300 60 C300 90 250 120 170 120 C90 120 20 90 20 60 C20 30 90 0 170 0 C250 0 300 30 300 60"
              fill="#0369a1"
              fillOpacity="0.9"
              animate={
                isInView
                  ? {
                      d: [
                        "M300 60 C300 90 250 120 170 120 C90 120 20 90 20 60 C20 30 90 0 170 0 C250 0 300 30 300 60",
                        "M300 60 C300 85 250 110 170 110 C90 110 20 85 20 60 C20 35 90 10 170 10 C250 10 300 35 300 60",
                        "M300 60 C300 90 250 120 170 120 C90 120 20 90 20 60 C20 30 90 0 170 0 C250 0 300 30 300 60",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            

            {/* Tail */}
            <motion.path
              d="M20 60 L40 40 L40 80 Z"
              fill="#0284c7"
              animate={
                isInView
                  ? {
                      d: [
                        "M20 60 L40 40 L40 80 Z",
                        "M20 60 L37 45 L37 75 Z",
                        "M20 60 L40 40 L40 80 Z",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Eye */}
            <motion.circle
              cx="260"
              cy="50"
              r="5"
              fill="white"
              animate={isInView ? { cy: [50, 48, 50] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>

          {/* Content container */}
          <motion.div
            className="relative z-10 h-full flex items-center justify-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default BlueFish

