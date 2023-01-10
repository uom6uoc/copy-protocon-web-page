import styled from "styled-components";
import { Paragraph, TitleSub } from "styles/Fonts";
import { ButtonGradient } from "components/ButtonGradient";

export const Newsletter = () => {
  return (
    <Container className="newletter">
      <div className="title-container">
        <TitleSub pb={20}>Newsletter</TitleSub>
      </div>
      <Paragraph pb={53}>Stay updated on the latest Protocon News.</Paragraph>
      <div className="input-container">
        <input placeholder="Your email" />
        <ButtonGradient label="Subscribe" onClick={() => {}} />
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding-bottom: 150px;
  text-align: center;
  input {
    border: 0.7px solid #000000;
    border-radius: 13px;
    width: 387px;
    padding: 15px;
    box-sizing: border-box;
    /* Font */

    font-family: ofelia-text, sans-serif;
    font-weight: 400;
    font-size: 15px;

    letter-spacing: -0.06em;

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }
  .input-container {
    display: flex;
    gap: 14px;
    justify-content: center;
  }
  .title-container {
    display: flex;
    justify-content: center;
  }
`;
