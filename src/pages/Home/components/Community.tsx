import styled from "styled-components";
import { useResponsive } from "hooks/useResponsive";
import { H6, Paragraph, TitleSub } from "styles/Fonts";
import IconTwitter from "assets/images/icon-twitter.png";
import IconGithub from "assets/images/icon-github.png";
import IconDeveloperChat from "assets/images/icon-developer-chat.png";
import IconCommunityChat from "assets/images/icon-community-chat.png";
import BgObj12 from "assets/images/background/bg-obj-12.png";

export const Community = () => {
  const { isDesktop } = useResponsive();
  return (
    <Container className="community">
      <div
        className="bg-obj-1"
        style={{ backgroundImage: `url(${BgObj12})` }}
      ></div>
      <div className="inner">
        <div className="text-container">
          <TitleSub
            pb={isDesktop ? 20 : 30}
          >{`Join our Global\nCommunity`}</TitleSub>
          <Paragraph pb={isDesktop ? 36 : 40}>
            {`Join a growing community of developers, builders, and innovators all over the world that are contributing to the new Protocol Economy.
`}
          </Paragraph>
        </div>
        <div className="card-container">
          <div className="card-bg"></div>
          <div className="card">
            <ul>
              <li>
                <img src={IconCommunityChat} alt="Community Chat" />
                <div>
                  <H6>Community Chat</H6>
                  <p>
                    {`Ask general questions and partake in discussions \n
                    with our global community on Telegram!`}
                  </p>
                </div>
              </li>
              <li>
                <img src={IconTwitter} alt="Twitter" />
                <div>
                  <H6>Twitter</H6>
                  <p>
                    {`Follow @Protoconpen to receive the latest news and updates about the Protocon Ecosystem`}
                  </p>
                </div>
              </li>
              <li>
                <img src={IconGithub} alt="Github" />
                <div>
                  <H6>Github</H6>
                  <p>
                    {`Are you a developer? Contribute to dev discussions and code on our GitHub!`}
                  </p>
                </div>
              </li>
              <li>
                <img src={IconDeveloperChat} alt="Developer Chat" />
                <div>
                  <H6>Developer Chat</H6>
                  <p>
                    {`If you have any technical questions about Protocon, please reach out to our fellow developers in our community.`}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding-bottom: 320px;
  .inner {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 48px;
  }
  .text-container {
    width: 352px;
  }
  .card-bg {
    background: linear-gradient(111.93deg, #4ae6e6 3.86%, #fc72ff 115.46%);
    opacity: 0.3;
    backdrop-filter: blur(7.5px);
    border-radius: 20px;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .card-container {
    width: 486px;
    position: relative;
  }
  .card {
    padding: 53px 36px;
    position: relative;
    z-index: 1;
    p {
      font-family: basic-sans, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.04em;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
  li {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  li img {
    width: 65px;
    height: 65px;
  }
  .bg-obj-1 {
    position: absolute;
    left: 0px;
    width: 711px;
    height: 815px;
    transform: translateY(100px);
  }
  /* Tablet */
  @media (max-width: 960px) {
    padding: 0 77px 544px;

    .inner {
      flex-direction: column;
    }
    .text-container {
      width: 400px;
    }
    .card-container {
      width: 530px;
      .card p {
        padding-right: 20px;
      }
    }
    .bg-obj-1 {
      transform: translate(-300px, 700px);
    }
  }
`;
