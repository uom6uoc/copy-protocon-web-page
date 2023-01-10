import { useParallax } from "react-scroll-parallax";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  speed: number;
}
export const ScrollAnimation = ({ children, speed = 10 }: Props) => {
  const { ref } = useParallax<HTMLDivElement>({ speed: speed });
  return <Container ref={ref}>{children}</Container>;
};

const Container = styled.div`
  animation-delay: 250ms;
  z-index: 10;
`;
