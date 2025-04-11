import './App.css';
import React from 'react';

function App() {
  const arr = [1, 2, 3, 4, 5];

  return (
    <ul>
      {arr.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}





export default App;


