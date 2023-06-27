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
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
// import logo from "../../images/logoWhite.png";


const StyledHeader = styled(Header)`
  ${tw`sm:py-2 py-0 max-w-none w-full bg-black relative px-5 z-30`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    .active {
      ${tw`text-yellow-400`}
    }
    ${tw`text-gray-100 hover:text-yellow-400 hover:shadow-md hover:transform hover:transition duration-300 cursor-pointer`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const HeaderContainer = styled.header`
  ${tw`sticky top-0 w-full bg-black text-white z-50`}
`;

const HeaderContent = styled.div`
  ${tw`sm:flex py-1 w-full border-b border-gray-600`}
`;

const SocialLinksContainer = tw.div`my-2 sm:my-1 mx-auto sm:mx-0 sm:justify-end flex w-full`;
const ContactContainer = tw.div`hidden my-1 mt-1 ml-4 sm:flex items-center`;
const Details = tw.div`text-gray-100 hover:text-yellow-400 transition cursor-pointer duration-300 mx-2`;
const SocialLinkContact = styled.a`
  ${tw`cursor-pointer flex items-center text-gray-100 hover:text-yellow-400 transition duration-300 mx-4 font-mono sm:w-full`}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const SocialLinkContactMobile = styled.a`
  ${tw`cursor-pointer inline-block sm:hidden hover:shadow-md hover:transform hover:transition duration-300 text-gray-100 hover:text-yellow-400 transition duration-300 mx-auto sm:mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block hover:shadow-md hover:transform hover:transition duration-300 text-gray-100 hover:text-yellow-400 transition duration-300 mx-auto sm:mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const navLinks = [
  <NavLinks key={1}>
    <NavLink href="/"><span className={window.location.pathname === '/' ? 'active' : ''}>Home</span></NavLink>
    <NavLink href="/aboutUs" ><span className={window.location.pathname === '/aboutUs' ? 'active' : ''}>About Us</span></NavLink>
    <NavLink href="/themes"><span className={window.location.pathname === '/themes' ? 'active' : ''}>Themes</span></NavLink>
    <NavLink href="/features"><span className={window.location.pathname === '/features' ? 'active' : ''}>Features</span></NavLink>
    <NavLink href="/reviews"><span className={window.location.pathname === '/reviews' ? 'active' : ''}>Reviews</span></NavLink>
    <NavLink href="/contactUs"><span className={window.location.pathname === '/contactUs' ? 'active' : ''}>Contact Us</span></NavLink>
    <NavLink href="/teamsCondition"><span className={window.location.pathname === '/teamsCondition' ? 'active' : ''}>Terms & Condition</span></NavLink>
  </NavLinks>,
];

(function() {
	var anchors = document.getElementsByTagName('a'); //Find all links
	var historyState = {};
	//We will use the current "folder" as the base, so all new locations are relative to that
	// var base = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
	
	//Go through all the links and change the relevant ones
	for (var i = 0; i < anchors.length; i++) {
		//Only apply this to same domain links
		if (anchors[i].href.substring(0, window.location.origin.length) !== window.location.origin) {
			continue;
		}
		
		anchors[i].addEventListener('click', function(evt) {
			//When clicked, we do not want the link to be processed normally
			evt.preventDefault();
			
			//Change to new page with hash
			// var newPage = window.location.href + '#' + evt.target.href.replace(base, '');
			// window.location.href = newPage;
			
			//Only do this if history.pushState is supported by the browser
			if (window.history && window.history.pushState) {
				//Remove hash from URL and replace with desired URL
				window.history.pushState(historyState, evt.target.innerHTML, evt.target.href)
			}
		});
	}
})();


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
          <SocialLinkContactMobile href="tel:+918488824036">
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
    </HeaderContainer>
  );
};

export default MainStickyHeader;
