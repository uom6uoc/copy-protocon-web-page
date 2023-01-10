import styled from "styled-components";
import { ButtonWithArrow } from "components/ButtonWithArrow";
import { ScrollAnimation } from "components/ScrollAnimation";
import BgFeature1Back from "assets/images/bg-feature-1-back.png";
import BgFeature1Front from "assets/images/bg-feature-1-front.png";
import ImgDot from "assets/images/img-dot.png";
import Obj13 from "assets/images/obj-13.png";
import BgObj13 from "assets/images/background/bg-obj-13.png";
import BgGradientWhite from "assets/images/bg-white-gradient.png";

export const Feature1 = () => {
  return (
    <Container className="feature01">
      <div className="text-container">
        <div className="inner">
          <TitleContainer bgImg={BgObj13}>
            <h2 className="title">
              What is
              <br />
              Protocon?
            </h2>
          </TitleContainer>

          <div className="feature-desc">
            <p className="desc">
              Protocon aims to solve personal information and data sensitivity
              issues
              <br />
              through decentralization and de
              <br />
              <br />
              by building the Protocon Economy in which fair distribution occurs
              by the system.
              <br />
              Protocon will build a community based on values that people pursue
              <br />
              while building a Protocol Economy based on Web3.
            </p>
          </div>
        </div>
        <div className="button-container">
          <ButtonWithArrow label={"Learn more"} onClick={() => {}} />
        </div>
      </div>
      <article className="image-container">
        <img className="img-bg-back" src={BgFeature1Back} alt="background" />
        <img className="img-bg-front" src={BgFeature1Front} alt="background" />
        <div className="relative">
          <div className="dots-container">
            <ScrollAnimation speed={-10}>
              <img className="dot-1" src={ImgDot} alt="점" />
            </ScrollAnimation>
            <ScrollAnimation speed={-10}>
              <img className="dot-2" src={ImgDot} alt="점" />
            </ScrollAnimation>
            <ScrollAnimation speed={-10}>
              <img className="dot-3" src={ImgDot} alt="점" />
            </ScrollAnimation>
          </div>
          <ScrollAnimation speed={10}>
            <img className="obj-13" src={Obj13} alt="꼬인 모양" />
          </ScrollAnimation>
          <img className="bg-white" src={BgGradientWhite} alt="흰 배경" />
        </div>
      </article>
    </Container>
  );
};

const Container = styled.section`
  .text-container {
    position: relative;
    z-index: 20;
  }
  .button-container {
    text-align: center;
  }

  .desc {
    font-family: basic-sans, sans-serif;
    font-weight: 300;
    font-size: 21px;
    line-height: 31px;
    text-align: center;
    letter-spacing: -0.06em;
    color: #000000;
    width: 708px;
    margin: 0 auto;
    text-align: center;
  }

  .feature-desc {
    padding: 30px 0 40px;
  }
  .title {
    font-family: ofelia-text, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    text-align: center;
    letter-spacing: -0.05em;
  }

  .relative {
    position: relative;
  }

  .dots-container {
  }

  .img-bg-back {
    min-width: 1527px;
    width: 1527px;
    position: absolute;
    right: 50%;
    left: 50%;
    transform: translate(-50%);

    margin-top: -200px;
  }
  .img-bg-front {
    min-width: 1527px;
    width: 1527px;
    position: absolute;
    right: 50%;
    left: 50%;
    transform: translate(-50%);
    z-index: 100;
    margin-top: -200px;
  }
  img.dot-1 {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 260px;
    top: 0px;
    z-index: 1;
  }

  img.dot-2 {
    width: 32px;
    height: 32px;

    position: absolute;
    left: 300px;
    top: 160px;
    z-index: 1;
  }

  img.dot-3 {
    width: 23px;
    height: 23px;
    position: absolute;
    right: 300px;
    top: 210px;
    z-index: 1;
  }

  .obj-13 {
    width: 159px;
    height: 263px;
    position: absolute;
    left: 43%;
    top: 160px;
  }

  .bg-white {
    z-index: 10;
    position: absolute;
    width: 709px;
    height: 502px;
    margin-top: -200px;
    top: 0px;
    left: 50%;
    right: 50%;
    transform: translate(-50%);
  }

  /* Tablet */
  @media (max-width: 960px) {
    padding: 30px 0 45px;
  }
`;

const TitleContainer = styled.div<{ bgImg: string }>`
  background-image: url(${(props) => props.bgImg});
  background-repeat: no-repeat;
  background-position: center 100%;
`;
