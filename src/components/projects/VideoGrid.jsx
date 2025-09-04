import React from 'react'
import VideoCard from './VideoCard'

const VideoGrid = ({ videos, gridCols, aspectRatio }) => {
  return (
    <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${gridCols.replace('gap-8 lg:gap-12', '').replace('gap-8', '').trim()}`}>
      {videos.map((video, index) => (
        <VideoCard 
          key={index}
          videoId={video.videoId}
          aspectRatio={aspectRatio}
          index={index}
        />
      ))}
    </div>
  )
}

export default VideoGrid