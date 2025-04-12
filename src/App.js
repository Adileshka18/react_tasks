import React, { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([0, 0, 0, 0, 0]);

  const handleInputChange = (index, event) => {
    const newNumbers = [...numbers];
    newNumbers[index] = parseFloat(event.target.value) || 0;
    setNumbers(newNumbers);
  };

  const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;

  return (
    <div>
      <input
        type="number"
        value={numbers[0]}
        onChange={(e) => handleInputChange(0, e)}
      />
      <input
        type="number"
        value={numbers[1]}
        onChange={(e) => handleInputChange(1, e)}
      />
      <input
        type="number"
        value={numbers[2]}
        onChange={(e) => handleInputChange(2, e)}
      />
      <input
        type="number"
        value={numbers[3]}
        onChange={(e) => handleInputChange(3, e)}
      />
      <input
        type="number"
        value={numbers[4]}
        onChange={(e) => handleInputChange(4, e)}
      />
      <p>Среднее арифметическое: {average}</p>
    </div>
  );
}

export default App;