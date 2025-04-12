import React from 'react';

function App() {
  
  function getDigitsSum(number) {
    return number
      .toString()       
      .map(Number)       
      .reduce((sum, num) => sum + num, 0);  
  }

  
  const sum = getDigitsSum(123);

  return (
    <div>
      <p>Сумма цифр числа 123: {sum}</p>
    </div>
  );
}

export default App;