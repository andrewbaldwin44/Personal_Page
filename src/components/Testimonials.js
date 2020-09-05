import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import { IoIosArrowDown } from 'react-icons/io';

import { paginate, countPages } from '../utils/paginateModel';
import Pagination from '@material-ui/lab/Pagination';

import { ScrollHeightContext } from './ScrollHeightContext';

import { getViewType } from '../utils/index';
import { TESTIMONIAL_BREAKPOINTS } from '../constants';

const initialPage = 1;

function Testimonials({ testimonials }) {
  const { testimonialsSection } = useContext(ScrollHeightContext);

  const [paginatedTestimonials, setPaginatedTestimonials] = useState([]);
  const [limit, setLimit] = useState(0);

  const determineResultLimit = () => {
    const viewType = getViewType();
    const newLimit = TESTIMONIAL_BREAKPOINTS[viewType];

    setLimit(newLimit);
  }

  const getTestimonials = page => {
    return paginate(page, limit, testimonials);
  }

  useEffect(() => determineResultLimit(), []);
  useEffect(() =>
    setPaginatedTestimonials(getTestimonials(initialPage)),
    // eslint-disable-next-line
  [limit, window.innerWidth]);

  const handleNavigation = (_, pageNumber) => {
    window.location.href = '/#testimonials-section';
    setPaginatedTestimonials(getTestimonials(pageNumber));
  }

  const pagesCount = countPages(testimonials, limit);

  return (
    <TestimonialsSection id="testimonials-section" ref={testimonialsSection}>
      <TestimonialsHead
        href='https://exercism.io/about'
        target='_blank'
        alt='Exercism website'
        rel='noopener noreferrer'
      >
        <img src="assets/images/exercism.png" alt="Exercism logo"/>
        <h2>Exercism Testimonials</h2>
      </TestimonialsHead>
      <TestimonialsBody>
        {paginatedTestimonials.map(testimonial => {
          const normalizedExerciseName = testimonial.exercise.toLowerCase().replace(' in ', '');
          const testimonialKey = `${testimonial.user}${normalizedExerciseName}`;

          return (
            <TestimonialItem
              key={testimonialKey}
              limit={limit}
            >
              <FeedbackItem>
                <i aria-hidden="true" className="fas fa-quote-left"></i>
                <span>{testimonial.feedback}</span>
              </FeedbackItem>
              <AboutItem>
                <UserInfo>- {testimonial.user}</UserInfo>
                <span> on </span>
                <ExerciseInfo>{testimonial.exercise}</ExerciseInfo>
              </AboutItem>
            </TestimonialItem>
          )
        })}
      </TestimonialsBody>
      <StyledPagination
        count={pagesCount}
        showFirstButton
        showLastButton
        siblingCount={2}
        size="large"
        shape="rounded"
        color="secondary"
        onChange={handleNavigation}
      />
    <a href='#contact-section'>
        <ChevronDown />
      </a>
    </TestimonialsSection>
  )
}

const TestimonialsSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Linotte', sans-serif;
  font-size: 20px;
  text-shadow: none;
  color: black;
  height: calc(100vh - var(--navbar-height));
  width: 100%;
  padding: 20px;
  background-color: white;
`;

const TestimonialsHead = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: black;

  &:hover {
    text-shadow: none;
  }

  img {
    height: auto;
    width: 70px;
    min-width: 70px;
    padding-right: 20px;
  }

  h2 {
    font-family: 'Linotte Heavy';
    font-size: 1.8em;
    padding-top: 7px;
  }
`;

const TestimonialsBody = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 80%;
  margin-top: 70px;
`;

const TestimonialItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: calc((100% / ${({ limit }) => (Math.floor(limit / 3))}) - 140px);
  margin: 0 70px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
`;

const FeedbackItem = styled.div`
  margin-bottom: 10px;
  display: flex;

  i {
    margin-right: 10px;
    color: #666;
  }
`;

const AboutItem = styled.div`
  color: #999;
`;

const UserInfo = styled.p`
  display: inline-block;
  color: #333;
`;

const ExerciseInfo = styled.p`
  display: inline-block;
  color: #0097a7;
  font-weight: bold;
`;

const StyledPagination = styled(Pagination)`
  position: absolute;
  left: 50%;
  bottom: 60px;
  transform: translateX(-50%);

  button, li, div {
    font-size: 20px;
    margin-right: 10px;
  }

  @media (max-width: 800px) {
    left: -2px;
    margin: 0;
    transform: translateX(0%);

    button, li, div {
      font-size: 16px;
      height: 20px;
      width: 2px;
      padding: 0;
      margin-right: 25px;
    }
  }
`;

const ChevronDown = styled(IoIosArrowDown)`
  position: absolute;
  font-size: 1.8em;
  bottom: 10px;
  transition: 1.2s;
  cursor: pointer;
  color: black;

  &:hover {
    transform: scale(1.04);
  }
`;

export default Testimonials;
