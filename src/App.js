import React, { lazy, Suspense } from 'react';
import { css } from "styled-components/macro"; //eslint-disable-line
import { BrowserRouter as Router } from "react-router-dom";
const MainStickyHeader = lazy(() => import('./components/headers/MainStickyHeader'));
const Footer = lazy(() => import('./components/footers/MiniCenteredFooter'));
const GoToTop = lazy(() => import('./components/footers/GoToTop'));
const Loader = lazy(() => import('./components/common/Loader'));
const AppRoutes = lazy(() => import('./components/common/Routes'));
const GlobalStyles = lazy(() => import('./style/GlobalStyles'));


export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyles />
      <MainStickyHeader />
      <Router>
        <AppRoutes />
      </Router>
      <GoToTop />
      <Footer />
    </Suspense>
  );
}
