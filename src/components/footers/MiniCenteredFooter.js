import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/logoWhite.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as GoogleIcon } from "../../images/google-icon1.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram-icon.svg";
import { useNavigate } from "react-router-dom";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-5`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default ({
  gotoAbout,
  gotoFeatures,
  gotoThemes,
  gotoReview,
  gotoContact,
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <img src={logo} alt="logo" width="70px" />
            {/* <LogoImg src={logo} width="70px" /> */}
            <LogoText onClick={() => navigate(`/`)}>RK EVENTS</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link onClick={() => navigate(`/`)}>Home</Link>
            <Link onClick={() => gotoAbout()}>About</Link>
            <Link onClick={() => gotoThemes()}>Themes</Link>
            <Link onClick={() => gotoFeatures()}>Services</Link>
            <Link onClick={() => gotoReview()}>Reviews</Link>
            <Link onClick={() => gotoContact()}>Contact Us</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/profile.php?id=100063812500363" target="_">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://goo.gl/maps/ACPNh7eQK31HFBGA6?coh=178573&entry=tt" target="_">
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
