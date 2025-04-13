import React from 'react';
import styled from 'styled-components';

// Стилизованный компонент для div
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 20px auto;
  padding: 10px;
  border: 2px solid #ccc;
  text-align: center;
`;

// Стилизованный компонент для кнопки
const StyledButton = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  &:last-child {
    background-color: #f44336; /* Красный для reset кнопки */
  }
`;

function Block({ isFirstDisabled }) {
  return (
    <StyledDiv>
      {/* Первая кнопка с блокировкой, если isFirstDisabled = true */}
      <StyledButton disabled={isFirstDisabled}>Button 1</StyledButton>

      {/* Вторая кнопка, обычная */}
      <StyledButton>Button 2</StyledButton>

      {/* Третья кнопка типа reset */}
      <StyledButton type="reset">Reset</StyledButton>
    </StyledDiv>
  );
}

export default Block;