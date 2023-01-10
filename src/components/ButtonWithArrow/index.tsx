import styled from "styled-components";
interface Props {
  label: string;
  onClick: () => void;
}

export const ButtonWithArrow = ({ label, onClick }: Props) => {
  return (
    <Container>
      <a onClick={onClick}>
        <span>{label}</span>
      </a>
    </Container>
  );
};

const Container = styled.div`
  font-family: ofelia-text, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.05em;
  color: #000000;
  cursor: pointer;

  &::after {
    background: url("/arrow-right.png") no-repeat 0px 0px;
    content: "";
    display: inline-block;
    height: 13px;
    width: 10px;
    margin-left: 10px;
  }
`;
