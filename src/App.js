import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={inputText} 
        onChange={event => setInputText(event.target.value)} 
      />
      <p>Количество символов: {inputText.length}</p>
    </div>
  );
}

export default App;