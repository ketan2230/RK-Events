import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useState, useEffect } from 'react';

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";

const bgImages = [
  {
    imageSrc: "/images/mainPage/image1.jpg",
    slogan:"Leave the planning to us, and enjoy the celebration."
  },
  {
    imageSrc: "/images/mainPage/image2.jpg",
    slogan:"Designing experiences that will leave you speechless."
  },
  {
    imageSrc: "/images/mainPage/image3.jpg",
    slogan:"Let's make your dream event a reality!"
  },
  {
    imageSrc: "/images/mainPage/image4.jpg",
    slogan:"Creating memories that will last a lifetime."
  },
  {
    imageSrc: "/images/mainPage/image5.jpg",
    slogan:"From concept to execution, we've got you covered."
  }
]

const StyledHeader = styled(Header)`
  ${tw`pt-5 max-w-none w-full`}
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

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center w-3/5 mx-auto`;

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

  const [bgIndex, setBgIndex] = useState(0);
  const currentBgImage = bgImages[bgIndex % bgImages.length];

  const style = {
    backgroundImage: `url(${currentBgImage.imageSrc})`,
    transition: 'opacity 4s ease-in-out',
    opacity: 1,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <Container style={style}>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
            {currentBgImage.slogan}
          </Heading>
          {/* <PrimaryAction>Explore Themes</PrimaryAction> */}
        </Content>
      </HeroContainer>
    </Container>
  );
};
