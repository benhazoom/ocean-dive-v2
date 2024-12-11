'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import Bubble from './Bubble'
import Fish from './Fish'
import Whale from './Whale'
import useAutoScroll from '../hooks/useAutoScroll'

const OceanDive: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  //uses scroll on the y axis (up/down) to smoothly change between light blue 'hsl(200, 100%, 50%)' to dark blue 'hsl(200, 100%, 0%)'
  const waterColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['hsl(200, 100%, 50%)', 'hsl(200, 100%, 0%)']
  )

  const { startAutoScroll, stopAutoScroll } = useAutoScroll(containerRef)

  useEffect(() => {
    if (isPlaying) {
      startAutoScroll()
    } else {
      stopAutoScroll()
    }
  }, [isPlaying, startAutoScroll, stopAutoScroll])

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
      <Whale text="Here we " imageSrc="\images\whale-no-bg.png" offsetY='mt-128 pt-128 ' />
      {/* Bubbles */}
      {/* doing motion-parallex transformation on the y-axis when scrollYProgress is between 0.3 and 0.5 of the screen height */}
      {/* the transition will be apllaied from 20 viewport height to 20 20 viewport height because we dont want big bubbles to move*/}

      <Bubble y={useTransform(scrollYProgress, [0,0], ['10vh', '10vh'])} x="15vw" size="xl">
        <h2 className="text-xl font-bold">Testing bubble1!</h2>
      </Bubble>
      <Bubble y={useTransform(scrollYProgress, [0.0, 0.4], ['30vh', '10vh'])} x="70vw" size="large">
        <h2 className="text-xl font-bold">Welcome to the Ocean!</h2>
        <p className="text-sm">Scroll down to explore the depths...</p>
      </Bubble>
      <Bubble y={useTransform(scrollYProgress, [0.0, 0.4], ['70vh', '0vh'])} x="50vw" size="medium">
        <h3 className="font-bold">A parallax effect</h3>
        <p className="text-sm text-center">is when background and foreground elements move at different speeds as a user scrolls or interacts with a page. This creates an illusion of depth and 3D space, making the experience more dynamic and immersive.</p>
      </Bubble>



      <Bubble y={useTransform(scrollYProgress, [0,0], ['120vh', '120vh'])} x="60vw" size="xl">
        <h2 className="text-xl font-bold">Testing bubble2!</h2>
      </Bubble>
      <Bubble y={useTransform(scrollYProgress, [0,0], ['220vh', '220vh'])} x="20vw" size="xl">
        <h2 className="text-xl font-bold">Testing bubble3!</h2>
      </Bubble>
      <Bubble y={useTransform(scrollYProgress, [0,0], ['320vh', '320vh'])} x="60vw" size="xl">
        <h2 className="text-xl font-bold">Testing bubble4!</h2>
      </Bubble>
      <Bubble y={useTransform(scrollYProgress, [0,0], ['420vh', '420vh'])} x="20vw" size="xl">
        <h2 className="text-xl font-bold">Testing bubble5!</h2>
      </Bubble>
      <Bubble y={useTransform(scrollYProgress, [0,0], ['520vh', '520vh'])} x="60vw" size="xl">
        <h2 className="text-xl font-bold">Testing bubble6!</h2>
      </Bubble>


      {/* <Bubble y={useTransform(scrollYProgress, [0.3, 0.5], ['140vh', '60vh'])} x="70vw" size="medium">
      <h2 className="text-xl font-bold">First article</h2>
      <p className="text-sm">My bubble</p>      </Bubble>
      <Bubble y={useTransform(scrollYProgress, [0.3, 0.5], ['140vh', '60vh'])} x="50vw" size="xl">
        <img src="/placeholder.svg?height=150&width=150" alt="Ocean life" className="rounded-full" />
      </Bubble>
      <Bubble y={useTransform(scrollYProgress, [0.5, 0.7], ['160vh', '80vh'])} x="30vw" size="large">
        <video width="200" height="150" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Bubble> */}


            {/* Play/Pause Button
      <div className="fixed bottom-4 left-4 z-10 flex gap-2">
        <PlayPauseButton onClick={handlePlayPause}>
          {isPlaying ? (
            <>
              <Pause className="mr-2 h-4 w-4" /> Pause
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" /> Play
            </>
          )}
        </PlayPauseButton>
      </div> */}
      



    </div>
  )
}

export default OceanDive