import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

export default function MarqueeGallery({ items = [] }){
  return (
    <div className="gradient-edge">
      <Swiper
        className="gallery-swiper"
        modules={[Autoplay, FreeMode]}
        slidesPerView={'auto'}
        spaceBetween={16}
        freeMode
        loop
        speed={5000}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
        allowTouchMove
      >
        {items.map((g, i) => (
          <SwiperSlide key={i}>
            <div className="gallery-card">
              <img src={g.src} alt={g.caption || 'GRI gallery'} loading="lazy" />
              <div className="caption">
                <span>{g.caption}</span>
                <span>→</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
