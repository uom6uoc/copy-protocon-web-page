import styled from "styled-components";
import IconIssac from "assets/images/img-issac.png";
import IconContractModel from "assets/images/img-contract-model.png";
import { CardGradient } from "components/CardGradient";
import { Title } from "styles/Fonts";
import BgObj4 from "assets/images/background/bg-obj-4.png";
import BgObj5 from "assets/images/background/bg-obj-5.png";
import { useResponsive } from "hooks/useResponsive";

export const Feature2 = () => {
  const { isDesktop } = useResponsive();
  return (
    <Container className="feature02">
      <img src={BgObj4} className="bg-obj-1" alt="symbol" />
      <img src={BgObj5} className="bg-obj-2" alt="symbol" />
      <div className="inner">
        <Title pb={isDesktop ? 20 : 40}>
          Protocon will build a decentralized
          <br />
          Protocol Economy via&nbsp;
          <em className="gradient-font-color">Public Mainnet.</em>
        </Title>
        <p className="desc">
          For a secure Protocol Economy, there mustn't be any violations or
          vulnerabilities. We are building a Public Mainnet with Mitum as the
          core, and the two pillars of Mitum are ISAAC++ and our Contract Model.
        </p>

        <div className="items">
          <CardGradient
            title={"ISAAC++"}
            desc={
              "Our ISAAC++ is a powerful engine on an open network developed with Protocon-BFT. \nThrough a consensus-based proof-of-authority (PoA) with one vote per node, the issues of a network monopoly and network vulnerabilities are solved."
            }
            imgSrc={IconIssac}
            imgAlt={"issac++"}
            buttonLabel={"coming soon"}
            onClick={() => {}}
          />
          <CardGradient
            title={"Contract Model"}
            desc={
              "Our Contract Model is an alternative to Smart Contract (EVM) as our Contract Model has processing speeds that are 10x faster than EVM. Safety and security related vulnerabilities are reduced immensely by verifying and distributing the model in advance."
            }
            imgSrc={IconContractModel}
            imgAlt={"issac++"}
            buttonLabel={"contract model"}
            onClick={() => {}}
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  margin-top: 700px;

  .desc {
    font-family: basic-sans, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 21px;
    line-height: 31px;
    letter-spacing: -0.06em;
    color: #000000;
    padding-bottom: 48px;
  }
  .items {
    display: flex;
    gap: 19px;
    z-index: 1;
    figure {
      flex: 1;
    }
  }
  .bg-obj-1 {
    width: 809px;
    height: 1025px;
    position: absolute;
    right: -400px;
    top: 2489px;
  }
  .bg-obj-2 {
    position: absolute;
    width: 1115px;
    height: 702px;
    top: 2369px;
    margin-left: -83px;
  }

  /* Tablet */
  @media (max-width: 960px) {
    margin-top: 671px;
    padding: 0 76px;

    .items {
      flex-direction: column;
      gap: 27px;
      figure {
        width: 487px;
      }
    }
    .desc {
      width: 644px;
    }
  }
`;
