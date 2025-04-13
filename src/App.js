import React, { useState } from 'react';

// Компонент TempInp (поле для ввода температуры)
function TempInp({ temperature, onTemperatureChange }) {
  return (
    <div>
      <label>Введите температуру (°C):</label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
}

// Компонент Verdict (проверяет, кипит ли вода)
function Verdict({ temperature }) {
  return (
    <p>
      {temperature >= 100 ? 'Вода кипит 💨' : 'Вода не кипит ❄️'}
    </p>
  );
}

// Главный компонент App
function App() {
  const [temperature, setTemperature] = useState('');

  return (
    <div>
      <h2>Температурный контроль</h2>
      <TempInp temperature={temperature} onTemperatureChange={setTemperature} />
      <Verdict temperature={parseFloat(temperature)} />
    </div>
  );
}

export default App;