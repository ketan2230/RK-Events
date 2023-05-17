import React from 'react';
import tw, { styled } from 'twin.macro';
import logo from "../../images/logoWhite.png";

const HeaderContainer = styled.header`
  ${tw`fixed top-0 left-0 w-full bg-black text-white z-50`}
`;

const HeaderContent = styled.div`
  ${tw`container mx-auto flex items-center justify-between py-4`}
`;

const LogoFlex = styled.div`
${tw`flex items-center`}
`;

const Logo = styled.img`
  ${tw`h-16 mr-4`}
`;

const LogoText = styled.span`
    ${tw`text-2xl! text-white`}
`;

const Navigation = styled.nav``;

const NavLink = styled.a`
  ${tw`mx-5 text-white font-sans`}
`;

const Button = styled.button`
  ${tw`bg-white text-black py-2 px-4 rounded`}
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoFlex>
          <Logo src={logo} alt="Logo" />
          <LogoText>RK EVENTS</LogoText>
        </LogoFlex>
        <Navigation>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
          <NavLink href="/terms">Terms & Conditions</NavLink>
          {/* Add more routes as needed */}
        </Navigation>
        <Button>Book Now</Button>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
