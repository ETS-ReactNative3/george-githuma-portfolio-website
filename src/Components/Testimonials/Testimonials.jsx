import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../Assets/Avatar-1.jpeg'
import AVTR2 from '../../Assets/Avatar-2.jpeg'
import AVTR3 from '../../Assets/Avatar-3.jpeg'
import AVTR4 from '../../Assets/Avatar-4.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


//Add array of testimonial onbjects to generate testimony dynamicaly
const data = [
  {
    avatar: AVTR1,
    name: 'Randy Davo',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta odio debitis sequi dignissimos dicta nesciunt accusantium laboriosam accusamus veniam assumenda omnis, est, esse ducimus corrupti modi sunt illum in.'
  },

  {
    avatar: AVTR2,
    name: 'Chenai Chair',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta odio debitis sequi dignissimos dicta nesciunt accusantium laboriosam accusamus veniam assumenda omnis, est, esse ducimus corrupti modi sunt illum in.'
  },

  {
    avatar: AVTR3,
    name: 'Twahir Hussein',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta odio debitis sequi dignissimos dicta nesciunt accusantium laboriosam accusamus veniam assumenda omnis, est, esse ducimus corrupti modi sunt illum in.'
  },

  {
    avatar: AVTR4,
    name: 'Nermina Ljevakovic',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta odio debitis sequi dignissimos dicta nesciunt accusantium laboriosam accusamus veniam assumenda omnis, est, esse ducimus corrupti modi sunt illum in.'
  }

]

//Apply array

const Testimonials = () => {
  //Add headings
  //Create div for testimonial container with article inside
  //Add Image, client name and review
  //Duplicate article
  return (
    <section id='Testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials