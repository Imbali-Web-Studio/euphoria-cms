'use client'
import { useEffect, useRef } from 'react'

const HLS_SRC =
  'https://stream.mux.com/enkPTZU5TZJ2UcuIGbD7Q49I3QYA007Wmp019voyBI5wA.m3u8'

export default function HeroVideo() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playVideo = () => {
      video.play().catch(() => {})
    }

    if (typeof window.Hls !== 'undefined' && window.Hls.isSupported()) {
      const hls = new window.Hls()
      hls.loadSource(HLS_SRC)
      hls.attachMedia(video)
      hls.on(window.Hls.Events.MANIFEST_PARSED, playVideo)

      return () => hls.destroy()
    }

    video.src = HLS_SRC
    video.addEventListener('loadeddata', playVideo, { once: true })
  }, [])

  return (
    <video
      ref={videoRef}
      className="hero-bg-video"
      autoPlay
      muted
      loop
      playsInline
    />
  )
}
