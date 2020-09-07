import React from 'react';
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

function Arrow({ onClick, className, icon, direction }) {
  className = className.includes('slick-disabled') ? 'disabled-arrow' : '';

  return (
    <SideScrollChevron
      className={className}
      direction={direction}
      onClick={onClick}
    >
      {icon}
    </SideScrollChevron>
  );
}

function Carousel({ children }) {
  return (
    <StyledSlider
      {...settings}
      nextArrow={
        <Arrow
          icon={<IoIosArrowForward />}
          direction={'next'}
        />
      }
      prevArrow={
        <Arrow
          icon={<IoIosArrowBack />}
          direction={'previous'}
        />
      }
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
  top: 180px;
  width: 97%;
  height: 60%;

  .disabled-arrow {
    opacity: 0.4;
  }
`;

const SideScrollChevron = styled.span`
  cursor: pointer;
  font-size: 50px;
`;

export default Carousel;
