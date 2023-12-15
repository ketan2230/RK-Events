import React, {useEffect, useState} from 'react';
import tw, { styled } from 'twin.macro';
// import SocialHeader from './SocialHeader.js'

import Header, {
  NavLink,
  NavLinks,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
// import logo from "../../images/logoWhite.png";


const StyledHeader = styled(Header)`
  ${tw`sm:py-2 py-0 max-w-none w-full absolute px-5 z-30 sticky top-0 w-full text-white z-50`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    .active {
      ${tw`text-yellow-400`}
    }
    ${tw`text-gray-100 hover:text-yellow-400 cursor-pointer`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const HeaderContainer = styled.div`
  ${tw`fixed top-0 w-full text-white z-50 transition duration-300`}
`;

const navLinks = [
  <NavLinks key={1}>
    <NavLink href="/"><span className={window.location.pathname === '/' ? 'active' : ''}>Home</span></NavLink>
    <NavLink href="/aboutUs" ><span className={window.location.pathname === '/aboutUs' ? 'active' : ''}>About Us</span></NavLink>
    <NavLink href="/themes"><span className={window.location.pathname === '/themes' ? 'active' : ''}>Themes</span></NavLink>
    <NavLink href="/reviews"><span className={window.location.pathname === '/reviews' ? 'active' : ''}>Reviews</span></NavLink>
    <NavLink href="/contactUs"><span className={window.location.pathname === '/contactUs' ? 'active' : ''}>Contact Us</span></NavLink>
    {/* <NavLink href="/teamsCondition"><span className={window.location.pathname === '/teamsCondition' ? 'active' : ''}>Terms & Condition</span></NavLink> */}
  </NavLinks>,
];

(function() {
	var anchors = document.getElementsByTagName('a'); //Find all links
	var historyState = {};
	for (var i = 0; i < anchors.length; i++) {
		if (anchors[i].href.substring(0, window.location.origin.length) !== window.location.origin) {
			continue;
		}
		
		anchors[i].addEventListener('click', function(evt) {
			evt.preventDefault();
			if (window.history && window.history.pushState) {
				window.history.pushState(historyState, evt.target.innerHTML, evt.target.href)
			}
		});
	}
})();


const MainStickyHeader = () => {

  const [backgroundColor, setBackgroundColor] = useState('unset');

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 60) {
        setBackgroundColor('black')
      }
      if (window.scrollY <= 60){
        setBackgroundColor('unset')
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <HeaderContainer style={{ backgroundColor }}>
      {/* <SocialHeader /> */}
      <StyledHeader links={navLinks} />
    </HeaderContainer>
    </>
  );
};

export default MainStickyHeader;
