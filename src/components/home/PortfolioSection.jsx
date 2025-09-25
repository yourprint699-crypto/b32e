import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

// Video data - using existing portfolio videos
const teasers = [
  { videoId: 'QGsa5QB5gK4' },
  { videoId: '5fR4MErzYeI' },
  { videoId: '2qFnRXpSFn8' },
  { videoId: '7bZ5MKY6pfU' },
  { videoId: 'QstSPHan4oE' },
  { videoId: 'HMJyD-kPWek' },
  { videoId: 'zd5De3LAMQc' },
  { videoId: 'YM1TZnbcbOs' },
  { videoId: 'pRya97qUJMs' },
  { videoId: 'AqqGxOrwv_g' }
]

const highlights = [
  { videoId: '2qFnRXpSFn8' },
  { videoId: 'dRjCKw7YonM' },
  { videoId: 'L9PMwOelcRk' },
  { videoId: 'qeMFqkcPYcg' },
  { videoId: 'SQoA_wjmE9w' },
  { videoId: 'ZbZSe6N_BXs' },
  { videoId: 'HEXWRTEbj1I' },
  { videoId: 'U9t-slLl69E' },
  { videoId: 'iik25wqIuFo' },
  { videoId: 'C0DPdy98e4c' }
]

// Video Card Component with hover effects and lazy loading
const VideoCard = ({ video, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const cardRef = useRef(null)

  // Generate thumbnail URL from YouTube video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`
  
  // Randomize aspect ratios for masonry effect (but keep reasonable ratios)
  const aspectRatios = ['aspect-video', 'aspect-[4/5]', 'aspect-[3/4]', 'aspect-square']
  const aspectRatio = aspectRatios[index % aspectRatios.length]

  useGSAP(() => {
    if (isVisible) {
      gsap.fromTo(cardRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.1
        }
      )
    }
  }, [isVisible, index])

  return (
    <div 
      ref={cardRef}
      className={`group relative ${aspectRatio} video-glass gpu-accelerated cursor-pointer overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail Image (shown by default) */}
      <img
        src={thumbnailUrl}
        alt={`Portfolio video ${index + 1}`}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
          isHovered && isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />

      {/* YouTube Video (shown on hover) */}
      {isVisible && (
        <iframe
          className={`absolute inset-0 w-full h-full transition-all duration-500 ${
            isHovered && isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          src={`https://www.youtube.com/embed/${video.videoId}?autoplay=${isHovered ? 1 : 0}&mute=1&loop=1&playlist=${video.videoId}&controls=1&modestbranding=1&rel=0&showinfo=0`}
          title={`Portfolio video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      )}

      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-all duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />

      {/* Play Icon Overlay */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
        isHovered ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-white border-y-[6px] sm:border-y-[8px] border-y-transparent ml-1"></div>
        </div>
      </div>

      {/* Hover Transform Effect */}
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" />
    </div>
  )
}

// Masonry Grid Component
const MasonryGrid = ({ videos, isVisible }) => {
  return (
    <div className="masonry-container relative">
      {/* Top Fade Gradient */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none z-10" />
      
      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none z-10" />

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 auto-rows-max">
        {videos.map((video, index) => (
          <VideoCard 
            key={`${video.videoId}-${index}`}
            video={video}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  )
}

const PortfolioSection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  
  // Combine and limit videos for 2-row masonry (adjust count based on screen size)
  const allVideos = [...teasers.slice(0, 6), ...highlights.slice(0, 8)] // 14 videos total
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // Section title animation
    gsap.fromTo('.portfolio-title',
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.portfolio-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Trigger masonry grid animation when section comes into view
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 75%',
      onEnter: () => setIsVisible(true),
      once: true
    })
  }, [])

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="min-h-screen section-dark-alt text-white relative depth-3 section-transition"
    >
      <div className="cinematic-overlay"></div>
      <div className="container mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8">
          <h2 className="portfolio-title font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow">
            Our Portfolio
          </h2>
          <div className="floating-panel-dark max-width-content">
            <p className="font-[font1] text-responsive leading-relaxed text-layer-2">
              Découvrez notre collection de films de mariage cinématographiques
            </p>
          </div>
        </div>

        {/* Masonry Video Grid */}
        <div className="portfolio-showcase component-margin max-width-wide">
          <MasonryGrid videos={allVideos} isVisible={isVisible} />
        </div>

        {/* Portfolio Button */}
        <div className="text-center component-margin">
          <Link 
            to="/projects"
            className="btn-pill btn-primary h-12 sm:h-16 lg:h-20 px-8 sm:px-12 lg:px-16 inline-flex items-center justify-center group"
          >
            <span className="font-[font2] text-base sm:text-xl lg:text-2xl">
              View Our Portfolio
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection