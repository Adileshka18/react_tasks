import React from 'react';

function App() {
  // Массив элементов li
  const arr = [
    <li key={1}>1</li>,
    <li key={2}>2</li>,
    <li key={3}>3</li>,
    <li key={4}>4</li>,
    <li key={5}>5</li>,
  ];

  return (
    <div>
      <ul>
        {arr} {/* Вставляем массив элементов li в список ul */}
      </ul>
    </div>
  );
}

export default App;