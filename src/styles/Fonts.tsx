import styled from "styled-components";

export const Title = styled.h2<{ pb?: number }>`
  font-family: ofelia-text, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 58px;
  letter-spacing: -0.06em;
  padding-bottom: ${(props) => (props.pb ? `${props.pb}px` : "0px")};
`;

export const TitleSub = styled.h3<{ pb?: number }>`
  font-family: ofelia-text, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 58px;
  letter-spacing: -0.06em;
  text-align: left;
  padding-bottom: 20px;
  padding-bottom: ${(props) => (props.pb ? `${props.pb}px` : "0px")};
  white-space: pre-line;
`;

export const Paragraph = styled.p<{ pb?: number }>`
  font-family: basic-sans, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 21px;
  line-height: 31px;
  letter-spacing: -0.06em;
  white-space: pre-line;
  padding-bottom: ${(props) => (props.pb ? `${props.pb}px` : "0px")};
`;

export const H5 = styled.p<{ pb?: number }>`
  font-family: ofelia-text, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 42px;
  letter-spacing: -0.05em;
  padding-bottom: ${(props) => (props.pb ? `${props.pb}px` : "0px")};
`;

export const H6 = styled.h6<{ pb?: number }>`
  font-family: ofelia-text, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 40px;
  letter-spacing: -0.06em;
  padding-bottom: ${(props) => (props.pb ? `${props.pb}px` : "0px")};
`;
