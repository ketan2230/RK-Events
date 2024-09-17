import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "components/misc/Layouts.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "../components/misc/Headings.js";
import { ReactComponent as QuotesLeftIcon } from "../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../images/quotes-r.svg";
import { ReactComponent as ArrowLeftIcon } from "../images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../images/arrow-right-2-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-4.svg";
import Title from "components/common/Title.js";
import Data from "data/events.json";

import "slick-carousel/slick/slick.css";

const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const TestimonialSliderContainer = tw.div`mt-24`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ImageContainer = styled.div`
  ${tw`md:mx-3 lg:mx-6 w-2/3 md:w-4/12 rounded flex items-center max-w-xs md:max-w-none`}
  img {
    ${tw`rounded`}
  }
`;
const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col justify-between`;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = tw.blockquote`text-center md:text-left font-medium text-xl lg:text-2xl xl:text-3xl`;
const CustomerInfo = tw.div`px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0`;
const CustomerName = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-gray-700`;
const HIghlightedHeader = tw.p`bg-gray-700 text-gray-100 px-4 transform -skew-x-12 inline-block`;

const QuotesLeft = tw(
  QuotesLeftIcon
)`w-8 h-8 lg:w-10 lg:h-10 text-gray-700 absolute top-0 left-0`;
const QuotesRight = tw(
  QuotesRightIcon
)`w-8 h-8 lg:w-10 lg:h-10 text-gray-700 absolute bottom-0 right-0`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`text-secondary-500 hover:text-gray-700 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-gray-700 opacity-25 transform -translate-x-full`;

export default () => {
  const testimonials = Data.testimonials;
  return (
    <>
      <Title
        header="Testimonials"
        image="https://images.unsplash.com/photo-1470345961863-06d4b12d93b3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Container>
        <Content>
          <HeadingInfoContainer>
            <HeadingTitle>
              Client Success <HIghlightedHeader> Stories</HIghlightedHeader>
            </HeadingTitle>
            <HeadingDescription></HeadingDescription>
          </HeadingInfoContainer>
          <TestimonialSliderContainer>
            <TestimonialSlider
              nextArrow={<NextArrow />}
              prevArrow={<PreviousArrow />}
            >
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index}>
                  <ImageContainer>
                    <img
                      src={testimonial.imageSrc}
                      alt={testimonial.customerName}
                    />
                  </ImageContainer>
                  <TextContainer>
                    <QuoteContainer>
                      <QuotesLeft />
                      <Quote>{testimonial.quote}</Quote>
                      <QuotesRight />
                    </QuoteContainer>
                    <CustomerInfo>
                      <CustomerName>{testimonial.customerName}</CustomerName>
                    </CustomerInfo>
                  </TextContainer>
                </Testimonial>
              ))}
            </TestimonialSlider>
          </TestimonialSliderContainer>
        </Content>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
