"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./Button2"
import { Play, Pause } from 'lucide-react'

interface PlayPauseControlsProps {
  onClick?: () => void;
  // speed: number;
}

const PlayPauseControls: React.FC<PlayPauseControlsProps> = ({ onClick }) => {
// export default function PlayPauseControls() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [autoScrollSpeed,setAutoScrollSpeed] = useState(1);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (onClick) onClick();
  }

  //forcing autoScrollSpeed to be between 1-5
  const handleSlower = () => {
    if(autoScrollSpeed>1)
      setAutoScrollSpeed(autoScrollSpeed-1);
    // console.log("Slowing down - current speed "+autoScrollSpeed)
  }
  
  const handleFaster = () => {
    if(autoScrollSpeed<5)
      setAutoScrollSpeed(autoScrollSpeed+1);
    // console.log("Speeding up - current speed "+autoScrollSpeed)
  }

  return (
    <div className="flex items-center justify-center space-x-2 p-4">
      <motion.div whileTap={{ scale: 0.95 }}>
        <Button
          variant="outline"
          size="icon"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className="flex space-x-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSlower}
                aria-label="Dive Slower"
                className="whitespace-nowrap"
              >
                Dive Slower
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={handleFaster}
                aria-label="Dive Faster"
                className="whitespace-nowrap"
              >
                Dive Faster
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PlayPauseControls;


