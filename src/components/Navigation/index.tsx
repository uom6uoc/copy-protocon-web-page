import { useState } from "react";
import styled from "styled-components";

import { useResponsive } from "hooks/useResponsive";
import { SideNavigation } from "components/SideNavigation";

import Img1 from "assets/images/background/bg-obj-1.png";
import IconHamburger from "assets/images/icon-hamburger.png";

export const Navigation = () => {
  const { isDesktop } = useResponsive();
  const [visibleNavigation, setVisibleNavigation] = useState(false);

  return (
    <Container isDesktop={isDesktop}>
      <img src={Img1} alt="object" className="bg-obj-1" />
      <section className="nav-inner">
        <a href="index_ko.html">
          <img src="/logo.png" className="logo" alt="로고" />
        </a>
        {isDesktop ? (
          <ul className="nav-pc">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Developer</a>
            </li>
            <li>
              <a href="#">Ecosystem</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        ) : (
          <div className="nav-mobile">
            {visibleNavigation ? <div>dd</div> : <div>bb</div>}
            <div onClick={() => setVisibleNavigation(!visibleNavigation)}>
              <img src={IconHamburger} className="ic-hamburger" alt="menu" />
            </div>
            <SideNavigation
              visible={visibleNavigation}
              onClose={() => setVisibleNavigation(false)}
            />
          </div>
        )}
      </section>
    </Container>
  );
};

const Container = styled.nav<{ isDesktop: boolean }>`
  padding: 0 20px;
  position: relative;
  ${(props) => (props.isDesktop ? "width: 1220px;" : "")}

  .nav-inner {
    height: 108px;
    display: flex;

    justify-content: space-between;
    align-items: center;
  }

  .nav-pc {
    display: flex;
    gap: 50px;
  }

  .nav-pc li {
    font-family: ofelia-text, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.03em;
    color: #000000;
  }
  .nav-inner .logo {
    width: 142px;
  }
  .bg-obj-1 {
    width: 320px;
    height: 159px;
    position: absolute;
    top: 0px;
    left: 360px;
  }
  .nav-mobile {
    z-index: 100;
  }
  img.ic-hamburger {
    width: 28px;
    height: 18px;
    cursor: pointer;
  }
`;
