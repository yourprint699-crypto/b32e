import React from 'react';

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center relative depth-4 px-4 flex-1 flex items-center justify-center">
      <div className="w-full">
        <div className="text-[12vw] sm:text-[9vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[10vw] sm:leading-[7.5vw] lg:leading-[8vw] text-layer-3 mb-2 sm:mb-0">
          You do the work
        </div>
        <div className="text-[12vw] sm:text-[9vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[10vw] sm:leading-[7.5vw] lg:leading-[8vw] text-layer-3 flex-wrap justify-center mb-2 sm:mb-0">
          <span>we</span>
          <div className="h-[8vw] w-[20vw] sm:h-[7vw] sm:w-[16vw] rounded-full overflow-hidden mx-2 sm:mx-2 glass glow-accent flex-shrink-0 my-1 sm:my-0">
            <video
              className="h-full w-full object-cover hero-inline-video"
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
                // iOS Safari specific optimizations
                WebkitTransform: 'translateZ(0)',
                transform: 'translateZ(0)',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden'
              }}
              // CRITICAL: iOS Safari attributes in correct order
              muted
              defaultMuted
              autoPlay
              playsInline
              loop
              preload="auto"
              webkit-playsinline
              x-webkit-airplay="allow"
              onLoadedData={(e) => {
                // Enhanced iOS video handling
                const video = e.target;
                // Ensure muted state for autoplay compliance
                video.muted = true;
                video.volume = 0;
                video.playsInline = true;
                
                const playPromise = video.play();
                if (playPromise !== undefined) {
                  playPromise.catch(error => {
                    console.warn('Inline video autoplay failed:', error.name);
                    // Fallback: reload video element
                    setTimeout(() => {
                      video.load();
                      video.play().catch(e => console.warn('Inline video reload failed:', e));
                    }, 50);
                  });
                }
              }}
              onError={(e) => {
                console.warn('Inline video error:', e.target.error);
              }}
            >
              {/* Multiple sources for cross-browser compatibility */}
              <source src="/video-720.mp4" type="video/mp4" media="(max-width: 767px)" />
              <source src="/video.webm" type="video/webm" />
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
          <span>do the</span>
        </div>
        <div className="text-[12vw] sm:text-[9vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[10vw] sm:leading-[7.5vw] lg:leading-[8vw] text-layer-3">
          stitches
        </div>
      </div>
    </div>
  );
};

export default HomeHeroText;