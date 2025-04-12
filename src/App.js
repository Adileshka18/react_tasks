import React from 'react';

function App() {
  
  function show1() {
    alert(1);
  }
  
  function show2() {
    alert(2);
  }

  return (
    <div>
      {/* Кнопка с привязанным обработчиком onClick для вызова функции show1 */}
      <button onClick={show1}>act1</button>
      
      {/* Кнопка с привязанным обработчиком onClick для вызова функции show2 */}
      <button onClick={show2}>act2</button>
    </div>
  );
}

export default App;