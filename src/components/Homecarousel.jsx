import React from 'react';
import Slider from 'react-slick';
import './Homecarousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homecarousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    arrows: false,
    centerPadding: '15%',
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    responsive: [{ breakpoint: 768, settings: { centerPadding: '10%' } }],
  };

  const slides = ["/img/slide1.png", "/img/slide1.png", "/img/slide1.png"];

  return (
    <div className="slick-slider-container">
      <Slider {...settings}>
        {slides.map((src, index) => (
          <div key={index} className="slide">
            <div className="image-container">
              <div className="topicon">
                <img src={src} alt={`Slide ${index + 1}`} />
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Homecarousel;
