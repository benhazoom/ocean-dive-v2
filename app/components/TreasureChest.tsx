"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Bubble from './Bubble'
import { PopCoin } from './PopCoin'
import Image from 'next/image'
import { useTransform } from 'framer-motion'
import { div } from 'motion/react-client'
import { useMotionValue } from "framer-motion";

export const TreasureChest: React.FC = () => {
  const [clickCount, setClickCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [popCoins, setPopCoins] = useState<number[]>([])
  const nullMotionValue = useMotionValue(0); // Create a motion value for the x position

  useEffect(() => {
    if (clickCount >= 10) {
      setIsOpen(true)
    }
  }, [clickCount])

  const handleClick = () => {
    if (isOpen) return
    setClickCount(prev => prev + 1)
    setPopCoins(prev => [...prev, Date.now()])
    setTimeout(() => {
      setPopCoins(prev => prev.slice(1))
    }, 1000)
  }

  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 aspect-[2/1]">
      <motion.div
        className="relative w-full h-full"
        onHoverStart={() => setShowBubble(true)}
        onHoverEnd={() => setShowBubble(false)}
      >
        <motion.div
          className="w-full h-full cursor-pointer relative"
          onClick={handleClick}
          animate={{ scale: isOpen ? 1.1 : 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Image
            src="/images/1closed-removed-bg.png"
            alt="Closed Treasure Chest"
            layout="fill"
            objectFit="contain"
            className={isOpen ? 'opacity-0' : 'opacity-100'}
          // transition={{ duration: 0.5 }}
          />
          <Image
            src="/images/1opened-removed-bg.png"
            alt="Open Treasure Chest"
            layout="fill"
            objectFit="contain"
            className={isOpen ? 'opacity-100' : 'opacity-0'}
          // transition={{ duration: 0.5 }}
          />
          {popCoins.map((id, index) => (
            <PopCoin key={id} index={index} />
          ))}
        </motion.div>
      </motion.div>
      {/* <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
        Clicks: {clickCount}
      </div> */}
    </div>
  )
}

