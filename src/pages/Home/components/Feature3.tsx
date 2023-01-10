import styled from "styled-components";
import { ButtonGradient } from "components/ButtonGradient";
import { ScrollAnimation } from "components/ScrollAnimation";
import IconTestnet from "assets/images/img-testnet.png";
import ImgObj20 from "assets/images/obj-20.png";
import ImgObj21 from "assets/images/obj-21.png";
import BgObj6 from "assets/images/background/bg-obj-6.png";

export const Feature3 = () => {
  return (
    <Container className="feature03">
      <div className="inner">
        <div className="item item-1">
          <div className="img">
            <ScrollAnimation speed={-10}>
              <img src={IconTestnet} alt="testnet" className="obj-1" />
            </ScrollAnimation>
          </div>
          <div>
            <h3>{`Run a node\non testnet`}</h3>
            <p>Test nodes on the testnet in preparation for the Mainnet.</p>
            <ButtonGradient label="Read our Docs" onClick={() => {}} />
          </div>
        </div>
        <div className="item item-2">
          <div className="img">
            <div className="obj-2-1">
              <ScrollAnimation speed={-15}>
                <img src={ImgObj20} alt="resource" className="obj-2" />
              </ScrollAnimation>
            </div>
            <div className="obj-2-2">
              <ScrollAnimation speed={10}>
                <img src={ImgObj21} alt="resource" className="obj-3" />
              </ScrollAnimation>
            </div>
          </div>
          <div>
            <h3>{`Developer\nResources`}</h3>
            <p>See our Get Started Guide, Tutorials, SDKs</p>
            <ButtonGradient label="Build on Testnet" onClick={() => {}} />
          </div>
        </div>
      </div>
      <img src={BgObj6} className="bg-obj-1" alt="symbol" />
    </Container>
  );
};

const Container = styled.section`
  margin-top: 420px;
  .item {
    display: flex;
    padding-bottom: 80px;
  }

  .img {
    width: 324px;
    text-align: center;
    padding-right: 22px;
  }
  .item-1 img {
    margin-top: -20px;
  }
  .item-2 {
    position: relative;
  }
  h3 {
    font-family: ofelia-text, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 58px;
    letter-spacing: -0.06em;
    padding-bottom: 20px;
  }

  p {
    font-family: basic-sans, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 21px;
    line-height: 31px;
    letter-spacing: -0.06em;
    padding-bottom: 24px;
  }

  .obj-1 {
    width: 285px;
    height: 265px;
  }
  .obj-2 {
    width: 52px;
    height: 43px;
    margin-left: 180px;
    margin-top: 20px;
  }

  .obj-3 {
    height: 116px;
    width: 116px;
  }
  .bg-obj-1 {
    width: 783px;
    height: 820px;
    position: absolute;
    left: 0px;
    top: 3452px;
  }

  /* Tablet */
  @media (max-width: 960px) {
    padding-top: 587px;
    .item {
      display: block;
      padding-left: 137px;
      white-space: pre-line;
      padding-bottom: 103px;
    }
    .img {
      position: absolute;
    }
    p {
      width: 337px;
      padding-bottom: 30px;
    }
    .item-1 img {
      margin-top: -200px;
      margin-left: 226px;
    }
    .item-2 img {
      margin-top: -100px;
      margin-left: 426px;
    }

    .item-2 .obj-2-1 {
      margin-top: 100px;
      margin-left: -40px;
    }

    .item-2 .obj-2-2 {
      margin-top: -100px;
    }
    .bg-obj-1 {
      position: absolute;
      top: 5660px;
      left: -450px;
    }
  }
`;
