import React from 'react';

const Video = () => {
  return (
    <div className="h-full w-full relative overflow-hidden">
      {/* Fallback image for when video is loading or fails */}
      <img
        className="h-full w-full object-cover absolute inset-0 z-0"
        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        alt="Creative workspace background"
        loading="lazy"
      />

      {/* Main background video with enhanced mobile coverage */}
      <video
        className="h-full w-full object-cover absolute inset-0 z-10"
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto'
        }}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onError={(e) => {
          console.warn('Video failed to load, falling back to image');
          e.target.style.display = 'none'; // Hide video if it fails to load
        }}
        onLoadStart={() => {
          // Optional: Add loading state handling
        }}
        onCanPlay={() => {
          // Optional: Video is ready to play
        }}
      >
        <source
          src="/video.mp4"
          type="video/mp4"
        />
        {/* Fallback message for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;