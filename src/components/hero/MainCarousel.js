import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import styled from 'styled-components';
import Data from "data/events.json";
import tw from "twin.macro";

// Custom styles for the carousel
const CarouselContainer = tw.div`relative bg-cover h-screen min-h-144`;

const Image = tw.img`w-full h-auto`;

const Slogan = tw.p`text-white font-bold text-center max-w-80 mx-auto z-10`;


const OpacityOverlay = tw.div`z-20 absolute inset-0 bg-black opacity-75`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };

  const slogans = Data.mainPageImagesSlogan

  return (
    <CarouselContainer>
      <OpacityOverlay />
      <Slider {...settings}>
        {slogans.map((slogan, index) => (
          <div key={index}>
            <Image src={slogan.imageSrc} alt={`Slogan ${index + 1}`} />
            <Slogan>{slogan.slogan}</Slogan>
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
