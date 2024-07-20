import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import Title from "components/common/Title.js";
import { SectionHeading } from "components/misc/Headings.js";
// import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
// import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import { useNavigate } from "react-router-dom";
import Data from "data/events.json";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const SubHeader = tw.p`text-base text-gray-500 text-xs`;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-800! text-gray-100!`}
  }
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0 cursor-pointer`;
const CardImageContainer = styled.div`
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t overflow-hidden bg-no-repeat`}
`;
const CardImage = styled.img`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw` hover:scale-110 transition duration-700 ease-in-out`}
`;
const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-800`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;

// const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
//   ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
// `;
// const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
//   ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-800`}
// `;

export default () => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(Data.tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const navigate = useNavigate();

  return (
    <>
      <Title
        header="Our Themes"
        image="https://images.unsplash.com/photo-1470345961863-06d4b12d93b3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Container>
        <ContentWithPaddingXl>
          <HeaderRow>
            <Header>{Data.heading}</Header>
            <TabsControl>
              {tabsKeys.map((tabName, index) => (
                <TabControl
                  key={index}
                  active={activeTab === tabName}
                  onClick={() => setActiveTab(tabName)}
                >
                  {tabName}
                </TabControl>
              ))}
            </TabsControl>
          </HeaderRow>
          <SubHeader>{Data.subHeading}</SubHeader>
          {tabsKeys.map((tabKey, index) => (
            <TabContent
              key={index}
              variants={{
                current: {
                  opacity: 1,
                  scale: 1,
                  display: "flex",
                },
                hidden: {
                  opacity: 0,
                  scale: 0.8,
                  display: "none",
                },
              }}
              transition={{ duration: 0.4 }}
              initial={activeTab === tabKey ? "current" : "hidden"}
              animate={activeTab === tabKey ? "current" : "hidden"}
            >
              {Data.tabs[tabKey].map((card, index) => (
                <CardContainer key={index}>
                  <Card
                    onClick={() => navigate(`event/${card.slug}`)}
                    className="group"
                    href={card.url}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <CardImageContainer>
                      <CardImage src={card.imageSrc} alt={card.title} />
                      {/* <CardRatingContainer>
                      <CardRating>
                      <StarIcon />
                      {card.rating}
                      </CardRating>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer> */}
                      {/* <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                    <CardButton>Buy Now</CardButton>
                    </CardHoverOverlay> */}
                    </CardImageContainer>
                    <CardText>
                      <CardTitle>{card.title}</CardTitle>
                      <CardContent>{card.content}</CardContent>
                    </CardText>
                  </Card>
                </CardContainer>
              ))}
            </TabContent>
          ))}
        </ContentWithPaddingXl>
        {/* <DecoratorBlob1 /> */}
        {/* <DecoratorBlob2 /> */}
      </Container>
    </>
  );
};
