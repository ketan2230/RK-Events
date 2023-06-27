import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Data from "data/events.json";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Container = styled.div`
  ${tw`relative bg-center bg-cover h-screen min-h-144 sm:mt-0`}
`;

const OpacityOverlay = tw.div`absolute inset-0 bg-black opacity-50`;

const HeroContainer = tw.div`relative mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center w-full`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0 w-2/3`}
`;

export default () => {

  const bgImages = Data.mainPageImagesSlogan;
  const optionsOwl = {
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    responsiveClass: true,
  };

  return (
    <Container>
      <HeroContainer>
        <OwlCarousel className="owl-theme" {...optionsOwl}>
          {bgImages.map((item) => {
            return (
              <div className="item">
                <OpacityOverlay />
                <Content
                  style={{
                    backgroundImage: `url(${item.imageSrc})`,
                    transition: "opacity 4s ease-in-out",
                    opacity: 1,
                    backgroundSize: "cover",
                  }}
                >
                  <Heading
                    style={{
                      height: "100vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 99,
                    }}
                  >
                    {item.slogan}
                  </Heading>
                </Content>
              </div>
            );
          })}
        </OwlCarousel>
      </HeroContainer>
    </Container>
  );
};
