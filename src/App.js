import React, { useState } from 'react';

function App() {
  // Задание 1: Конвертация возраста в год рождения
  const [age, setAge] = useState('');
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const birthYear = age ? new Date().getFullYear() - age : '';

  // Задание 2: Конвертация температуры Фаренгейта в Цельсий
  const [fahrenheit, setFahrenheit] = useState('');
  const handleFahrenheitChange = (event) => {
    setFahrenheit(event.target.value);
  };
  const celsius = fahrenheit ? ((fahrenheit - 32) * 5) / 9 : '';

  return (
    <div>
      {/* Задание 1 */}
      <input
        type="number"
        placeholder="Введите ваш возраст"
        value={age}
        onChange={handleAgeChange}
      />
      <p>Ваш год рождения: {birthYear}</p>

      {/* Задание 2 */}
      <input
        type="number"
        placeholder="Введите градусы Фаренгейта"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
      <p>Температура в Цельсиях: {celsius}</p>
    </div>
  );
}

export default App;