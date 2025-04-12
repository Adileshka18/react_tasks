import React, { useState } from 'react';

function App() {
  const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];
  const [selectedCity, setSelectedCity] = useState('');

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} value={selectedCity}>
        <option value="">Выберите город</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      <p>Вы выбрали город: {selectedCity}</p>
    </div>
  );
}

export default App;