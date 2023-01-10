import styled from "styled-components";
import IconChain from "assets/images/img-chain.png";
import IconCircles from "assets/images/img-circles.png";
import { CardGradient } from "components/CardGradient";
import { ScrollAnimation } from "components/ScrollAnimation";
import BgObj7 from "assets/images/background/bg-obj-7.png";

export const Feature4 = () => {
  return (
    <Container className="feature04">
      <div className="inner">
        <div>
          <h3 className="title">
            {`Build an independent and\ninteroperable mainnet ecosystem\nthrough `}
            <em className="gradient-font-color">multi-chain.</em>
          </h3>
          <p>
            Protocon enables inter-blockchain transfers of any type of data or
            assets.
          </p>
        </div>
        <div className="main">
          <div className="card">
            <CardGradient
              title={"Protocon Mainnet\n Enterprise"}
              imgAlt={"issac++"}
              buttonLabel={"comming soon"}
              onClick={() => {}}
            />
          </div>
          <img src={BgObj7} className="bg-obj-1" alt="symbol" />
          <ScrollAnimation speed={-9}>
            <img className="img-main" src={IconChain} alt="chain" />
          </ScrollAnimation>
          <ScrollAnimation speed={-15}>
            <img className="img-sub" src={IconCircles} alt="circle" />
          </ScrollAnimation>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  margin-top: 642px;
  padding-bottom: 348px;

  h3.title {
    font-family: ofelia-text, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 58px;
    letter-spacing: -0.06em;
    padding-bottom: 20px;
    white-space: pre-line;
  }

  p {
    font-family: basic-sans, sans-serif;

    font-style: normal;
    font-weight: 300;
    font-size: 21px;
    line-height: 31px;
    padding-bottom: 48px;
    letter-spacing: -0.06em;
  }

  .main {
    position: relative;
  }
  .card {
    width: 488px;
  }

  .img-main {
    width: 294.07px;
    height: 267.71px;
    position: absolute;
    right: 0px;
    top: -400px;
  }
  .img-sub {
    width: 346px;
    height: 393px;
    position: absolute;
    right: 0px;
    top: -400px;
  }
  .bg-obj-1 {
    position: absolute;
    right: -302px;
    top: 0px;
    width: 917px;
    height: 587px;
  }
  /* Tablet */
  @media (max-width: 960px) {
    margin-top: 547px;
    padding-left: 77px;
    padding-right: 77px;
    padding-bottom: 1010px;

    h3.title {
      white-space: inherit;
      width: 580px;
    }
    .img-main {
      right: -80px;
      top: 130px;
    }
    .img-sub {
      right: -50px;
      top: 70px;
    }

    .bg-obj-1 {
      top: 400px;
      right: -180px;
      min-width: 839px;
    }
  }
`;
