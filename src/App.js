import React from 'react';

function App() {
  function getDigitsSum(number) {
    return number
      .toString()         
      .split('')          
      .map(Number)        
      .reduce((sum, num) => sum + num, 0);  
  }

  
  const sum = getDigitsSum(12345);

  return (
    <div>
      <p>Сумма цифр числа 12345: {sum}</p>
    </div>
  );
}

export default App;