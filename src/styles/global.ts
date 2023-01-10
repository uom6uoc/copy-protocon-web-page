import { createGlobalStyle } from "styled-components";
import { mixinCss } from "./mixin";
import { resetCss } from "./reset";
import { fontsCss } from "./web-fonts";

export default createGlobalStyle`
  ${resetCss}
  ${mixinCss}
  ${fontsCss}
  
  a {
    text-decoration: none;
    color: inherit;
  }


body {
  overflow-x: hidden; /*height:100%;*/
  font-family: ofelia-text, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  line-height: 1.3;
  background: #F5F5F5;
  -ms-overflow-style: none;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: none;
  -moz-osx-font-smoothing: gratranslate3d(0, 0, 0) yscale;  background: url("../../images/background.svg") 0 no-repeat;
    background-size: 100%;
    background-position: 0px 0px;
    -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}

img{
  width:100%;
}

.max-w {
  max-width:960px;
  margin: 0 auto;  
}

article {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
}


`;
