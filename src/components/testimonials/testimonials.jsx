import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 'Avatar 1',
    avatar: Avatar1,
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel iste ratione tempore, voluptatibus expedita! Dignissimos fugiat optio adipisci mollitia cum ipsam sapiente, earum, voluptatem minima totam quae odio magnam.' 
  },
  {
    id: 'Avatar 2',
    avatar: Avatar2,
    name: 'John Doe 2',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel iste ratione tempore, voluptatibus expedita! Dignissimos fugiat optio adipisci mollitia cum ipsam sapiente, earum, voluptatem minima totam quae odio magnam.' 
  },
  {
    id: 'Avatar 3',
    avatar: Avatar3,
    name: 'John Doe 3',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel iste ratione tempore, voluptatibus expedita! Dignissimos fugiat optio adipisci mollitia cum ipsam sapiente, earum, voluptatem minima totam quae odio magnam.' 
  },
  {
    id: 'Avatar 4',
    avatar: Avatar4,
    name: 'John Doe 4',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel iste ratione tempore, voluptatibus expedita! Dignissimos fugiat optio adipisci mollitia cum ipsam sapiente, earum, voluptatem minima totam quae odio magnam.' 
  }
]


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
      
      {
          data.map(({avatar, name, review, id}, index) => {
            return(
              <SwiperSlide isDuplicate={true}>
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={id}  />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </article>
              </SwiperSlide>
              )
            })
      }
      
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials