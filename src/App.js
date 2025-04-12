import React, { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [inputText, setInputText] = useState('');

  const handleSquare = (index) => {
    const newNumbers = [...numbers];
    newNumbers[index] = newNumbers[index] ** 2;
    setNumbers(newNumbers);
  };

  const handleDelete = (index) => {
    const newNumbers = numbers.filter((_, i) => i !== index);
    setNumbers(newNumbers);
  };

  const handleTextClick = (text) => {
    setInputText(text);
  };

  const handleInputBlur = (index) => {
    if (inputText.trim() !== '') {
      const newNumbers = [...numbers];
      newNumbers[index] = inputText;
      setNumbers(newNumbers);
    }
  };

  const handleReverseOrder = () => {
    setNumbers([...numbers].reverse());
  };

  return (
    <div>
      <h2>Task 1 - Список чисел, возведение в квадрат</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index} onClick={() => handleSquare(index)}>
            {number}
            <button onClick={(e) => {
              e.stopPropagation();  // Чтобы кнопка не вызывала handleSquare
              handleDelete(index);
            }}>Удалить</button>
          </li>
        ))}
      </ul>

      <h2>Task 2 - Кнопка для удаления li</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index} onClick={() => handleSquare(index)}>
            {number}
            <button onClick={(e) => {
              e.stopPropagation();  // Чтобы кнопка не вызывала handleSquare
              handleDelete(index);
            }}>Удалить</button>
          </li>
        ))}
      </ul>

      <h2>Task 3 - Клик по li, текст попадает в инпут</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index} onClick={() => handleTextClick(number)}>
            {number}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onBlur={() => handleInputBlur(numbers.indexOf(inputText))}
      />

      <h2>Task 4 - Модификация текста после потери фокуса</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onBlur={() => handleInputBlur(numbers.indexOf(inputText))}
      />

      <h2>Task 5 - Переворот порядка li</h2>
      <button onClick={handleReverseOrder}>Перевернуть порядок</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index} onClick={() => handleSquare(index)}>
            {number}
            <button onClick={(e) => {
              e.stopPropagation();
              handleDelete(index);
            }}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;