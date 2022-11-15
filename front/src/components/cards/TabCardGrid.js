import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const SubHeader = tw.p`text-base text-gray-500`;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-800! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0 cursor-pointer`;
const CardImageContainer = styled.div`
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t overflow-hidden bg-no-repeat`}
`;
const CardImage = styled.img`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw` hover:scale-110 transition duration-700 ease-in-out`}
`;
const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-800`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-800`}
`;

export default ({
  heading = "Checkout the Themes",
  subHeading="Note :- This images are just for the reference purpose",
  tabs = {
    Marriage: [
      {
        imageSrc: "images/category/marriage/chori/image1.jpg",
        title: "Chori Theme 1",
        content: "Patle Color Theme",
        category: "haldi"
      },
      {
        imageSrc: "images/category/marriage/chori/image2.jpg",
        title: "Chori Theme 2",
        content: "Patle Color Theme",
        category: "haldi"
      },
      {
        imageSrc: "images/category/marriage/chori/image3.jpg",
        title: "Chori Theme 3",
        content: "Patle Color Theme",
        category: "haldi"
      },
      {
        imageSrc: "images/category/marriage/chori/image4.jpg",
        title: "Chori Theme 4",
        content: "Patle Color Theme",
        category: "haldi"
      },
      {
        imageSrc: "images/category/marriage/haldi/image1.jpg",
        title: "Haldi Theme 1",
        content: "Patle Color Theme",
        category: "haldi"
      },
      {
        imageSrc: "images/category/marriage/haldi/image2.jpg",
        title: "Haldi Theme 2",
        content: "Patle Color Theme",
        category: "haldi"
      },
      {
        imageSrc: "images/category/marriage/haldi/image3.jpg",
        title: "Haldi Theme 3",
        content: "Patle Color Theme",
        category: "haldi"
      },
      {
        imageSrc: "images/category/marriage/haldi/image4.jpg",
        title: "Haldi Theme 4",
        content: "Patle Color Theme",
        category: "haldi"
      },
    ],
    Birthday: [
      {
        imageSrc: "images/category/birthday/image1.jpg",
        title: "Birthday Theme",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/birthday/image2.jpg",
        title: "Birthday Theme",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/birthday/image3.jpg",
        title: "Birthday Theme",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/birthday/image4.jpg",
        title: "Birthday Theme",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/birthday/image5.jpg",
        title: "Birthday Theme",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/birthday/image6.jpg",
        title: "Birthday Theme",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/birthday/image7.jpg",
        title: "Birthday Theme",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/birthday/image8.jpg",
        title: "Birthday Theme",
        content: "Patle Color Theme",
      },
    ],
    RingCeremony: [
      {
        imageSrc: "images/category/ringceremony/image1.jpg",
        title: "Theme 1",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image2.jpg",
        title: "Theme 2",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image3.jpg",
        title: "Theme 3",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image4.jpg",
        title: "Theme 4",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image5.jpg",
        title: "Theme 5",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image6.jpg",
        title: "Theme 6",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image7.jpg",
        title: "Theme 7",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image8.jpg",
        title: "Theme 8",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image9.jpg",
        title: "Theme 9",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image10.jpg",
        title: "Theme 10",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image11.jpg",
        title: "Theme 11",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image12.jpg",
        title: "Theme 12",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image13.jpg",
        title: "Theme 13",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image14.jpg",
        title: "Theme 14",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image15.jpg",
        title: "Theme 15",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image16.jpg",
        title: "Theme 16",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image17.jpeg",
        title: "Theme 17",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image18.webp",
        title: "Theme 18",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/ringceremony/image19.jpeg",
        title: "Theme 19",
        content: "Patle Color Theme",
      },
    ],
    BabyShower: [
      {
        imageSrc: "images/category/babyshower/image1.jpg",
        title: "Theme 1",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/babyshower/image2.jpg",
        title: "Theme 2",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/babyshower/image3.jpg",
        title: "Theme 3",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/babyshower/image4.jpg",
        title: "Theme 4",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/babyshower/image5.jpg",
        title: "Theme 5",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/babyshower/image6.jpg",
        title: "Theme 6",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/babyshower/image7.jpg",
        title: "Theme 7",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/babyshower/image8.jpg",
        title: "Theme 8",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/babyshower/image9.jpg",
        title: "Theme 9",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/babyshower/image10.jpg",
        title: "Theme 10",
        content: "Patle Color Theme",
      },
      {
        imageSrc: "images/category/babyshower/image11.jpg",
        title: "Theme 11",
        content: "Patle Color Theme",
      },
    ],
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>
        <SubHeader>{subHeading}</SubHeader>
        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer>
                    <CardImage src={card.imageSrc} />
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
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

