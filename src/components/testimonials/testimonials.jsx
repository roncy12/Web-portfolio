import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 'Avatar 1',
    avatar: Avatar1,
    name: 'Always Open Commerce I.T. Solutions',
    review: 'March 2021 - April 2024' 
  }
]


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          {data.map(({ avatar, name, review, id }) => (
            <SwiperSlide key={id} isDuplicate={true}>
              <article className="testimonial swiper-slide">
                <div className="client__avatar">
                  <img src={avatar} alt={id} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials