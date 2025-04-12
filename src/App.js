import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([ 'Item 1', 'Item 2', 'Item 3' ]);
  const [inputText, setInputText] = useState('');

  const handleAddItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddFromInput = () => {
    if (inputText.trim()) {
      setItems([...items, inputText]);
      setInputText(''); // Очистить инпут после добавления
    }
  };

  return (
    <div>
      <h2>Task 1 - Добавление нового элемента в список</h2>
      <button onClick={handleAddItem}>Добавить элемент</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Task 2 - Добавление элемента по тексту инпута</h2>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Введите текст для нового элемента"
      />
      <button onClick={handleAddFromInput}>Добавить из инпута</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;