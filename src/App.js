import React from 'react';

function App() {
  return (
    <div>
      {/* Кнопка 1 с обработчиком onClick для вывода числа 1 */}
      <button onClick={() => alert(1)}>act1</button>
      
      {/* Кнопка 2 с обработчиком onClick для вывода числа 2 */}
      <button onClick={() => alert(2)}>act2</button>
      
      {/* Кнопка 3 с обработчиком onClick для вывода числа 3 */}
      <button onClick={() => alert(3)}>act3</button>
    </div>
  );
}

export default App;