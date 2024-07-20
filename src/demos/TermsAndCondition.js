import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container } from "components/misc/Layouts.js";

// Styles

const Title = styled.h1`
  ${tw`text-4xl font-bold mb-4`}
`;

const Contain = styled(Container)`
  ${tw`py-12`}
`;

const Condition = styled.div`
  ${tw`flex items-center mb-2`}
`;

const Bullet = styled.span`
  ${tw`w-4 h-4 bg-gray-500 rounded-full mr-2`}
`;

const ConditionText = styled.p`
  ${tw`text-lg`}
`;

const TeamsAndConditions = () => {
  const conditions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Fusce auctor, odio at pellentesque cursus, urna elit pharetra velit.",
    "Vestibulum ac nunc sit amet orci tincidunt facilisis.",
    // ... add more conditions here
  ];

  return (
    <Contain>
      <Title
        header="Testimonials"
        image="https://images.unsplash.com/photo-1470345961863-06d4b12d93b3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      {conditions.map((condition, index) => (
        <Condition key={index}>
          <Bullet />
          <ConditionText>{condition}</ConditionText>
        </Condition>
      ))}
    </Contain>
  );
};

export default TeamsAndConditions;
