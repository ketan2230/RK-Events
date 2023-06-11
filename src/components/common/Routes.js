import React from "react";
import { Route, Routes } from "react-router-dom";
import EventLandingPage from "demos/EventLandingPage.js";
import TearmsAndCondition from "demos/TermsAndCondition";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm";
import AboutUs from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColSimple.js";
import Themes from "components/cards/TabCardGrid.js";
import Reviews from "components/testimonials/TwoColumnWithImage";
import Event from "pages/Event.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EventLandingPage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/themes" element={<Themes />} />
      <Route path="/features" element={<Features />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contactUs" element={<ContactUsForm />} />
      <Route path="/teamsCondition" element={<TearmsAndCondition />} />
      <Route path="/event/:id" element={<Event />} />
    </Routes>
  );
};

export default AppRoutes;
