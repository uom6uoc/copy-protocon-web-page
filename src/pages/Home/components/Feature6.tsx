import styled from "styled-components";
import { Paragraph, TitleSub } from "styles/Fonts";
import { ButtonWithArrow } from "components/ButtonWithArrow";
import { CardGradient } from "components/CardGradient";

import ImgDot from "assets/images/img-dot.png";
import { useEffect, useRef } from "react";
import ImgBrokenLine from "assets/images/img-broken-line.png";
import BgObj10 from "assets/images/background/bg-obj-10.png";
import { useResponsive } from "hooks/useResponsive";

export const Feature6 = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const { isDesktop } = useResponsive();

  useEffect(() => {
    let observer = new IntersectionObserver((elements) => {
      if (elements[0].isIntersecting) {
        elements[0].target.classList.add("animate");
      } else {
        elements[0].target.classList.remove("animate");
      }
    });

    observer.observe(animationRef.current!);
  }, []);

  return (
    <Container className="feature06">
      <div style={{ backgroundImage: `url(${BgObj10}` }} className="bg-obj-1" />
      <div className="inner">
        <div>
          <TitleSub pb={isDesktop ? 20 : 30}>
            <span className="gradient-font-color">Fee Fi</span>nancing
          </TitleSub>
          <Paragraph pb={isDesktop ? 36 : 40}>
            {`FeeFi is a protocol built with the purpose of convenience. 
FeeFi will remove the hassles of paying fees via only native tokens, 
accepting and allowing the payment of fees via dApp tokens. 

Network participants can share network benefits transparently and fairly to
establish a true decentralized Web3 ecosystem.`}
          </Paragraph>

          <ButtonWithArrow label={"Learn more"} onClick={() => {}} />
        </div>
        <div className="card-container">
          <div className="card">
            <div className="img-container">
              <img className="img-main" src={ImgBrokenLine} alt="broken line" />
              <div className="dot-container" ref={animationRef}>
                <img className="dot" src={ImgDot} alt="dot" />
                <img className="dot" src={ImgDot} alt="dot" />
                <img className="dot" src={ImgDot} alt="dot" />
              </div>
            </div>
            <CardGradient
              subTitle={"FeeFi Liquidity Pools"}
              title={`Stake Tokens.\nProvide Liquidity.\nEarn Rewards.`}
              onClick={() => {}}
              buttonLabel={`comming soon`}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding: 0px 76px 200px 77px;
  padding-bottom: 200px;

  .inner {
    position: relative;
  }
  .card-container {
    text-align: right;
  }
  .card {
    width: 463px;
    margin: 0 0 0 auto;
  }

  .img-container {
    position: absolute;
    left: -80px;
    top: 420px;
  }
  .img-main {
    width: 323px;
    height: 260px;
  }
  .img-sub {
    position: absolute;
    left: -45px;
    top: 380px;
    width: 280px;
    height: 160px;
  }
  .animate {
    .dot {
      animation-name: slideDown;
      animation-duration: 0.6s;
      animation-fill-mode: forwards; /* 종료 후 위치 */
    }
  }
  .dot {
    width: 14px;
    height: 14px;
    position: absolute;
  }

  .dot:nth-child(1) {
    left: 32px;
    top: 60px;
    animation-delay: 0.5s;
  }
  .dot:nth-child(2) {
    left: 170px;
    top: -30px;
    animation-delay: 1.1s;
  }

  .dot:nth-child(3) {
    left: 300px;
    top: -90px;
    animation-delay: 1.7s;
  }

  .bg-obj-1 {
    position: absolute;
    right: 0px;
    width: 544px;
    height: 944px;
    transform: translateY(-195px);
  }

  @keyframes slideDown {
    0% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(60px);
    }
  }
  /* Tablet */
  @media (max-width: 960px) {
    .bg-obj-1 {
      transform: translateY(-840px);
      width: 404px;
      height: 844px;
      right: -40px;

      background-size: contain;
      background-repeat: no-repeat;
    }

    .card {
      margin-top: 321px;
      margin-left: 60px;
    }
    .img-container {
      left: -20px;
      top: 390px;
    }
  }
`;
