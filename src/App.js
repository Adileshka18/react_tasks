import React, { useState } from 'react';

function App() {
  // Задание 1: 3 радиокнопочки и абзац
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Задание 2: Выбор любимого языка программирования с похвалой
  const [favoriteLanguage, setFavoriteLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setFavoriteLanguage(event.target.value);
  };

  return (
    <div>
      {/* Задание 1 */}
      <h2>Выберите одну из опций:</h2>
      <input 
        type="radio" 
        name="option" 
        value="Option 1" 
        onChange={handleOptionChange} 
        checked={selectedOption === 'Option 1'} 
      />
      <label>Option 1</label>

      <input 
        type="radio" 
        name="option" 
        value="Option 2" 
        onChange={handleOptionChange} 
        checked={selectedOption === 'Option 2'} 
      />
      <label>Option 2</label>

      <input 
        type="radio" 
        name="option" 
        value="Option 3" 
        onChange={handleOptionChange} 
        checked={selectedOption === 'Option 3'} 
      />
      <label>Option 3</label>

      <p>Вы выбрали: {selectedOption}</p>

      {/* Задание 2 */}
      <h2>Выберите ваш любимый язык программирования:</h2>
      <input 
        type="radio" 
        name="language" 
        value="JavaScript" 
        onChange={handleLanguageChange} 
        checked={favoriteLanguage === 'JavaScript'} 
      />
      <label>JavaScript</label>

      <input 
        type="radio" 
        name="language" 
        value="Python" 
        onChange={handleLanguageChange} 
        checked={favoriteLanguage === 'Python'} 
      />
      <label>Python</label>

      <input 
        type="radio" 
        name="language" 
        value="Ruby" 
        onChange={handleLanguageChange} 
        checked={favoriteLanguage === 'Ruby'} 
      />
      <label>Ruby</label>

      <p>Ваш любимый язык программирования: {favoriteLanguage}</p>

      {favoriteLanguage === 'JavaScript' && <p>Вы выбрали отличный язык! JavaScript - это мощно!</p>}
    </div>
  );
}

export default App;