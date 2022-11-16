import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import EventLandingPage from "demos/EventLandingPage.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <GlobalStyles />
      {/* <EventLandingPage /> */}
      <Router>
        <Routes>
          {/* <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} /> */}
          {/* <Route path="/components/:type/:name" element={<ComponentRenderer />} /> */}
          {/* <Route path="/thank-you" element={<ThankYouPage />} /> */}
          <Route path="/" element={<EventLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

