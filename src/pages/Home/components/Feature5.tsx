import styled from "styled-components";
import ImgBg from "assets/images/bg-title.svg";

import { H5, Paragraph, Title } from "styles/Fonts";
import BgObj8 from "assets/images/background/bg-obj-8.png";
import BgObj9 from "assets/images/background/bg-obj-9.png";

export const Feature5 = () => {
  return (
    <Container className="feature05" titleBg={ImgBg}>
      <img src={BgObj8} className="bg-obj-1" alt="symbol" />

      <div className="inner">
        <div
          className="bg-obj-2"
          style={{ backgroundImage: `url(${BgObj9})` }}
        ></div>

        <div className="content-container">
          <div className="title-contianer">
            <Title className="title">{`Protocol Economy`}</Title>
          </div>
          <H5 className="title-sub" pb={38}>
            The value of transparent and fair distribution
          </H5>
          <Paragraph pb={38}>
            {`A Protocol Economy is an economic system in which individuals or groups partake in
            economic activities while receiving rewards based on their contributions. 
            This system is an alternative and a solution for
            proprietary business environments and problems. 
            
            Web3 is one of the solutions as it detaches itself from monopolies and centralization
            in addition to being user-centric, built, operated, and owned.
            We minimize unnecessary brokerage costs as we distribute fairly
            according to the rules upon which all stakeholders and participants have agreed.`}
          </Paragraph>

          <div className="point-text gradient-font-color pre-line">
            {`Join Protocon and be a part of the\nmovement and values.`}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section<{ titleBg: string }>`
  padding-bottom: 530px;
  .content-container {
    text-align: center;
  }
  .inner {
    position: relative;
  }
  .title {
    background-image: url(${(props) => props.titleBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 600px;
    padding: 54px 0px;
  }
  .point-text {
    font-family: basic-sans, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.06em;
  }

  .img-main {
    min-width: 1335.58px;
    height: 1097.87px;
    position: absolute;
    left: 100px;
    top: 400px;
  }
  .img-sub {
    width: 346px;
    height: 393px;
    position: absolute;
    right: 0px;
    top: -120px;
  }
  .bg-obj-1 {
    position: absolute;
    left: 0px;
    width: 502px;
    height: 614px;
    margin-top: -270px;
  }
  .bg-obj-2 {
    position: absolute;
    left: 400px;
    width: 100%;
    height: 800px;
    top: 480px;
  }

  /* Tablet */
  @media (max-width: 960px) {
    padding-bottom: 1239px;
    .bg-obj-1 {
      margin-top: -430px;
      width: 330px;
      height: 400px;
      left: -40px;
    }
    .bg-obj-2 {
      left: 0px;
      width: 100%;
      background-position: center;
      background-size: 1198px 716px;
      top: 572px;
    }
  }
`;
