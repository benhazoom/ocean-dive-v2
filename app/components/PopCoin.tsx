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
        y: [0, -300, -100],
        x: ["-50%", `${(index % 5 - 2) * 150}%`, `${(index % 5 - 2) * 200}%`],
        opacity: [0, 1, 0],
        scale: [1, 2, 1],
      }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Image
        src="/images/gold-coin2.png"
        alt="Gold Coin"
        width={32}
        height={32}
      />
    </motion.div>
  )
}

