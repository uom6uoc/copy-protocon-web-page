import { footerLinks } from "properties/footerLinks";
import styled from "styled-components";
import IconYoutube from "assets/images/icon-youtube-filled.png";
import IconMedium from "assets/images/icon-medium-filled.png";
import IconGithub from "assets/images/icon-github-filled.png";
import IconTwitter from "assets/images/icon-twitter-filled.png";
import IconTelegram from "assets/images/icon-telegram-filled.png";
import IconArrowTop from "assets/images/btn-arrow-top-filled.png";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Container className="footer">
      <div className="max-w relative">
        <div className="link-cointainer">
          <div>
            <img className="logo" src="/logo.png" alt="로고" />
          </div>
          <div className="menu-categories">
            {footerLinks.map((footerItems, index) => (
              <div key={`category-${index}`}>
                <div className="category-title">{footerItems.category}</div>
                <div>
                  {footerItems.links.map((link, index) => (
                    <div className="link-label" key={index}>
                      {link.label}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sns-icons">
          <div>
            <img src={IconYoutube} alt="Youtube" />
          </div>
          <div>
            <img src={IconMedium} alt="Medium" />
          </div>
          <div>
            <img src={IconGithub} alt="Github" />
          </div>
          <div>
            <img src={IconTwitter} alt="Twitter" />
          </div>
          <div>
            <img src={IconTelegram} alt="Telegram" />
          </div>
        </div>

        <div className="copyright">
          © Digital Transformation Network Ltd. All Rights Reserved.
        </div>
        <div className="btn-top" onClick={() => scrollToTop()}>
          <img src={IconArrowTop} alt="top arrow" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  padding: 84px 0 94px;
  background: linear-gradient(
    174.83deg,
    rgba(151, 242, 239, 0.5) 6.7%,
    rgba(252, 114, 255, 0.5) 146.55%
  );
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */
  .relative {
    position: relative;
  }
  .logo {
    width: 173px;
    height: 32px;
  }
  .menu-category {
    display: flex;
  }
  .link-cointainer {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;
  }
  .menu-categories {
    display: flex;
    gap: 60px;
  }
  .category-title {
    font-family: ofelia-text, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #000000;
    mix-blend-mode: normal;
    padding-bottom: 10px;
  }
  .link-label {
    font-family: basic-sans, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 35px;
    letter-spacing: -0.05em;
    color: #000000;
    mix-blend-mode: normal;
    cursor: pointer;
    white-space: pre-line;
  }
  .sns-icons {
    display: flex;
    padding-bottom: 18px;
    gap: 9px;

    cursor: pointer;
    img {
      height: 48px;
      width: 48px;
    }
  }
  .copyright {
    font-family: basic-sans, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 31px;
    letter-spacing: -0.05em;
    color: #000000;
  }
  .btn-top {
    position: absolute;
    bottom: 0px;
    right: -40px;
    img {
      width: 32px;
      height: 32px;
      cursor: pointer;
    }
  }
  /* Tablet */
  @media (max-width: 960px) {
    padding-left: 77px;
    box-sizing: border-box;
    .link-cointainer {
      flex-direction: column;
      gap: 55px;
      padding-bottom: 140px;
    }
    .sns-icons {
      padding-bottom: 20px;
    }
    .btn-top {
      right: 77px;
    }
  }
`;
