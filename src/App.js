import React, { useState } from 'react';

function App() {
  // Задание 1
  const [isAdult, setIsAdult] = useState(false);

  // Задание 2
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      {/* Задание 1 */}
      <label>
        <input
          type="checkbox"
          checked={isAdult}
          onChange={(e) => setIsAdult(e.target.checked)}
        />
        Мне уже есть 18 лет
      </label>
      {isAdult ? (
        <div>
          <h2>Ура, вам уже есть 18</h2>
          <p>здесь расположен контент только для взрослых</p>
        </div>
      ) : (
        <div>
          <p>увы, вам еще нет 18 лет:(</p>
        </div>
      )}

      {/* Задание 2 */}
      <label>
        <input
          type="checkbox"
          checked={isVisible}
          onChange={(e) => setIsVisible(e.target.checked)}
        />
        Показать абзац
      </label>
      {isVisible && <p>Этот абзац будет видимым, если чекбокс отмечен</p>}
    </div>
  );
}

export default App;