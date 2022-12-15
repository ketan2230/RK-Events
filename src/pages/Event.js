import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import Header, {
  DesktopNavLinks,
  LogoLink,
  NavLinks,
  NavLink,
  NavToggle,
  PrimaryLink as PrimaryLinkBase,
} from "components/headers/light.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import { useParams, useNavigate } from "react-router-dom";
import Data from "data/events.json";
import EventLandingPage from "demos/EventLandingPage.js";
import Footer from "components/footers/MiniCenteredFooter";

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;

const StyledHeader = styled(Header)`
  ${tw`pt-5 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`hover:border-gray-800 hover:text-gray-800`}
  }
  ${NavToggle}.closed {
    ${tw`hover:text-primary-100`}
  }
`;

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const navLinks = [
    <NavLinks key={1}>
      <NavLink onClick={() => navigate("/")}>About</NavLink>
      <NavLink onClick={() => navigate("/")}>Themes</NavLink>
      <NavLink onClick={() => navigate("/")}>Features</NavLink>
      <NavLink onClick={() => navigate("/")}>Reviews</NavLink>
      <NavLink onClick={() => navigate("/")}>Contact Us</NavLink>
      <NavLink onClick={() => navigate("/")}>Tearms & Condition</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink onClick={() => navigate("/")}>Book Your Date</PrimaryLink>
    </NavLinks>,
  ];

  const event = Data.tabs.Marriage.find((el) => el.slug === id);
  return event ? (
    <AnimationRevealPage>
      {/* <Header /> */}
      <StyledHeader links={navLinks} />
      <MainFeature1
        subheading={<Subheading></Subheading>}
        description={event.content}
        heading={event.title}
        buttonRounded={false}
        primaryButtonText={event.category}
        imageSrc={event.image}
      />
      <Footer />
    </AnimationRevealPage>
  ) : (
    <EventLandingPage />
  );
};
