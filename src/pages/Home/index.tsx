import styled from "styled-components";
import { Navigation, Footer } from "components";
import {
  HeroSection,
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
  Feature6,
  Roadmap,
  Community,
  Newsletter,
} from "./components";

export const Home = () => {
  return (
    <Container>
      <div className="max-w">
        <Navigation />

        <HeroSection />
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <Feature4 />
        <Feature5 />
        <Feature6 />
        <Roadmap />
        <Community />
        <Newsletter />
      </div>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background: url("/background.svg");
  background-size: cover;
  background-position: center;
`;
