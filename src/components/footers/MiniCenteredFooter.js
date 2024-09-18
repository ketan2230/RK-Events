import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/logoWhite.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as GoogleIcon } from "../../images/google-icon1.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram-icon.svg";
import { ReactComponent as WhatsAppIcon } from "../../images/whatsapp.svg";
import { ReactComponent as CallIcon } from "../../images/call.svg";
import { ReactComponent as Email } from "../../images/email.svg";
// import { useNavigate } from "react-router-dom";

const Container = tw(ContainerBase)`bg-black text-gold bottom-0 w-full`;
const Content = tw.div`max-w-screen-xl mx-auto py-12`;

const Row = tw.div`flex items-center justify-center flex-col px-2 md:px-8`;

const LogoContainer = tw.a`flex items-center justify-center md:justify-start`;
const LogoText = tw.a`ml-2 text-2xl font-black tracking-wider text-white`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const NavLink = styled.a`
  ${tw`font-mono text-gray-400 transition duration-300 mt-2 mx-4 hover:text-gold pt-2 text-lg`}

  .active {
    ${tw`text-gold`}
  }
`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-400 hover:text-gold transition duration-300 sm:mx-4 mx-2`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default () => {
  // const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <img src={logo} alt="logo" width="70px" />
            <LogoText href="/">RK EVENTS</LogoText>
          </LogoContainer>
          <LinksContainer>
            <NavLink href="/">
              <span
                className={window.location.pathname === "/" ? "active" : ""}
              >
                Home
              </span>
            </NavLink>
            <NavLink href="/aboutUs">
              <span
                className={
                  window.location.pathname === "/aboutUs" ? "active" : ""
                }
              >
                About Us
              </span>
            </NavLink>
            <NavLink href="/themes">
              <span
                className={
                  window.location.pathname === "/themes" ? "active" : ""
                }
              >
                Themes
              </span>
            </NavLink>
            <NavLink href="/reviews">
              <span
                className={
                  window.location.pathname === "/reviews" ? "active" : ""
                }
              >
                Testimonials
              </span>
            </NavLink>
            <NavLink href="/contactUs">
              <span
                className={
                  window.location.pathname === "/contactUs" ? "active" : ""
                }
              >
                Contact Us
              </span>
            </NavLink>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="tel:+918488824036">
              <CallIcon />
            </SocialLink>
            <SocialLink href="mailto:rkevents17@gmail.com" target="_">
              <Email />
            </SocialLink>
            <SocialLink
              href="https://www.facebook.com/people/RK-Events/100063812500363/"
              target="_"
            >
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://wa.me/+918488824036" target="_">
              <WhatsAppIcon />
            </SocialLink>
            <SocialLink href="https://g.page/r/CUnV5lNVHs9vEA0" target="_">
              <GoogleIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com/@rk_events" target="_">
              <YoutubeIcon />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/r_k__events/"
              target="_"
            >
              <InstagramIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright {currentYear}, RK EVENTS Planner All Rights
            Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
