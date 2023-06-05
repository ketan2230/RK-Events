import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import EventLandingPage from "demos/EventLandingPage.js";
import TearmsAndCondition from "demos/TermsAndCondition";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm";
import AboutUs from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColSimple.js";
import Themes from "components/cards/TabCardGrid.js";
import Reviews from "components/testimonials/TwoColumnWithImage";
import MainStickyHeader from "components/headers/MainStickyHeader";
import Footer from "components/footers/MiniCenteredFooter";
import GoToTop from "components/footers/GoToTop";
import Event from "pages/Event.js"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <GlobalStyles />
      {/* <EventLandingPage /> */}
      <MainStickyHeader />
      <Router>
        <Routes>
          {/* <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} /> */}
          {/* <Route path="/components/:type/:name" element={<ComponentRenderer />} /> */}
          <Route path="/" element={<EventLandingPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/features" element={<Features />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contactUs" element={<ContactUsForm />} />
          <Route path="/teamsCondition" element={<TearmsAndCondition />} />
          <Route path="/event/:id" element={<Event />} />
        </Routes>
      </Router>
      <GoToTop />
      <Footer />
    </>
  );
}

