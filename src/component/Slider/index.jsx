import React from "react";
import Slider from "react-slick";
import "./index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/carousel-images/1.jpg";
import img2 from "../../assets/carousel-images/2.jpg";
import img3 from "../../assets/carousel-images/3.jpg";
import img4 from "../../assets/carousel-images/4.jpg";
import img5 from "../../assets/carousel-images/5.jpg";
import img6 from "../../assets/carousel-images/6.jpg";

function SimpleSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next-arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
        aria-label="Next slide"
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev-arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
        aria-label="Previous slide"
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const imagesArray = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="slider-container sliderContainer">
      <Slider {...settings}>
        {imagesArray.map((eachImage, idx) => (
          <div className="image-item" key={idx}>
            <img className="img" src={eachImage} alt={`carousel ${idx + 1}`} />
            <div className="image-overlay">
              <div className="overlay-content">
                <h2>
                  {idx % 2 === 0
                    ? "Discover Quality Products"
                    : "Explore Our Collection"}
                </h2>
                <p>
                  {idx % 2 === 0
                    ? "Premium items at affordable prices"
                    : "Unique selection for every taste"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
