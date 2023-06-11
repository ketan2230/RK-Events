import React, { lazy, Suspense } from 'react';
// import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import { BrowserRouter as Router } from "react-router-dom";
// import MainStickyHeader from "components/headers/MainStickyHeader";
// import Loader from "components/common/Loader"
const MainStickyHeader = lazy(() => import('./components/headers/MainStickyHeader'));
const Footer = lazy(() => import('./components/footers/MiniCenteredFooter'));
const GoToTop = lazy(() => import('./components/footers/GoToTop'));
const Loader = lazy(() => import('./components/common/Loader'));
const AppRoutes = lazy(() => import('./components/common/Routes'));
const GlobalStyles = lazy(() => import('./styles/GlobalStyles'));
// import Footer from "components/footers/MiniCenteredFooter";
// import GoToTop from "components/footers/GoToTop";
// import AppRoutes from "components/common/Routes";


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
