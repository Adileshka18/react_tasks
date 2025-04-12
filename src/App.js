import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([1, 2, 3]); // Для первого задания
  const [inputValue, setInputValue] = useState('');
  const [inputValues, setInputValues] = useState({ input1: '', input2: '', input3: '' });

  const addItem = () => {
    setItems([...items, inputValue]); 
    setInputValue(''); 
  };

  const addItemFromInputs = () => {
    const { input1, input2, input3 } = inputValues;
    if (input1 && input2 && input3) {
      setItems([...items, `${input1} - ${input2} - ${input3}`]);
      setInputValues({ input1: '', input2: '', input3: '' }); 
    }
  };

  return (
    <div>
      <h2>Task 1 - Добавить новый элемент в конец списка</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Добавить элемент</button>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите новый элемент"
      />

      <h2>Task 2 - Добавить новый элемент с использованием трех инпутов</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItemFromInputs}>Добавить с инпутов</button>
      <div>
        <input
          type="text"
          value={inputValues.input1}
          onChange={(e) => setInputValues({ ...inputValues, input1: e.target.value })}
          placeholder="Введите первый текст"
        />
        <input
          type="text"
          value={inputValues.input2}
          onChange={(e) => setInputValues({ ...inputValues, input2: e.target.value })}
          placeholder="Введите второй текст"
        />
        <input
          type="text"
          value={inputValues.input3}
          onChange={(e) => setInputValues({ ...inputValues, input3: e.target.value })}
          placeholder="Введите третий текст"
        />
      </div>
    </div>
  );
}

export default App;