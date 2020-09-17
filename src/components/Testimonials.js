import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import useResize from '../hooks/useResize.hook';

import { IoIosArrowDown } from 'react-icons/io';

import Pagination from '@material-ui/lab/Pagination';

import { DataContext } from './DataContext';
import { ScrollHeightContext } from './ScrollHeightContext';

import { getViewType } from '../utils/index';
import { TESTIMONIAL_BREAKPOINTS } from '../constants';

const initialPage = 1;

function Testimonials() {
  const {
    testimonials,
    limit,
    setLimit,
    pagesCount,
    getTestimonials,
  } = useContext(DataContext);
  const { testimonialsSection } = useContext(ScrollHeightContext);

  const determineResultLimit = () => {
    const viewType = getViewType();
    const newLimit = TESTIMONIAL_BREAKPOINTS[viewType];

    setLimit(newLimit);
  }

  // eslint-disable-next-line
  useEffect(() => determineResultLimit(), []);
  // eslint-disable-next-line
  useEffect(() => getTestimonials(initialPage, limit), [limit]);
  useResize(determineResultLimit);

  const handleNavigation = (_, pageNumber) => {
    window.location.href = '/#testimonials-section';
    getTestimonials(pageNumber, limit);
  }

  return (
    <TestimonialsSection id="testimonials-section" ref={testimonialsSection}>
      <TestimonialsHead>
        <h2>Mentorship Testimonials</h2>
      </TestimonialsHead>
      <TestimonialsBody>
        {testimonials.map(testimonial => {
          const { _id, feedback, student, exercise } = testimonial;

          return (
            <TestimonialItem
              key={_id}
              limit={limit}
            >
              <FeedbackItem>
                <i aria-hidden="true" className="fas fa-quote-left"></i>
                <span>{feedback}</span>
              </FeedbackItem>
              <AboutItem>
                <UserInfo>- {student}</UserInfo>
                <span> on </span>
                <ExerciseInfo>{exercise}</ExerciseInfo>
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
  padding: var(--section-padding);
  background-color: white;
`;

const TestimonialsHead = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 1.5em;
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

  span {
    max-height: 100px;
    overflow-y: auto;
    padding-right: 5px;
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
      margin-right: 29px;
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
