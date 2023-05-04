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
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
  'https://images.unsplash.com/photo-1568469842360-715366f82f62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1638619140370-550155b65e51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1515715709530-858f7bfa1b10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80',
];

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
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

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
    backgroundImage: `url(${currentBgImage})`,
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
            It's time to celebrate!
            <br />
            We plan best events
          </Heading>
          {/* <PrimaryAction>Explore Themes</PrimaryAction> */}
        </Content>
      </HeroContainer>
    </Container>
  );
};
