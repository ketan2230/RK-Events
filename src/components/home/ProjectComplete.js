import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings.js";

const Container = styled.div`
  ${tw`py-16 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const MainContainer = styled.div`
  ${tw``}
`;
const Column = styled.div`
  ${tw`w-full sm:w-1/4 py-6`}
`;
const HighlightedText2 = styled.div`
  ${tw`text-center font-black text-4xl text-black mt-2`}
`;
const SubText = styled.div`
  ${tw`text-center text-gold text-xl font-bold leading-none mt-2`}
`;
const StyledSVG = styled.svg`
  ${tw`mx-auto text-black`}
`;

const PorjectComplete = () => {
  const HighlightedText = tw.span`bg-darkgold text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Heading = tw(
    SectionHeading
  )`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

  return (
    <MainContainer>
      <div className="text-card" style={{ width: "100%" }}>
        <Heading
          style={{ width: "100%", textAlign: "center", marginTop: "100px" }}
        >
          Our <HighlightedText>Achievements</HighlightedText>
        </Heading>
      </div>
      <Container>
        <Column>
          <StyledSVG
            xmlns="http://www.w3.org/2000/svg"
            height="70"
            viewBox="0 -960 960 960"
            width="70"
            fill="currentColor"
          >
            <path d="m80-80 200-560 360 360L80-80Zm132-132 282-100-182-182-100 282Zm370-246-42-42 224-224q32-32 77-32t77 32l24 24-42 42-24-24q-14-14-35-14t-35 14L582-458ZM422-618l-42-42 24-24q14-14 14-34t-14-34l-26-26 42-42 26 26q32 32 32 76t-32 76l-24 24Zm80 80-42-42 144-144q14-14 14-35t-14-35l-64-64 42-42 64 64q32 32 32 77t-32 77L502-538Zm160 160-42-42 64-64q32-32 77-32t77 32l64 64-42 42-64-64q-14-14-35-14t-35 14l-64 64ZM212-212Z" />
          </StyledSVG>
          <HighlightedText2>2478+</HighlightedText2>
          <SubText>Events</SubText>
        </Column>
        <Column>
          <StyledSVG
            xmlns="http://www.w3.org/2000/svg"
            height="70"
            viewBox="0 -960 960 960"
            width="70"
            fill="currentColor"
          >
            <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
          </StyledSVG>
          <HighlightedText2>852+</HighlightedText2>
          <SubText>Customer</SubText>
        </Column>
        <Column>
          <StyledSVG
            xmlns="http://www.w3.org/2000/svg"
            height="70"
            viewBox="0 -960 960 960"
            width="70"
            fill="currentColor"
          >
            <path d="M80-120v-650l200-150 200 150v90h400v560H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 0h80v-80h-80v80Zm0 480h480v-400H320v400Zm240-240v-80h160v80H560Zm0 160v-80h160v80H560ZM400-440v-80h80v80h-80Zm0 160v-80h80v80h-80Z" />
          </StyledSVG>
          <HighlightedText2>2</HighlightedText2>
          <SubText>Branches</SubText>
        </Column>
        <Column>
          <StyledSVG
            xmlns="http://www.w3.org/2000/svg"
            height="70"
            viewBox="0 -960 960 960"
            width="70"
            fill="currentColor"
          >
            <path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z" />
          </StyledSVG>
          <HighlightedText2>6746+</HighlightedText2>
          <SubText>Enquiries</SubText>
        </Column>
      </Container>
    </MainContainer>
  );
};

export default PorjectComplete;
