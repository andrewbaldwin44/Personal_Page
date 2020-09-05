import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { IoIosArrowDown } from 'react-icons/io';

import { paginate, countPages } from '../utils/paginateModel';
import Pagination from '@material-ui/lab/Pagination';

import { ScrollHeightContext } from './ScrollHeightContext';

const initialPage = 1;
const limit = 9;

function Testimonials({ testimonials }) {
  const { testimonialsSection } = useContext(ScrollHeightContext);

  const getTestimonials = page => {
    return paginate(page, limit, testimonials);
  }

  const [paginatedTestimonials, setPaginatedTestimonials] = useState(
    getTestimonials(initialPage)
  );

  const handleNavigation = (_, pageNumber) => {
    window.location.href = '/#testimonials-section';
    setPaginatedTestimonials(getTestimonials(pageNumber));
  }

  const pagesCount = countPages(testimonials, limit);

  return (
    <TestimonialsSection id="testimonials-section" ref={testimonialsSection}>
      <TestimonialsHead>
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
  font-family: 'Linotte', sans-serif;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: none;
  color: black;
  height: calc(100vh - var(--navbar-height));
  width: 100%;
  background-color: white;
`;

const TestimonialsHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  img {
    height: auto;
    width: 70px;
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
  flex-wrap: wrap;
  width: 100%;
  margin-top: 80px;
`;

const TestimonialItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: calc((100% / 3) - 140px);
  margin: 30px 70px;
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
  bottom: 60px;

  & button, li, div {
    font-size: 20px;
    padding: 0 10px;
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
