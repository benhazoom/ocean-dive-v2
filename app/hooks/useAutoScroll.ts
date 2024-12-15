import { useCallback, useRef } from 'react';

const useAutoScroll = (scrollYProgress: any, autoScrollSpeed: number) => {
  const animationRef = useRef<number>();
  const autoScrollSpeedRef = useRef<number>(autoScrollSpeed);

  // Update the ref whenever autoScrollSpeed changes
  autoScrollSpeedRef.current = autoScrollSpeed;

  // Define the scroll step logic outside of startAutoScroll
  const scrollStep = useCallback(() => {
    console.log('In scrollstep - current speed ' + autoScrollSpeedRef.current);

    // Get the current scroll position, total scrollable height, and viewport height of the window
    const { scrollY } = window;
    const scrollHeight = document.documentElement.scrollHeight; // Total height of the page content
    const innerHeight = window.innerHeight; // Height of the visible viewport

    // Check if the window has not scrolled to the bottom
    if (scrollY + innerHeight < scrollHeight) {
      window.scrollBy(0, autoScrollSpeedRef.current); // Scroll the screen down by the current speed

      // Calculate the scroll progress as a value between 0 and 1
      const progress = scrollY / (scrollHeight - innerHeight);

      // Update the scrollYProgress to reflect the current scroll position
      scrollYProgress.set(progress); // This will update the progress

      // Continue the scroll animation by requesting the next frame
      animationRef.current = requestAnimationFrame(scrollStep);
    } else {
      stopAutoScroll(); // Stop the scrolling when the bottom is reached
    }
  }, [scrollYProgress]);

  // Method to start auto-scrolling the entire screen
  const startAutoScroll = useCallback(() => {
    console.log('In AutoScroll - current speed ' + autoScrollSpeedRef.current);

    // Start scrolling by calling the scrollStep function in the next animation frame
    animationRef.current = requestAnimationFrame(scrollStep);
  }, [scrollStep]);

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
