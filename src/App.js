import React, { useState } from 'react';

function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={text1} 
        onChange={event => setText1(event.target.value)} 
      />
      <p>Text 1: {text1}</p>

      <input 
        type="text" 
        value={text2} 
        onChange={event => setText2(event.target.value)} 
      />
      <p>Text 2: {text2}</p>
    </div>
  );
}

export default App;