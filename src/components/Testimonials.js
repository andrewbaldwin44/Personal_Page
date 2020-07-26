import React from 'react';
import styled from 'styled-components';
import useQuery from '../hooks/useQuery.hook';
import paginate from '../paginateModel';
import PaginatedButtons from './PaginatedButtons';

const pageMinimum = 1;
const limitMinimum = 9;

function getQueryValue(query, queryItem, minimumValue) {
  const queryValue = query.get(queryItem);
  return queryValue !== undefined && queryValue > 0
    ? Number(queryValue)
    : minimumValue;
}

function Testimonials({ testimonials }) {
  const query = useQuery();
  const page = getQueryValue(query, "page", pageMinimum);
  const limit = getQueryValue(query, "limit", limitMinimum);

  const paginatedResults = paginate(page, limit, testimonials);
  const paginatedTestimonial = paginatedResults.results;

  return (
    <TestimonialsSection id="testimonials-section">
      <TestimonialsHead>
        <img src="assets/images/exercism.png" alt="Exercism logo"/>
        <h2>Exercism Testimonials</h2>
      </TestimonialsHead>
      <TestimonialsBody>
        {paginatedTestimonial.map(testimonial => {
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
    </TestimonialsSection>
  )
}

const TestimonialsSection = styled.section`
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

export default Testimonials;
