import { MenuType } from "types/types";
import ArrowDownIcon from "assets/images/icon-arrow-down.png";
import styled from "styled-components";

interface Props {
  menu: MenuType;
  openMenu: MenuType | null;
  toggleMenu: (menu: MenuType) => void;
  subMenus?: JSX.Element;
}
export const MenuItem = ({ menu, openMenu, toggleMenu, subMenus }: Props) => {
  const activeClasses = menu === openMenu ? "active" : "";
  return (
    <Container className={`main-menu`} onClick={() => toggleMenu(menu)}>
      <div className="main-menu-name">
        <span>{menu}</span>
        <img
          src={ArrowDownIcon}
          className={`ic-arrow-down ${activeClasses}`}
          alt="down arrow"
        />
      </div>

      {subMenus && (
        <div className={`sub-menu-wapper  ${activeClasses}`}>
          <div className={`sub-menu`}>{subMenus}</div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.li`
  margin: 0.5rem 0;
  padding: 40px 0px;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  gap: 60px;
  position: relative;

  .main-menu {
    position: relative;
  }
  .main-menu-name {
    text-decoration: none;
    color: #521751;
    font-size: 1.2rem;
    padding: 10px;
  }

  img.ic-arrow-down {
    width: 21px;
    height: 10px;
    display: flex;
    position: absolute;
    right: 25px;
    top: 59px;
    transition: all ease 0.2s;
    &.active {
      transform: rotate(180deg);
    }
  }

  .sub-menu-wapper {
    position: relative;
    overflow: hidden;
  }
  .sub-menu {
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    transition: max-height 0.2s ease-out;
    max-height: 0px;
    margin-top: 10px;
  }
  .active {
    .sub-menu {
      max-height: 500px;
      transition: max-height 0.25s ease-in;
    }
  }
`;
