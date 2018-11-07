import React, { useState } from "react";
import { useWindowSize } from "react-use";
import styled, { withTheme } from "styled-components";

import Logo from "./Logo";
import Nav from "./Nav";

const HeaderWrapper = styled.header`
  width: 100%;
  position: absolute;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth}px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoint}px) {
    /* display: block; */
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  display: none;
  color: ${props => props.theme.white};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  cursor: pointer;
  padding: 2.5px;
  margin: 2rem;
  user-select: none;

  @media (max-width: ${props => props.theme.breakpoint}px) {
    display: block;
  }
`;

const Header = props => {
  const [active, setActive] = useState(false);
  const { width } = useWindowSize();
  const solidColor = width <= props.theme.breakpoint ? "#fff" : null;

  return (
    <HeaderWrapper>
      <HeaderContent>
        <LogoWrapper>
          {solidColor ? <Logo solidColor={solidColor} /> : <Logo />}
        </LogoWrapper>
        <MenuWrapper size={40} onClick={() => setActive(!active)}>
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor">
              <path d="M17,87.833h362.667c9.35,0,17-7.65,17-17s-7.65-17-17-17H17c-9.35,0-17,7.65-17,17C0,80.183,7.65,87.833,17,87.833z" />
              <path d="M17,215.333h362.667c9.35,0,17-7.65,17-17s-7.65-17-17-17H17c-9.35,0-17,7.65-17,17S7.65,215.333,17,215.333z" />
              <path d="M17,342.833h362.667c9.35,0,17-7.65,17-17s-7.65-17-17-17H17c-9.35,0-17,7.65-17,17S7.65,342.833,17,342.833z" />
            </g>
          </svg>
        </MenuWrapper>
        <Nav active={active} handleOutsideClick={() => setActive(!active)} />
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default withTheme(Header);
