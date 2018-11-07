import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Logo from "./Logo";

const HeroWrapper = styled.div`
  height: 80vh;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoint}px) {
    display: block;
  }
`;

const TaglineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-size: 2em;
  line-height: 1.75em;
  font-weight: 900;
  color: ${props => props.theme.black};

  @media (max-width: ${props => props.theme.breakpoint}px) {
    height: 100%;
    color: ${props => props.theme.white};
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(45deg, #ffdc68 25%, #ff99b5 100%);

  @media (max-width: ${props => props.theme.breakpoint}px) {
    position: absolute;
    height: 80vh;
    top: 0;
    left: 0;
    z-index: -1;

    figure {
      display: none;
    }
  }
`;

const Hero = () => (
  <HeroWrapper>
    <Header />
    <TaglineWrapper>
      <h1>
        Make <br /> waffles
        <br /> great again
      </h1>
    </TaglineWrapper>
    <LogoWrapper>
      <Logo height={130} solidColor="#fff" />
    </LogoWrapper>
  </HeroWrapper>
);

export default Hero;
