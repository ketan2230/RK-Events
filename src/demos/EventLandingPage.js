// import AnimationRevealPage from "helpers/AnimationRevealPage";
// import TabGrid from "components/cards/TabCardGrid.js";
// import Testimonial from "components/testimonials/TwoColumnWithImage";
// import ContactUsForm from "pages/ContactUs";
import MainFeature from "components/features/TwoColWithButton.js";
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
  const Subheading = tw.span`tracking-wider text-sm font-medium text-yellow-800`;
  const HighlightedText = tw.span`bg-yellow-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8 text-base`;
  const imageCss = tw`rounded-4xl`;

  return (
    // <AnimationRevealPage>
    <div>
      <Hero />
      <MainFeature
        id="about"
        subheading={<Subheading>Established Since 2015</Subheading>}
        heading={
          <>
            We've been serving for
            <wbr /> <HighlightedText>over 6+ years.</HighlightedText>
          </>
        }
        description={
          <Description>
            RK Events, your one stop solution for making any event
            memorable or a success.
            <br />
            <br />
            We provide Birthday Party, Wedding Arrangements, Bride & Groom
            Entries, Catering, Baby Shower, Ring Ceremony, Lights & Sound,
            Photography & Videography and etc.
            <br />
            <br />
            With a Team having an expertise of over 6+ years, your event being
            a success is guaranteed.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <Image image="https://wp-media-partyslate.imgix.net/2021/05/photo-850b35ef-a429-4e24-b6b3-a724685e97ca.jpeg?auto=compress%2Cformat&ixlib=php-3.3.1" />
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

      <Image image="https://wp-media-partyslate.imgix.net/2021/04/photo-069009d6-7a72-44d9-9bd8-d69ec5f67e44.jpeg?auto=compress%2Cformat&ixlib=php-3.3.1" />

      <RecentStory />

      {/* <Testimonial /> */}
      {/* <ContactUsForm /> */}
    </div>
    // </AnimationRevealPage>
  );
};
