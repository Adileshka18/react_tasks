// №1
import React from 'react';
import styled from 'styled-components';

const DIVA = styled.div`
  width: 150px;
  height: 150px;
  background-color: yellow;
  border: 2px solid;
`;

// №2
const DIVB = styled.div`
  width: 150px;
  height: 150px;
  background-color: green;
  border: 3px solid;
`;

// №3
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Block1() {
  return (
    <Container>
      <DIVA />
      <DIVB />
      <DIVA />
    </Container>
  );
}

export default Block1;