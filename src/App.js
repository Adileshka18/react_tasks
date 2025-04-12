import React, { useState } from 'react';

function App() {
  const initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [array, setArray] = useState(initialArray);

  const handleInputChange = (index, event) => {
    const newArray = [...array];
    newArray[index] = Number(event.target.value);
    setArray(newArray);
  };

  const calculateAverage = (arr) => {
    const sum = arr.reduce((acc, currentValue) => acc + currentValue, 0);
    return sum / arr.length;
  };

  return (
    <div>
      <h2>Среднее арифметическое элементов массива:</h2>
      <p>Среднее арифметическое: {calculateAverage(array)}</p>
      
      <h3>Редактирование элементов массива:</h3>
      {array.map((item, index) => (
        <div key={index}>
          <label>Элемент {index + 1}:</label>
          <input 
            type="number" 
            value={item} 
            onChange={(event) => handleInputChange(index, event)} 
          />
        </div>
      ))}
    </div>
  );
}

export default App;