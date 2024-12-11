import React from 'react';

interface Whale {
  text: string;
  imageSrc: string;
  offsetY: string;
}

const Whale: React.FC<Whale> = ({ text, imageSrc,offsetY }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center ${offsetY} `}>
      <div className="relative inline-block">
        <img src="/images/whale-no-bg.png" alt="Whale" className="w-full h-auto rotate-20" style={{ transform: 'rotate(-10deg)' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold shadow-lg px-4 py-2 text-center">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Whale;
