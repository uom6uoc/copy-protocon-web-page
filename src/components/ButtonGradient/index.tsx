import styled from "styled-components";
interface Props {
  label: string;
  onClick: () => void;
}

export const ButtonGradient = ({ label, onClick }: Props) => {
  return (
    <Container>
      <a onClick={onClick}>
        <span>{label}</span>
      </a>
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  background: linear-gradient(111.93deg, #4ae6e6 3.86%, #fc72ff 115.46%);
  border-radius: 13px;
  cursor: pointer;
  color: white;

  a {
    font-family: ofelia-text, sans-serif;
    display: block;
    background: linear-gradient(111.93deg, #4ae6e6 3.86%, #fc72ff 115.46%);
    border-radius: 13px;
    padding: 20px 40px;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.05em;
  }
  & span {
    color: #ffffff;
  }
  &:hover {
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(111.93deg, #4ae6e6 3.86%, #fc72ff 115.46%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    border: 1px solid transparent;
    border-radius: 13px;
  }
  &:hover a {
    background: white;
  }
  &:hover span {
    background: linear-gradient(111.93deg, #4ae6e6 3.86%, #fc72ff 115.46%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;
