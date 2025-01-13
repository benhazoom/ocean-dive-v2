'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Bubble from './Bubble'
import Fish from './Fish'
import Whale from './Whale'
import PlayPauseControls from "./ui/play-pause-controls"
import { TreasureChest } from './TreasureChest'
import BlueFish from './BlueFish'
import LogoDisplay from './LogoDisplay'

const OceanDive: React.FC = () => {

  // Scroll to the top of the page on component mount (or refresh)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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
    ['hsl(200, 100%, 70%)', 'hsl(200, 100%, 20%)']
  )


  return (
    <div ref={containerRef} style={{ height: '3000px' }}>
      <title>Ocean Dive</title>

      {/* <div className="overflow-y-auto relative"> */}
      {/* Water */}
      <motion.div
        className="fixed inset-0 bg-blue-500"
        style={{ backgroundColor: waterColor, top: '0%' }}
      />

      {/* Single Fish */}
      <Fish />
      {/* First Bubble Layer */}
      <Bubble y={useTransform(scrollYProgress, [0, 0], ['3vh', '3vh'])} x="15vw" size="xl">
        <h2 className="text-xl font-bold">A little about me</h2>
        <p>add more info</p>
      </Bubble>
      <Bubble y={useTransform(scrollYProgress, [0.0, 0.4], ['30vh', '10vh'])} x="70vw" size="large">
        <h2 className="text-xl font-bold">Welcome to the Ocean!</h2>
        <p className="text-sm">Scroll down to explore the depths...</p>
      </Bubble>
      <Bubble y={useTransform(scrollYProgress, [0.0, 0.4], ['65vh', '0vh'])} x="50vw" size="medium">
        <h3 className="font-bold">A parallax effect</h3>
        <p className="text-sm text-center">is when background and foreground elements move at different speeds as a user scrolls or interacts with a page. This creates an illusion of depth and 3D space, making the experience more dynamic and immersive.</p>
      </Bubble>

      {/* Second Bubble Layer */}
      <Bubble y={useTransform(scrollYProgress, [0.0, 0.4], ['120vh', '100vh'])} x="15vw" size="xl">
        <h1 className="text-2xl font-bold">Web Development</h1>
        <p>For me web development is about connecting people by bridging gaps and creating opportunities for interaction, collaboration, and communities.
          web development transforms the digital space into a medium for connection.
          It empowers individuals and organizations to share ideas, build relationships, and break down barriers of distance and time.
          And im proud to be a part of this movement.
        </p>
      </Bubble>

      //target="_blank" is to open the link in a new tab
      //rel="noopener noreferrer" is a security measure to prevent the new tab from accessing the window.opener property
      <Bubble y={useTransform(scrollYProgress, [0, 0.4], ['155vh', '75vh'])} x="75vw" size="large">
        <h2 className="text-md font-bold text-center">We can connect on one of these platforms</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/logos/github-mark.png" alt="GitHub" className="w-12 h-12" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/logos/Linkedin.png" alt="LinkedIn" className="w-12 h-12" />
          </a>
          <a href="mailto:benhazoom12@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/logos/Gmail.png" alt="Gmail" className="w-12 h-12" />
          </a>
        </div>
      </Bubble>

      <Bubble y={useTransform(scrollYProgress, [0.1, 0.5], ['170vh', '110vh'])} x="53vw" size="large">
        <h2 className="text-md font-bold text-center">See how the background color darkens as we dive down ?</h2>
        <h3 className="text-center">this is thanks to react framer motion, a powerful open-source library for adding animations and gestures to React applications.</h3>
      </Bubble>

      <div style={{ height: '2000px' }}></div>
      <BlueFish>
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">More about my professional experience</h1>
          <p className="text-lg">
            And a secret treasure chest at the end of the page! 🎁
          </p>
        </div>
      </BlueFish>
      {/* <Whale text="More about my professional experience" imageSrc="\images\whale-no-bg.png" offsetY='mt-128 pt-128 ' /> */}





      <Bubble y={useTransform(scrollYProgress, [0, 0], ['10vh', '10vh'])} x="2vw" size="large">
        <h2 className="text-xl font-bold">Technologies and languages</h2>
      </Bubble>
      <Bubble y={useTransform(scrollYProgress, [0, 0], ['30vh', '30vh'])} x="5vw" size="board">
        <LogoDisplay />
      </Bubble>



      {/* Play/Pause Button */}
      <div className="fixed bottom-4 left-4 z-10 flex gap-2">
        <PlayPauseControls>

        </PlayPauseControls>
      </div>

      <Bubble y={useTransform(scrollYProgress, [0, 0], ['460vh', '460vh'])} x="65vw" size="xl">
        <h2 className="text-xl font-bold">Hooks used!</h2>
        <br />
        <br />
        <ul>
          <li><strong>useState:</strong> Manages component states like play/pause (`isPlaying`) and scroll speed (`autoScrollSpeed`).</li>
          <br />
          <li><strong>useEffect:</strong> Executes side effects to start or stop auto-scroll and clean up when the component unmounts.</li>
          <br />
          <li><strong>useCallback:</strong> Memoizes functions (`scrollStep`, `startAutoScroll`, `stopAutoScroll`) to optimize performance.</li>
          <br />
          <li><strong>useRef:</strong> Stores mutable references for animation frames (`animationRef`) and current scroll speed (`autoScrollSpeedRef`).</li>
        </ul>
      </Bubble>

      <div className="relative min-h-[5000px]"> {/* Ensure this container stretches the full height */}
        <Bubble y={useTransform(scrollYProgress, [0, 0], ['480vh', '480vh'])} x="25vw" size="medium">
          <h3 className="text-xl font-bold">10 Clicks to open the chest!</h3>
          <h3 className="text-xl"> and discover the treasure!</h3>
        </Bubble>
        <TreasureChest />
      </div>
    </div>
  )
}

export default OceanDive