import React, { useState } from "react";
import styled from "styled-components";

import email from "./icons/email.svg";

const ContactWrapper = styled.div`
  color: ${props => props.theme.white};
  background: ${props => props.theme.black};
  padding: 5rem 0;

  h1 {
    text-align: center;
    text-transform: capitalize;
    font-size: 4rem;
    font-weight: 900;
    margin-top: 0;
  }

  form {
    max-width: ${props => props.theme.maxWidth}px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    .field {
      flex: 1 50%;
      padding: 2rem;
      label {
        display: block;
        font-size: 2rem;
        font-weight: 600;
      }
      input,
      textarea {
        width: 100%;
        padding: 1rem 2rem;
        font-size: 2rem;
        resize: none;
      }
      &.wide {
        flex: 1 100%;
      }
    }
  }

  figure {
    width: 150px;
    font-size: 2rem;
    margin: 0 auto;
  }
`;

const Button = styled.button`
  color: ${props => props.theme.white};
  display: block;
  background-image: linear-gradient(45deg, #ffdc68 25%, #ff99b5 100%);
  padding: 1.5rem 3rem;
  font-size: 2rem;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Contact = () => {
  const [sent, setSent] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <ContactWrapper>
      <h1>Contact</h1>
      {sent ? (
        <figure>
          <img src={email} alt="Message sent!" />
          <p>Message sent!</p>
        </figure>
      ) : (
        <form>
          <div className="field">
            <label>Your Name</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="field wide">
            <label>Message</label>
            <textarea />
          </div>
          <div className="field wide">
            <Button onClick={handleSubmit}>Send</Button>
          </div>
        </form>
      )}
    </ContactWrapper>
  );
};
export default Contact;
