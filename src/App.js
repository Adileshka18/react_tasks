import React, { useState } from 'react';

function App() {
  const [ageGroup, setAgeGroup] = useState('');

  const handleChange = (event) => {
    setAgeGroup(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} value={ageGroup}>
        <option value="">Выберите вашу возрастную группу</option>
        <option value="0-12">0-12 лет</option>
        <option value="13-17">13-17 лет</option>
        <option value="18-25">18-25 лет</option>
        <option value="25+">Старше 25 лет</option>
      </select>

      {ageGroup && <p>Вы выбрали возрастную группу: {ageGroup}</p>}
    </div>
  );
}

export default App;