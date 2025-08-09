"use client"

import React, { useRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface CoverflowImage {
  src: string
  alt: string
  title?: string
  description?: string
}

interface CoverflowCarouselProps {
  images: CoverflowImage[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
  className?: string
  slidesPerView?: number
  spaceBetween?: number
}

export function CoverflowCarousel({
  images,
  autoplayDelay = 3000,
  showPagination = true,
  showNavigation = true,
  className,
  slidesPerView = 3,
  spaceBetween = 50,
}: CoverflowCarouselProps) {
  const swiperRef = useRef<any>(null)

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  return (
    <div className={cn("relative w-full", className)}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={
          autoplayDelay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        pagination={
          showPagination
            ? {
                clickable: true,
                dynamicBullets: true,
              }
            : false
        }
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="coverflow-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative group w-full h-full">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-card border border-border shadow-elegant">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay with title and description */}
                {(image.title || image.description) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      {image.title && (
                        <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      )}
                      {image.description && (
                        <p className="text-sm opacity-90">{image.description}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {showNavigation && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-all duration-200 shadow-elegant group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-all duration-200 shadow-elegant group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </>
      )}

      <style jsx global>{`
        .coverflow-swiper {
          padding: 60px 20px 80px 20px;
          overflow: hidden;
        }
        
        .coverflow-swiper .swiper-wrapper {
          align-items: center;
        }
        
        .coverflow-swiper .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 350px;
          height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .coverflow-swiper .swiper-slide > div {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .coverflow-swiper .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }
        
        .coverflow-swiper .swiper-pagination {
          position: relative;
          margin-top: 40px;
          bottom: auto;
        }
        
        .coverflow-swiper .swiper-pagination-bullet {
          background: hsl(var(--muted-foreground));
          opacity: 0.3;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }
        
        .coverflow-swiper .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
          opacity: 1;
          transform: scale(1.2);
        }
        
        .coverflow-swiper .swiper-slide-shadow-left,
        .coverflow-swiper .swiper-slide-shadow-right {
          display: none !important;
        }
        
        .coverflow-swiper .swiper-slide-shadow-coverflow {
          display: none !important;
        }
      `}</style>
    </div>
  )
}