import React from 'react';
import styled from 'styled-components';

import Slider from "react-slick";
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <Arrow icon={<IoIosArrowForward />} />,
  prevArrow: <Arrow icon={<IoIosArrowBack />} />,
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

function Arrow({ className, style, onClick, icon }) {
  return (
    <SideScrollChevron
      style={{ ...style }}
      onClick={onClick}
    >
      {icon}
    </SideScrollChevron>
  );
}

function Carousel({ children }) {
  return (
    <StyledSlider {...settings}>
      {children}
    </StyledSlider>
  )
}

const StyledSlider = styled(Slider)`
  position: absolute;
  display: flex;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  width: 95vw;
  height: 60%;
  bottom: 12%;
`;

const SideScrollChevron = styled.span`
  cursor: pointer;
  font-size: 50px;
`;

export default Carousel;
