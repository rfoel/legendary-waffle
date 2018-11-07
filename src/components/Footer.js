import React from "react";
import styled, { withTheme } from "styled-components";

import Logo from "./Logo";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.black};
  padding: 3rem;

  figure {
    margin-right: 1rem;
  }
`;

const Footer = props => (
  <FooterWrapper>
    <Logo height={30} solidColor={props.theme.black} />
    The Waffle Company
  </FooterWrapper>
);

export default withTheme(Footer);
