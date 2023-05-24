import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const Title = styled.h1`
  ${tw`text-4xl font-bold mb-4`}
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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Fusce auctor, odio at pellentesque cursus, urna elit pharetra velit.',
    'Vestibulum ac nunc sit amet orci tincidunt facilisis.',
    // ... add more conditions here
  ];

  return (
    <Container>
      <Title>Teams & Conditions</Title>
      {conditions.map((condition, index) => (
        <Condition key={index}>
          <Bullet />
          <ConditionText>{condition}</ConditionText>
        </Condition>
      ))}
    </Container>
  );
};

export default TeamsAndConditions;
