import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 300px;
  border: 2px solid brown;
  padding: 10px;
  text-align: center;
`;


const StyledP1 = styled.p`
  color: orangered;
  font-weight: bold;
`;


const StyledP2 = styled.p`
  font-style: italic;
  color: brown;
`;


const StyledP3 = styled.p`
  background-color: orange;
  font-weight: bold;
  color: white;
`;

function App() {
  return (
    <StyledDiv>
      <StyledP1>text</StyledP1>
      <StyledP2>text</StyledP2>
      <StyledP3>text</StyledP3>
    </StyledDiv>
  );
}

export default App;