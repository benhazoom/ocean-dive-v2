import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const GoldCoins: React.FC = () => {
  return (
    <motion.div
      className="absolute bottom-1/4 left-1/4 w-1/2 h-1/2"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Image
        src="/placeholder.svg?height=150&width=300"
        alt="Gold Coins"
        layout="fill"
        objectFit="contain"
      />
    </motion.div>
  )
}

