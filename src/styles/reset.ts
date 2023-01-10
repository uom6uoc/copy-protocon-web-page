import { css } from "styled-components";

export const resetCss = css`
  ::-webkit-scrollbar {
    display: none;
  }
  body {
    overflow-x: hidden; /*height:100%;*/
    font-family: ofelia-text, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 12px;
    line-height: 1.3;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: gratranslate3d(0, 0, 0) yscale;
  }
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  form,
  fieldset,
  p,
  button,
  iframe,
  th,
  td {
    margin: 0;
    padding: 0;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  section,
  summary {
    display: block;
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  dt {
    font-weight: normal;
  }
  img,
  fieldset,
  iframe,
  button {
    border: 0 none;
  }
  button {
    cursor: pointer;
    background: none;
  }
  button:focus {
    outline: 0;
  }
  li {
    list-style: none;
  }
  button {
    border: 0 none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  th,
  td {
    border-collapse: collapse;
  }
  legend,
  caption,
  hr {
    display: none;
  }
  select,
  input,
  textarea {
  }
  i,
  em,
  u,
  cite {
    font-style: normal;
  }
  strong {
    font-weight: normal;
  }
  img {
    vertical-align: top;
    max-width: 100%;
  }
  a {
    color: #4b4c4c;
    text-decoration: none;
    outline-offset: -1px;
  }
  table {
    table-layout: fixed;
    width: 100%;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="checkbox"],
  input[type="radio"] {
    display: none;
  }
`;
