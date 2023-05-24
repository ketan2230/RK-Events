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
// import { useNavigate } from "react-router-dom";

const Container = tw(ContainerBase)`bg-black text-gray-100 bottom-0 w-full`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const NavLink = tw.a`font-mono hover:text-gray-500 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default () => {
  // const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <img src={logo} alt="logo" width="70px" />
            {/* <LogoImg src={logo} width="70px" /> */}
            <LogoText href="/">RK EVENTS</LogoText>
          </LogoContainer>
          <LinksContainer>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/aboutUs">About Us</NavLink>
          <NavLink href="/themes">Themes</NavLink>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/reviews">Reviews</NavLink>
          <NavLink href="/contactUs">Contact Us</NavLink>
          <NavLink href="/teamsCondition">Tearms & Condition</NavLink>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/people/RK-Events/100063812500363/" target="_">
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
            <SocialLink href="https://www.instagram.com/r_k__events/" target="_">
              <InstagramIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2023, RK EVENTS Planner All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
