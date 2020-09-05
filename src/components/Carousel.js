import React, { useState } from 'react';
import styled from 'styled-components';

import Slider from "react-slick";
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        arrows: false,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    }
  ]
};

function Arrow({ onClick, icon, currentSlide, direction, lastIndex }) {
  return (
    <SideScrollChevron
      currentSlide={currentSlide}
      direction={direction}
      lastIndex={lastIndex}
      onClick={onClick}
    >
      {icon}
    </SideScrollChevron>
  );
}

function Carousel({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <StyledSlider
      {...settings}
      nextArrow={
        <Arrow
          icon={<IoIosArrowForward />}
          currentSlide={currentSlide}
          lastIndex={Math.floor(children.length / 2)}
          direction={'next'}
        />
      }
      prevArrow={
        <Arrow
          icon={<IoIosArrowBack />}
          currentSlide={currentSlide}
          direction={'previous'}
        />
      }
      afterChange={index => setCurrentSlide(index)}
    >
      {children}
    </StyledSlider>
  )
}

const StyledSlider = styled(Slider)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 97%;
  height: 60%;
  bottom: 90px;
`;

const SideScrollChevron = styled.span`
  cursor: pointer;
  font-size: 50px;
  opacity: ${({ currentSlide, direction, lastIndex }) => {
    if (direction === 'previous' && currentSlide === 0) return 0.4;
    else if (direction === 'next' && currentSlide === lastIndex) return 0.4;
    else return 1;
  }};
`;

export default Carousel;
