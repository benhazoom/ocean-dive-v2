import { useCallback, useRef } from 'react'

const useAutoScroll = (scrollYProgress: any) => {
  const animationRef = useRef<number>();

  // Method to start auto-scrolling the entire screen
  const startAutoScroll = useCallback(() => {
    const scrollStep = () => {
      // Get the current scroll position, total scrollable height, and viewport height of the window
      const { scrollY } = window;
      const scrollHeight = document.documentElement.scrollHeight; // Total height of the page content
      const innerHeight = window.innerHeight; // Height of the visible viewport

      // Check if the window has not scrolled to the bottom
      if (scrollY + innerHeight < scrollHeight) {
        window.scrollBy(0, 10); // Scroll the screen down by 1px

        // Calculate the scroll progress as a value between 0 and 1
        const progress = scrollY / (scrollHeight - innerHeight);
        
        // Update the scrollYProgress to reflect the current scroll position
        scrollYProgress.set(progress); // This will update the progress

        // Continue the scroll animation by requesting the next frame
        animationRef.current = requestAnimationFrame(scrollStep);
      } else {
        stopAutoScroll(); // Stop the scrolling when the bottom is reached
      }
    };

    // Start scrolling by calling the scrollStep function in the next animation frame
    animationRef.current = requestAnimationFrame(scrollStep);
  }, [scrollYProgress]);

  // Method to stop auto-scrolling
  const stopAutoScroll = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current); // Cancel ongoing scroll animation
      animationRef.current = undefined; // Clear the animation reference
    }
  }, []);

  return { startAutoScroll, stopAutoScroll };
};

export default useAutoScroll;
