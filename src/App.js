import React from 'react';
import { nanoid } from 'nanoid'; 
import uuid from 'react-uuid';   

function App() {
 
  const randomId = nanoid();  
  const randomUuid = uuid();  

  return (
    <div>
      <p>Случайный ID (nanoid): {randomId}</p>
      <p>Случайный UUID (react-uuid): {randomUuid}</p>
    </div>
  );
}

export default App;