import { useCallback, useRef } from 'react'

const useAutoScroll = (containerRef: React.RefObject<HTMLDivElement>) => {
  const animationRef = useRef<number>()

  const startAutoScroll = useCallback(() => {
    if (!containerRef.current) return

    const scrollStep = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current
        if (scrollTop + clientHeight < scrollHeight) {
          containerRef.current.scrollTop += 1
          animationRef.current = requestAnimationFrame(scrollStep)
        } else {
          stopAutoScroll()
        }
      }
    }

    animationRef.current = requestAnimationFrame(scrollStep)
  }, [containerRef])

  const stopAutoScroll = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = undefined
    }
  }, [])

  return { startAutoScroll, stopAutoScroll }
}

export default useAutoScroll

