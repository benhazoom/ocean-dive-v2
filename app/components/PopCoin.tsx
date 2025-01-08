import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface PopCoinProps {
  index: number
}

export const PopCoin: React.FC<PopCoinProps> = ({ index }) => {
  return (
    <motion.div
      className="absolute bottom-1/2 left-1/2 w-8 h-8"
      initial={{ y: 0, x: "-50%", opacity: 0 }}
      animate={{
        y: [0, -100, -80],
        x: ["-50%", `${(index % 5 - 2) * 30}%`, `${(index % 5 - 2) * 50}%`],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Image
        src="/images/gold-coin.png"
        alt="Gold Coin"
        width={32}
        height={32}
      />
    </motion.div>
  )
}

