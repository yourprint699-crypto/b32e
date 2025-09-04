import React from 'react';
import Video from './Video';

const HomeHeroText = () => {
  return (
    <div className="font-[font1] mt-24 sm:mt-32 lg:mt-0 pt-16 sm:pt-24 lg:pt-32 text-center relative depth-4 px-4">
      <div className="text-[8vw] sm:text-[9vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[7vw] sm:leading-[7.5vw] lg:leading-[8vw] text-layer-3">
        You do the work
      </div>
      <div className="text-[8vw] sm:text-[9vw] lg:text-[9.5vw] justify-center flex items-start uppercase leading-[7vw] sm:leading-[7.5vw] lg:leading-[8vw] text-layer-3 flex-wrap sm:flex-nowrap">
        we
        <div className="h-[6vw] w-[14vw] sm:h-[7vw] sm:w-[16vw] rounded-full -mt-1 sm:-mt-2 lg:-mt-3 overflow-hidden mx-1 sm:mx-2 glass glow-accent flex-shrink-0">
          <Video />
        </div>
        do the
      </div>
      <div className="text-[8vw] sm:text-[9vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[7vw] sm:leading-[7.5vw] lg:leading-[8vw] text-layer-3">
        stitches
      </div>
    </div>
  );
};

export default HomeHeroText;
