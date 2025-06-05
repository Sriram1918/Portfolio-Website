import React from "react";
import "./Testimonials.css";
import Image3 from "../../assets/avatar-3.svg";
import Image4 from "../../assets/avatar-4.svg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: Image4,
      title: "Jayaraj Muthukumarasamy",
      subtitle: "Founder @ JRM IT CONSULTING",
      comment:
        "Sriram demonstrated exceptional dedication and technical skill during his time with us. His ability to understand complex data workflows and contribute to autonomous vehicle software development was impressive. He’s a fast learner and a team player who consistently delivers high-quality work.",
    },
    {
      id: 2,
      image: Image3,
      title: "Rahul Verma",
      subtitle: "Software Engineer @ Infosys",
      comment:
        "Collaborating with Sriram was a great experience. His problem-solving skills and attention to detail really stood out, especially during our AI and data science projects. Always eager to learn and ready to take on challenges headfirst!",
    },
  ];

  return (
    <section className="testimonials container section">
      <h2 className="section__title">Testimonials</h2>

      <Swiper
        className="testimonial__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonial__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
