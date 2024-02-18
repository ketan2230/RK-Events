import AnimationRevealPage from "helpers/AnimationRevealPage";
// import TabGrid from "components/cards/TabCardGrid.js";
// import Testimonial from "components/testimonials/TwoColumnWithImage";
// import ContactUsForm from "pages/ContactUs";
// import MainFeature from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColSimple.js";
import RecentStory from "components/home/RecentStrory";

import rupeeIcon from "images/icon/rupee.png";
import editIcon from "images/icon/edit.png";
import internateIcon from "images/icon/internate.png";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent";
import React from "react";
import tw from "twin.macro";
import Image from "components/home/Image";

export default () => {
  const HighlightedText = tw.span`bg-yellow-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

  return (
    <div>
      <Hero />
      <AnimationRevealPage>
        {/* <TabGrid /> */}
        <Features
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
        />
        <Image image="https://wp-media-partyslate.imgix.net/2021/05/photo-850b35ef-a429-4e24-b6b3-a724685e97ca.jpeg?auto=compress%2Cformat&ixlib=php-3.3.1" />

        <RecentStory />
        <Image image="https://wp-media-partyslate.imgix.net/2021/04/photo-069009d6-7a72-44d9-9bd8-d69ec5f67e44.jpeg?auto=compress%2Cformat&ixlib=php-3.3.1" />

        {/* <Testimonial /> */}
        {/* <ContactUsForm /> */}
      </AnimationRevealPage>
    </div>
  );
};
