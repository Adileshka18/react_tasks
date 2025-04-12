import React, { useState } from 'react';

function App() {
  // Задание 1
  const [text, setText] = useState('');
  
  const translitText = text.replace(/а/g, 'a').replace(/б/g, 'b').replace(/в/g, 'v') // и так далее для каждой буквы
  
  // Задание 2
  const [numbers, setNumbers] = useState('');
  const sum = numbers.split('\n').reduce((total, line) => total + (parseFloat(line) || 0), 0);
  
  return (
    <div>
      {/* Задание 1 */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст"
      />
      <p>Транслит: {translitText}</p>

      {/* Задание 2 */}
      <textarea
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
        placeholder="Введите числа"
      />
      <p>Сумма чисел: {sum}</p>
    </div>
  );
}

export default App;