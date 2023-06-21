import React from "react";
import { Route, Routes } from "react-router-dom";
import EventLandingPage from "demos/EventLandingPage.js";
import TearmsAndCondition from "demos/TermsAndCondition";
import ContactUsForm from "pages/ContactUs";
import AboutUs from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColSimple.js";
import Themes from "components/cards/TabCardGrid.js";
import Reviews from "components/testimonials/TwoColumnWithImage";
import Event from "pages/Event.js";
import rupeeIcon from "images/icon/rupee.png";
import editIcon from "images/icon/edit.png";
import internateIcon from "images/icon/internate.png";
import tw from "twin.macro";

const HighlightedText = tw.span`bg-primary-800 text-gray-100 px-4 transform -skew-x-12 inline-block`;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EventLandingPage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/themes" element={<Themes />} />
      <Route path="/features" element={<Features
        heading={
          <>
            Our Amazing <HighlightedText>Features.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: internateIcon,
            title: "Availiblity",
            description:
              "We are available on Website, WhatshApp, Google, Social media platforms like Instagram, Facebook, Linkedin and etc.",
            url: "https://google.com",
          },
          {
            imageSrc: editIcon,
            title: "Customizable",
            description:
              "By our efforts, We Execute your Imagination, into Reality",
            url: "https://timerse.com",
          },
          {
            imageSrc: rupeeIcon,
            title: "Affordable",
            description:
              "We promise to offer you the best rate we can - at par with the industry standard.",
            url: "https://reddit.com",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contactUs" element={<ContactUsForm />} />
      <Route path="/teamsCondition" element={<TearmsAndCondition />} />
      <Route path="/event/:id" element={<Event />} />
    </Routes>
  );
};

export default AppRoutes;
