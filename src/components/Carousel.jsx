import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Carousel({images = []}){
  return (
    <div className="w-full">
      <Swiper spaceBetween={10} slidesPerView={1}>
        {images.map((src,i)=> (
          <SwiperSlide key={i}>
            <img src={src} alt={`slide-${i}`} className="w-full h-96 object-cover rounded"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
