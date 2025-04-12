import React, { useState } from 'react';

function App() {
  const [selectedCity, setSelectedCity] = useState('');

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} value={selectedCity}>
        <option value="">Выберите город</option>
        <option value="Москва">Москва</option>
        <option value="Санкт-Петербург">Санкт-Петербург</option>
        <option value="Новосибирск">Новосибирск</option>
        <option value="Екатеринбург">Екатеринбург</option>
        <option value="Казань">Казань</option>
      </select>

      <p>Вы выбрали город: {selectedCity}</p>
    </div>
  );
}

export default App;