import styled from "styled-components";

interface Props {
  title: string;
  subTitle?: string;
  desc?: string;
  imgSrc?: string;
  imgAlt?: string;
  buttonLabel: string;
  onClick: () => void;
}
export const CardGradient = ({
  title,
  subTitle,
  desc,
  imgSrc,
  imgAlt,
  buttonLabel,
  onClick,
}: Props) => {
  return (
    <Container>
      {subTitle && <h4>{subTitle}</h4>}
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="bottom">
        <div>{imgSrc && <img src={imgSrc} alt={imgAlt} />}</div>
        <button onClick={onClick}>{buttonLabel}</button>
      </div>
    </Container>
  );
};

const Container = styled.figure`
  background: linear-gradient(
    174.83deg,
    rgba(151, 242, 239, 0.3) 6.7%,
    rgba(252, 114, 255, 0.3) 146.55%
  );
  backdrop-filter: blur(2.5px);
  border-radius: 20px;
  padding: 35px 30px;
  min-height: 328px;
  position: relative;
  box-sizing: border-box;
  text-align: left;

  h4 {
    font-family: ofelia-text, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    letter-spacing: -0.05em;
    padding-bottom: 10px;
  }
  h3 {
    font-family: ofelia-text, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    letter-spacing: -0.05em;
    padding-bottom: 30px;
    white-space: pre-line;
    line-height: 42px;
  }

  p {
    font-family: basic-sans, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 34px;
    /* or 189% */

    letter-spacing: -0.05em;
    white-space: pre-line;
  }

  .bottom {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .bottom button {
    border: 1px solid #000000;
    border-radius: 13px;
    padding: 20px 34px;
    position: absolute;
    right: 35px;
    bottom: 35px;
  }
  .bottom img {
    width: 127px;
  }
`;
