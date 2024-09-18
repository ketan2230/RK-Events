import React, { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import SocialHeader from "./SocialHeader.js";

import Header, {
  NavLink,
  NavLinks,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`sm:py-1 py-0 max-w-none w-full absolute px-5 z-30 sticky top-0 w-full text-white z-50`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    .active {
      ${tw`text-gold`}
    }
    ${tw`text-gray-400 hover:text-gold cursor-pointer pb-2 transition duration-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-400 hover:text-primary-500`}
  }
  ${LogoLink} {
    ${tw`text-gray-100 cursor-pointer`}
  }
`;

const HeaderContainer = styled.div`
  ${tw`fixed top-0 w-full text-white z-50 transition duration-300 bg-black opacity-80`}
`;

const navLinks = [
  <NavLinks key={1}>
    <NavLink href="/">
      <span className={window.location.pathname === "/" ? "active" : ""}>
        Home
      </span>
    </NavLink>
    <NavLink href="/aboutUs">
      <span className={window.location.pathname === "/aboutUs" ? "active" : ""}>
        About Us
      </span>
    </NavLink>
    <NavLink href="/themes">
      <span className={window.location.pathname === "/themes" ? "active" : ""}>
        Themes
      </span>
    </NavLink>
    <NavLink href="/reviews">
      <span className={window.location.pathname === "/reviews" ? "active" : ""}>
        Testimonials
      </span>
    </NavLink>
    <NavLink href="/contactUs">
      <span
        className={window.location.pathname === "/contactUs" ? "active" : ""}
      >
        Contact Us
      </span>
    </NavLink>
  </NavLinks>,
];

(function () {
  var anchors = document.getElementsByTagName("a"); //Find all links
  var historyState = {};
  for (var i = 0; i < anchors.length; i++) {
    if (
      anchors[i].href.substring(0, window.location.origin.length) !==
      window.location.origin
    ) {
      continue;
    }

    anchors[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      if (window.history && window.history.pushState) {
        window.history.pushState(
          historyState,
          evt.target.innerHTML,
          evt.target.href
        );
      }
    });
  }
})();

const MainStickyHeader = () => {
  const [showSocialMedia, setSocialMedia] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setSocialMedia(false);
      } else {
        setSocialMedia(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer>
      {showSocialMedia && <SocialHeader />}
      <StyledHeader links={navLinks} />
    </HeaderContainer>
  );
};

export default MainStickyHeader;
