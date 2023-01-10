import styled from "styled-components";

import { BackgroundVideo, ButtonGradient, ScrollAnimation } from "components";

import IconMove1 from "assets/images/icon-move-1.png";
import IconMove2 from "assets/images/icon-move-2.png";
import BgObj2 from "assets/images/background/bg-obj-2.png";
import BgObj3 from "assets/images/background/bg-obj-3.png";

export const HeroSection = () => {
  return (
    <Container>
      <img src={BgObj2} className="bg-obj-1" alt="symbol" />
      <img src={BgObj3} className="bg-obj-2" alt="symbol" />
      <BackgroundVideo
        video={"video/main-motion.webm"}
        image={"image/main-motion.png"}
      />
      <section className="hero-section inner-box max-w">
        <ScrollAnimation speed={-15}>
          <img className="animated-img-1" src={IconMove1} alt="moving icon" />
        </ScrollAnimation>
        <ScrollAnimation speed={15}>
          <img className="animated-img-2" src={IconMove2} alt="moving icon" />
        </ScrollAnimation>
        <div className="text">
          <h6>Welcome to Protocon</h6>
          <h1>
            Building the Protocol Economy
            <br />
            through Web3
          </h1>
          <div className="desc">
            {`Protocon is an interconnected ecosystem to provide fair distribution
            and transparency to all.`}
          </div>
          <div className="docs-btn">
            <ButtonGradient
              label={"Documentation"}
              onClick={() => window.open("https://demo.protoconwallet.io/")}
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 480px;

  section {
    padding-left: 20px;
    padding-right: 20px;
  }

  .hero-section {
    padding-top: 151px;
    position: relative;
  }

  .hero-section h6 {
    font-family: ofelia-text, sans-serif;
    padding-bottom: 24px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;

    letter-spacing: -0.05em;
    color: #000000;
  }

  .hero-section .desc {
    font-family: basic-sans, sans-serif;
    padding: 24px 0 48px;
    font-weight: 300;
    font-size: 23px;
    line-height: 33px;
    letter-spacing: -0.05em;
    color: #000000;
    width: 600px;
  }
  h1 {
    font-family: ofelia-text, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 57px;
    line-height: 75px;
    /* or 132% */
    letter-spacing: -0.06em;
    color: #000000;
  }
  .animated-img-1 {
    width: 133px;
    height: 201px;
    position: absolute;
    right: -150px;
    top: 10px;
  }
  .animated-img-2 {
    width: 152px;
    height: 210px;
    position: absolute;
    left: 491px;
    top: 540px;
  }

  .bg-obj-1 {
    width: 445px;
    height: 401px;
    position: absolute;
    right: 0px;
    top: 111px;
  }
  .bg-obj-2 {
    width: 513px;
    height: 661px;
    position: absolute;
    left: 0px;
    top: 744px;
  }

  /* Tablet */
  @media (max-width: 960px) {
    padding-top: 83px;
    padding-bottom: 950px;
    .hero-section {
      h6 {
        text-align: center;
        padding-bottom: 31px;
      }
      h1 {
        font-size: 60px;
        line-height: 77px;
        text-align: center;
        letter-spacing: -0.06em;
        padding-bottom: 42px;
        width: 560px;
        margin: 0 auto;
      }
      .desc {
        font-family: basic-sans, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 21px;
        line-height: 31px;
        margin: 0 auto;
        width: 370px;

        text-align: center;
        letter-spacing: -0.06em;
        padding-top: 0px;
      }
      .docs-btn {
        margin: 0 auto;
        width: fit-content;
      }
    }
    .animated-img-1 {
      top: 463px;
      right: 48px;
    }
    .animated-img-2 {
      left: 50px;
      top: 873px;
    }

    .bg-obj-1 {
      right: -200px;
      top: 540px;
      width: 324px;
      height: 292px;
    }
    .bg-obj-2 {
      left: -340px;
      top: 1280px;
    }
  }
`;
