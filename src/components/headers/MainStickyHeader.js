import React from 'react';
import tw, { styled } from 'twin.macro';
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as GoogleIcon } from "../../images/google-icon1.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram-icon.svg";
import { ReactComponent as WhatsAppIcon } from "../../images/whatsapp.svg";
import { ReactComponent as CallIcon } from "../../images/call.svg";
import { ReactComponent as Email } from "../../images/email.svg";
import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
// import logo from "../../images/logoWhite.png";

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;

const StyledHeader = styled(Header)`
  ${tw`sm:py-2 py-0 max-w-none w-full bg-black absolute px-5 z-30`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300 cursor-pointer`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const HeaderContainer = styled.header`
  ${tw`fixed top-0 w-full bg-black text-white z-50`}
`;

const HeaderContent = styled.div`
  ${tw`sm:flex py-1 w-full border-b border-gray-600`}
`;

const SocialLinksContainer = tw.div`my-2 sm:my-1 mx-auto sm:mx-0 sm:justify-end flex w-full`;
const ContactContainer = tw.div`hidden my-1 mt-1 ml-4 sm:flex items-center`;
const Details = tw.div`text-gray-100 hover:text-gray-500 transition cursor-pointer duration-300 mx-2`;
const SocialLinkContact = styled.a`
  ${tw`cursor-pointer flex items-center text-gray-100 hover:text-gray-500 transition duration-300 mx-4 font-mono sm:w-full`}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const SocialLinkContactMobile = styled.a`
  ${tw`cursor-pointer flex sm:hidden items-center text-gray-100 hover:text-gray-500 transition duration-300 mx-4 font-mono sm:w-full`}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-auto sm:mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const navLinks = [
  <NavLinks key={1}>
    <NavLink href="/">Home</NavLink>
      <NavLink href="/aboutUs">About Us</NavLink>
      <NavLink href="/themes">Themes</NavLink>
      <NavLink href="/features">Features</NavLink>
      <NavLink href="/reviews">Reviews</NavLink>
      <NavLink href="/contactUs">Contact Us</NavLink>
      <NavLink href="/teamsCondition">Terms & Condition</NavLink>
  </NavLinks>,
  <NavLinks key={2}>
    <PrimaryLink>Book Your Date</PrimaryLink>
  </NavLinks>,
];

const MainStickyHeader = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <ContactContainer>
          <SocialLinkContact href="tel:+918488824036" target="_">
            <CallIcon />
            <Details>+918488824036</Details>
          </SocialLinkContact>
          <SocialLinkContact href="mailto:rkevents17@gmail.com" target="_">
            <Email />
            <Details>rkevents17@gmail.com</Details>
          </SocialLinkContact>
        </ContactContainer>
        <SocialLinksContainer>
          <SocialLinkContactMobile href="tel:+918488824036" target="_">
            <CallIcon />
          </SocialLinkContactMobile>
          <SocialLinkContactMobile href="mailto:rkevents17@gmail.com" target="_">
            <Email />
          </SocialLinkContactMobile>
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
      </HeaderContent>
      <StyledHeader links={navLinks} />
      {/* <MainHeader>
        <LogoFlex href="/">
          <Logo src={logo} alt="Logo" />
          <LogoText>RK EVENTS</LogoText>
        </LogoFlex>
        <Navigation>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/aboutUs">About Us</NavLink>
          <NavLink href="/themes">Themes</NavLink>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/reviews">Reviews</NavLink>
          <NavLink href="/contactUs">Contact Us</NavLink>
          <NavLink href="/teamsCondition">Terms & Condition</NavLink>
        </Navigation>
        <Button>Book Now</Button>
      </MainHeader> */}
    </HeaderContainer>
  );
};

export default MainStickyHeader;
