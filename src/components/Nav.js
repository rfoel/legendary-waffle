import React, { useRef } from "react";
import { useOutsideClick } from "react-use";
import styled from "styled-components";

const NavWrapper = styled.nav`
  margin-right: 1rem;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem;
    list-style: none;

    a {
      padding: 1rem 0;
      margin: auto 1.5rem;
      display: flex;
      align-items: center;
      position: relative;
      text-transform: capitalize;
      font-size: 1em;
      line-height: 1em;
      background: none;
      border: 0;
      text-decoration: none;
      text-align: center;
      cursor: pointer;
      color: ${props => props.theme.white};
      border-bottom: 2px solid transparent;

      &.active {
        border-bottom-color: ${props => props.theme.white};
      }

      &:hover,
      &:focus {
        outline: none;
        border-bottom-color: rgba(255, 255, 255, 0.5);
      }
    }
  }

  @media (max-width: ${props => props.theme.breakpoint}px) {
    width: 100%;
    margin-right: 0;

    ul {
      display: ${props => (props.active ? "block" : "none")};
      background: rgba(255, 255, 255, 0.95);
      box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);

      li {
        a {
          padding: 1.5rem 0;
          color: ${props => props.theme.black};

          &.active {
            border-bottom-color: transparent;
          }

          &:hover,
          &:focus {
            border-bottom-color: transparent;
          }
        }

        &:hover,
        &:focus {
          background: rgba(0, 0, 0, 0.03);
        }
      }
    }
  }
`;

const Nav = props => {
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    if (props.active) props.handleOutsideClick();
  });

  return (
    <NavWrapper {...props}>
      <ul ref={ref}>
        <li>
          <a href="/">Explore</a>
        </li>
        <li>
          <a href="/">Reviews</a>
        </li>
        <li>
          <a href="/"> Contact</a>
        </li>
        <li>
          <a href="/">Learn more</a>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
