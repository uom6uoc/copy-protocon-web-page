import * as React from "react";
import styled from "styled-components";
import { isSafari } from "react-device-detect";

interface BackgroundVideoProps {
  video: string;
  image?: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ video, image }) => {
  return (
    <Container>
      {isSafari && image && <img src={image} alt={image} />}
      {!isSafari && <video autoPlay muted loop src={video} />}
    </Container>
  );
};

export default BackgroundVideo;

const Container = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 1440px;

  img {
    object-fit: contain;
  }

  /* Tablet */
  @media (max-width: 960px) {
  }
`;
