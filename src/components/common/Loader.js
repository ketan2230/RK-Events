import React from 'react';
import tw from "twin.macro";
import { ReactComponent as LoaderSVG } from "../../images/loader.svg";

const LoaderDiv = tw.div`fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black`;
// const Text = tw.h1`text-white`;

const Loader = () => (
  <LoaderDiv>
    <LoaderSVG />
  </LoaderDiv>
);

export default Loader;
