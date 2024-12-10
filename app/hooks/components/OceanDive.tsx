'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
// import { Button } from '@/components/ui/button'
import Bubble from './Bubble'
import Fish from './Fish'
// import useAutoScroll from '../hooks/useAutoScroll'

const OceanDive: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const waterColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['hsl(200, 100%, 50%)', 'hsl(200, 100%, 0%)']
  )

  // const { startAutoScroll, stopAutoScroll } = useAutoScroll(containerRef)

  // useEffect(() => {
  //   if (isPlaying) {
  //     startAutoScroll()
  //   } else {
  //     stopAutoScroll()
  //   }
  // }, [isPlaying, startAutoScroll, stopAutoScroll])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div ref={containerRef} className="h-[300vh] overflow-y-auto relative">
      {/* Water */}
      <motion.div
        className="fixed inset-0 bg-blue-500"
        style={{ backgroundColor: waterColor, top: '0%' }}
      />
      
      {/* Single Fish */}
      <Fish />
      
      {/* Bubbles */}
      <Bubble y={useTransform(scrollYProgress, [0.2, 0.4], ['120vh', '40vh'])} x="20vw" size="small">
        <h2 className="text-xl font-bold">Welcome to the Ocean!</h2>
        <p className="text-sm">Scroll down to explore the depths...</p>
      </Bubble>
      <Bubble y={useTransform(scrollYProgress, [0.3, 0.5], ['140vh', '60vh'])} x="70vw" size="medium">
        <img src="/placeholder.svg?height=150&width=150" alt="Ocean life" className="rounded-full" />
      </Bubble>
      <Bubble y={useTransform(scrollYProgress, [0.5, 0.7], ['160vh', '80vh'])} x="30vw" size="large">
        <video width="200" height="150" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Bubble>
      
      {/* Play/Pause Button
      <div className="fixed bottom-4 left-4 z-10 flex gap-2">
        <Button onClick={handlePlayPause}>
          {isPlaying ? (
            <>
              <Pause className="mr-2 h-4 w-4" /> Pause
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" /> Play
            </>
          )}
        </Button>
      </div>*/}
    </div> 
  )
}

export default OceanDive

