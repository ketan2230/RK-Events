import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Data from "data/events.json";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-5 max-w-none w-full absolute px-5 z-30`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
`;

const OpacityOverlay = tw.div`absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`relative mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center w-full`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

export default ({
  gotoAbout,
  gotoContact,
  gotoFeatures,
  gotoReview,
  gotoThemes,
}) => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink onClick={() => gotoAbout()}>About</NavLink>
      <NavLink onClick={() => gotoThemes()}>Themes</NavLink>
      <NavLink onClick={() => gotoFeatures()}>Features</NavLink>
      <NavLink onClick={() => gotoReview()}>Reviews</NavLink>
      <NavLink onClick={() => gotoContact()}>Contact Us</NavLink>
      <NavLink>Tearms & Condition</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink>Book Your Date</PrimaryLink>
    </NavLinks>,
  ];

  const bgImages = Data.mainPageImagesSlogan;

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const optionsOwl = {
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplay: 7000,
    responsiveClass: true,
  };

  return (
    <Container>
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <OwlCarousel className="owl-theme" {...optionsOwl}>
          {bgImages.map((item) => {
            return (
              <div class="item">
                <OpacityOverlay />
                <Content
                  style={{
                    backgroundImage: `url(${item.imageSrc})`,
                    transition: "opacity 4s ease-in-out",
                    opacity: 1,
                    backgroundSize: "cover",
                  }}
                >
                  <Heading
                    style={{
                      height: "100vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 99,
                    }}
                  >
                    {item.slogan}
                  </Heading>
                  {/* <PrimaryAction>Explore Themes</PrimaryAction> */}
                </Content>
              </div>
            );
          })}
        </OwlCarousel>
      </HeroContainer>
    </Container>
  );
};
