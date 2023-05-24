import React from 'react';
import tw, { styled } from 'twin.macro';
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as GoogleIcon } from "../../images/google-icon1.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram-icon.svg";
import { ReactComponent as WhatsAppIcon } from "../../images/whatsapp.svg";
import { ReactComponent as CallIcon } from "../../images/call.svg";
import { ReactComponent as Email } from "../../images/email.svg";
import logo from "../../images/logoWhite.png";

const HeaderContainer = styled.header`
  ${tw`fixed top-0 w-full bg-black text-white z-50`}
`;

const HeaderContent = styled.div`
  ${tw`flex py-1 w-full border-b border-gray-600`}
`;

const MainHeader = styled.div`
  ${tw`container mx-auto flex items-center justify-between py-2`}
`;

const LogoFlex = styled.a`
${tw`flex items-center cursor-pointer`}
`;

const Logo = styled.img`
  ${tw`h-16 mr-2`}
`;

const LogoText = styled.span`
    ${tw`text-2xl! text-white font-semibold`}
`;

const NavLink = styled.a`
  ${tw`mx-5 text-white font-mono hover:text-gray-500`}
`;

const Navigation = styled.nav``;

const Button = styled.button`
  ${tw`bg-white text-black py-2 px-4 rounded hover:bg-gray-500`}
`;

const SocialLinksContainer = tw.div`my-1 mt-1 mr-4 ml-auto`;
const ContactContainer = tw.div`my-1 mt-1 ml-4 flex items-center`;
const Details = tw.div`text-gray-100 hover:text-gray-500 transition cursor-pointer duration-300 mx-2`;
const SocialLinkContact = styled.a`
  ${tw`cursor-pointer flex items-center text-gray-100 hover:text-gray-500 transition duration-300 mx-4 font-mono`}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

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
      <MainHeader>
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
          <NavLink href="/teamsCondition">Tearms & Condition</NavLink>
          {/* Add more routes as needed */}
        </Navigation>
        <Button>Book Now</Button>
      </MainHeader>
    </HeaderContainer>
  );
};

export default MainStickyHeader;
