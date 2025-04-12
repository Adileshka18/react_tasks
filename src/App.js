import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const [inputValues, setInputValues] = useState({ text: '' });

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id)); // Удаляем элемент по id
  };

  const populateInputs = (item) => {
    setInputValues({ text: item.text }); // Заполняем инпуты данными из выбранной li
  };

  const updateItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, text: inputValues.text } : item)); // Обновляем item с новым значением
  };

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, text: e.target.value });
  };

  return (
    <div>
      <h2>Task 1 - Удалить элемент из списка</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeItem(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>

      <h2>Task 2 - Данные li попадают в инпуты</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => populateInputs(item)}>Заполнить инпуты</button>
          </li>
        ))}
      </ul>

      <h3>Инпут для редактирования данных:</h3>
      <input
        type="text"
        value={inputValues.text}
        onChange={handleInputChange}
      />
      
      <h2>Task 3 - Обновить li с инпутов</h2>
      <button onClick={() => updateItem(items.find(item => item.text === inputValues.text)?.id)}>Обновить</button>
    </div>
  );
}

export default App;