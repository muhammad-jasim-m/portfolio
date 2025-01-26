import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic2 from "../../img/my.jpg";
import profilePic1 from "../../img/amar.jpg";


const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:

        "As someone who knows jasim, I’m impressed by his web development and design skills. His work is top-notch, with exceptional quality and attention to detail. If you're looking for someone who truly excels, jasim is your top choice.",
    },
    
    {
      img: profilePic2,
      review:
        "I’m extremely happy with jasim work. He’s a skilled developer who delivered on time and exceeded expectations. His expertise made the process smooth and efficient. I look forward to working with him again.",
    },
    
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me.</span>
      {/* <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div> */}

      </div>
      <Swiper id="testimonialslides"
        // install Swiper modules
        modules={[Pagination]}

        grabCursor={true}
        loop={true}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
