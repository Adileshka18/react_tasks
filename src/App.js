import './App.css';
import React from 'react';

function App() {
  // Массив с элементами для списка
  const items = Array.from({ length: 10 }, (_, index) => (
    <li key={index}>Item {index + 1}</li>
  ));

  return (
    <div>
      <h1>23_1</h1>
      {/* Список */}
      <ul>{items}</ul>

      <h1>23_2</h1>
      {/* Таблица */}
      <table border="1">
        <thead>
          <tr>
            <th>1,1</th>
            <th>1,2</th>
            <th>1,3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2,1</td>
            <td>2,2</td>
            <td>2,3</td>
          </tr>
          <tr>
            <td>3,1</td>
            <td>3,2</td>
            <td>3,3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;