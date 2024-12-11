import React, { useState } from 'react';

interface PlayPauseButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ onClick, children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
    >
      {children}
    </button>
  );
};

export default PlayPauseButton;
