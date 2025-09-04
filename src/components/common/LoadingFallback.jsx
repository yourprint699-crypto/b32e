import React from 'react'

const LoadingFallback = () => {
  return (
    <div className='min-h-screen min-h-[100dvh] section-dark flex items-center justify-center px-4'>
      <div className="cinematic-overlay"></div>
      <div className='floating-panel-dark text-center space-y-6 sm:space-y-8'>
        <div className='loading-responsive border-[#D3FD50] border-t-transparent rounded-full animate-spin mx-auto glow-accent animate-glow-pulse'></div>
        <p className='font-[font2] text-lg sm:text-xl uppercase text-layer-2 text-glow'>Loading...</p>
      </div>
    </div>
  )
}

export default LoadingFallback