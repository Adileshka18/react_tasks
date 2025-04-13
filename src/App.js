import React from 'react';
import './App.css';

function ButtonComponent() {
  return (
    <div className="container">
      <button className="btn">Кнопка 1</button>
      <button className="btn">Кнопка 2</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <ButtonComponent />
    </div>
  );
}

export default App;