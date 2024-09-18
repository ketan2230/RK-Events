import React from "react";
import { Route, Routes } from "react-router-dom";
import EventLandingPage from "demos/EventLandingPage.js";
// import TearmsAndCondition from "demos/TermsAndCondition";
import New from "pages/New";
import ContactUsForm from "pages/ContactUs";
import AboutUs from "pages/Aboutus";
import Themes from "components/cards/TabCardGrid.js";
import Reviews from "pages/Testimonials";
import Event from "pages/Event.js";
// import rupeeIcon from "images/icon/rupee.png";
// import editIcon from "images/icon/edit.png";
// import internateIcon from "images/icon/internate.png";
// import tw from "twin.macro";

// const HighlightedText = tw.span`bg-darkgold text-gray-100 px-4 transform -skew-x-12 inline-block`;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EventLandingPage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/themes" element={<Themes />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contactUs" element={<ContactUsForm />} />
      <Route path="/teamsCondition" element={<New />} />
      <Route path="/event/:id" element={<Event />} />
    </Routes>
  );
};

export default AppRoutes;
