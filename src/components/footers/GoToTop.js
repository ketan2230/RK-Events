import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { ReactComponent as Arrow } from "../../images/arrow.svg";

const GoToTopButton = styled.button`
  ${tw`fixed text-white py-2 px-2 rounded-full`}
  transition: opacity 0.4s, background-color 0.4s, border 0.4s;
  z-index: 999;
  color: white;
  bottom: 20px;
  right: 20px;
  background: #b5990d;
  border: 3px solid #b5990d;

  /* Hide the button when not visible */
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};

  &:hover {
    background-color: transparent;
    color: #b5990d;
  }
`;

// GoToTop component
const GoToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to scroll to the top of the page
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to toggle the visibility of the button based on scroll position
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showButtonThreshold = 300;
    setShowButton(scrollY > showButtonThreshold);
  };

  // Attach scroll event listener on mount
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <GoToTopButton isVisible={showButton} onClick={goToTop}>
      <Arrow />
    </GoToTopButton>
  );
};

export default GoToTop;
