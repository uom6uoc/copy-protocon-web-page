import styled from "styled-components";
import LogoImg from "assets/images/logo.png";
import CloseIcon from "assets/images/icon-close.png";

import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { MenuType } from "types/types";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const SideNavigation = ({ visible, onClose }: Props) => {
  let menuClasses = ["side-drawer"];
  if (visible) {
    menuClasses = ["side-drawer", "open"];
  }
  const [openMenu, setOpenMenu] = useState<MenuType | null>(null);

  const toggleMenu = (menu: MenuType) => {
    if (openMenu === menu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menu);
    }
  };

  const onHandleClose = () => {
    setOpenMenu(null);
    onClose();
  };

  return (
    <Container>
      <nav className={menuClasses.join(" ")}>
        <header>
          <div>
            <img src={LogoImg} className="logo" alt="logo" />
          </div>
          <div onClick={onHandleClose}>
            <img src={CloseIcon} className="ic-close" alt="close" />
          </div>
        </header>
        <ul>
          <MenuItem
            menu="About"
            openMenu={openMenu}
            toggleMenu={toggleMenu}
            subMenus={
              <>
                <div>Intro to Protocon</div>
                <div>Pen Token</div>
                <div>Team</div>
              </>
            }
          />
          <div className="hr" />
          <MenuItem
            menu="Developer"
            openMenu={openMenu}
            toggleMenu={toggleMenu}
          />
          <div className={`hr`} />

          <MenuItem
            menu="Ecosystem"
            openMenu={openMenu}
            toggleMenu={toggleMenu}
          />
          <div className={`hr`} />

          <MenuItem
            menu="Community"
            openMenu={openMenu}
            toggleMenu={toggleMenu}
          />
        </ul>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  header {
    padding-bottom: 25px;
    display: flex;
    justify-content: space-between;
  }

  .hr {
    width: 100%;
    height: 1px;
    background: linear-gradient(111.93deg, #4ae6e6 3.86%, #fc72ff 115.46%);
    opacity: 0.5;
  }

  .logo {
    width: 133px;
    height: 24px;
  }
  img.ic-close {
    width: 21px !important;
    height: 21px;
    cursor: pointer;
  }
  .sub-menu div {
    font-family: basic-sans, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 16px;
    letter-spacing: -0.05em;

    color: #000000;
  }
  .side-drawer {
    padding: 58px 25px 58px 16px;
    height: 100%;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    box-sizing: border-box;
    z-index: 200;
    transform: translateX(200%);
    transition: transform 0.3s ease-out;
  }

  .side-drawer.open {
    transform: translateX(0);
  }

  .side-drawer ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .side-drawer a:hover,
  .side-drawer a:active {
    color: #fa923f;
  }
  @media (min-width: 960px) {
    .side-drawer {
      display: none;
    }
  }
`;
