import React, { useState } from 'react';

function App() {
  // Задание 1
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    if (isChecked) {
      setMessage('Привет, пользователь!');
    } else {
      setMessage('До свидания!');
    }
  };

  // Задание 2
  const [htmlChecked, setHtmlChecked] = useState(false);
  const [cssChecked, setCssChecked] = useState(false);
  const [jsChecked, setJsChecked] = useState(false);

  return (
    <div>
      {/* Задание 1 */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <button onClick={handleButtonClick}>Нажми меня</button>
      <p>{message}</p>

      {/* Задание 2 */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={htmlChecked}
            onChange={(e) => setHtmlChecked(e.target.checked)}
          />
          HTML
        </label>
        <p>{htmlChecked ? 'Вы знаете HTML' : 'Вы не выбрали HTML'}</p>

        <label>
          <input
            type="checkbox"
            checked={cssChecked}
            onChange={(e) => setCssChecked(e.target.checked)}
          />
          CSS
        </label>
        <p>{cssChecked ? 'Вы знаете CSS' : 'Вы не выбрали CSS'}</p>

        <label>
          <input
            type="checkbox"
            checked={jsChecked}
            onChange={(e) => setJsChecked(e.target.checked)}
          />
          JS
        </label>
        <p>{jsChecked ? 'Вы знаете JS' : 'Вы не выбрали JS'}</p>
      </div>
    </div>
  );
}

export default App;