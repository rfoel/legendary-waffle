import React from "react";
import styled from "styled-components";

import search from "./icons/search.svg";
import calendar from "./icons/calendar.svg";
import waffle from "./icons/waffle.svg";

const ExploreWrapper = styled.div`
  text-align: center;
  color: ${props => props.theme.white};
  background: ${props => props.theme.black};
  padding: 5rem 0;

  h1 {
    text-transform: capitalize;
    font-size: 4rem;
    font-weight: 900;
    margin-top: 0;
  }
`;

const ExploreContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${props => props.theme.maxWidth}px;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const ExploreItem = styled.div`
  padding: 2rem;
  color: ${props => props.theme.white};

  figure {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }

  p {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const Explore = () => {
  const items = [
    {
      text: "Looking for the best waffle in town?",
      src: search
    },
    {
      text: "In any day of the month?",
      src: calendar
    },
    {
      text: "You've come to the right place!",
      src: waffle
    }
  ];

  return (
    <ExploreWrapper>
      <h1>Explore</h1>
      <ExploreContainer>
        {items.map(item => (
          <ExploreItem key={item.text}>
            <figure>
              <img src={item.src} alt={item.text} />
            </figure>
            <p>{item.text}</p>
          </ExploreItem>
        ))}
      </ExploreContainer>
    </ExploreWrapper>
  );
};
export default Explore;
