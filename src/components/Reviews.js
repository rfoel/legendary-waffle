import React from "react";
import styled from "styled-components";

const ReviewsWrapper = styled.div`
  text-align: center;
  color: ${props => props.theme.black};
  background: ${props => props.theme.white};
  padding: 5rem 0;

  h1 {
    text-transform: capitalize;
    font-size: 4rem;
    font-weight: 900;
    margin-top: 0;
  }
`;

const ReviewsContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${props => props.theme.maxWidth}px;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const ReviewItem = styled.q`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 3rem 2rem;
  margin: 2rem;
  color: ${props => props.theme.white};
  background-image: linear-gradient(45deg, #ffdc68 25%, #ff99b5 100%);
`;

const Reviews = () => (
  <ReviewsWrapper>
    <h1>Customer reviews</h1>

    <ReviewsContainer>
      <ReviewItem>
        You should eat a waffle! You can't be sad if you eat a waffle!
      </ReviewItem>
      <ReviewItem>Waffles are just awesome bread.</ReviewItem>
    </ReviewsContainer>
  </ReviewsWrapper>
);

export default Reviews;
