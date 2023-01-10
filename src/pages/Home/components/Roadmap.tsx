import styled from "styled-components";
import { useParallax } from "react-scroll-parallax";
import { useResponsive } from "hooks/useResponsive";

import ImgRoadmap from "assets/images/roadmap.png";
import ImgRoadmapTablet from "assets/images/roadmap-tablet.png";
import ImgObj14 from "assets/images/obj-14.png";
import ImgObj15 from "assets/images/obj-15.png";
import ImgObj32 from "assets/images/obj-32.png";
import BgObj from "assets/images/bg-2.png";
import BgObj11 from "assets/images/background/bg-obj-11.png";

export const Roadmap = () => {
  const { isDesktop } = useResponsive();
  const parallaxObj1 = useParallax<HTMLDivElement>({
    rotate: [0, 60],
  });
  const parallaxObj2 = useParallax<HTMLDivElement>({
    rotate: [0, -90],
  });
  const parallaxObj3 = useParallax<HTMLDivElement>({
    rotate: [0, 90],
  });

  return (
    <Container className="roadmap">
      <img src={BgObj11} className="bg-obj-1" alt="symbol" />
      <div>
        <img className="bg-obj" src={BgObj} alt="background" />
      </div>
      <div className="img-container">
        <div ref={parallaxObj1.ref} className="animated-obj">
          <img className="obj" src={ImgObj32} alt="dot" />
        </div>
        <div ref={parallaxObj2.ref} className="animated-obj">
          <img className="obj" src={ImgObj15} alt="dot" />
        </div>
        <div ref={parallaxObj3.ref} className="animated-obj">
          <img className="obj" src={ImgObj14} alt="dot" />
        </div>
      </div>
      {isDesktop ? (
        <div
          className="img-roadmap"
          style={{ backgroundImage: `url(${ImgRoadmap})` }}
        />
      ) : (
        <div
          className="img-roadmap"
          style={{ backgroundImage: `url(${ImgRoadmapTablet})` }}
        />
      )}
    </Container>
  );
};

const Container = styled.section`
  padding-top: 300px;
  padding-bottom: 1000px;
  .bg-obj {
    position: absolute;
    height: 1500px;
    min-width: 2400px;
    left: 50%;
    right: 50%;
    transform: translate(-50%);

    opacity: 0.3;
    margin-top: -825px;
  }
  .img-container {
    position: relative;
    height: 600px;
  }
  .animated-obj {
    height: 300px;
    width: 300px;
    transform-origin: center;
  }
  .obj {
    position: absolute;
  }
  .animated-obj:nth-child(1) {
    position: absolute;
    left: -80px;
    top: -23px;
    .obj {
      width: 333px;
      height: 333px;
    }
  }

  .animated-obj:nth-child(2) {
    position: absolute;
    left: 251px;
    top: 81px;
    width: 103px;
    height: 104px;
    .obj {
      width: 103px;
      height: 104px;
    }
  }
  .animated-obj:nth-child(3) {
    position: absolute;

    top: 280px;
    left: 372px;
    width: 74px;
    height: 74px;
    .obj {
      width: 74px;
      height: 74px;
    }
  }

  .img-roadmap {
    position: absolute;
    left: 0px;
    width: 100%;
    background-size: cover;
    background-position: center;
    height: 500px;
  }

  .bg-obj-1 {
    position: absolute;
    left: 0px;
    width: 482px;
    height: 733px;
    margin-top: 400px;
  }

  /* Tablet */
  @media (max-width: 960px) {
    position: relative;
    padding-top: 526px;
    padding-bottom: 2000px;
    .animated-obj:nth-child(1) {
      left: 40px;
    }
    .animated-obj:nth-child(2) {
      top: 140px;
      left: 421px;
    }
    .animated-obj:nth-child(3) {
      top: 320px;
      left: 562px;
    }
    .img-roadmap {
      position: absolute;

      width: 483px;
      background-size: cover;
      background-position: center;
      height: 3300px;
      top: 0px;
      left: 0px;
      right: 0px;

      transform: translateX(50%);
    }
  }
`;
