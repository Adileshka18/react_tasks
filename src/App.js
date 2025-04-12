import React from 'react';
import { nanoid } from 'nanoid'; 
import uuid from 'react-uuid';   

// №1
function idWithNanoid() {
  return nanoid(); 
}

// №2
function idWithReactUuid() {
  return uuid(); 
}

function App() {
  const randomIdNanoid = idWithNanoid();  
  const randomIdReactUuid = idWithReactUuid();  

  return (
    <div>
      <p>Случайный ID (nanoid): {randomIdNanoid}</p>
      <p>Случайный UUID (react-uuid): {randomIdReactUuid}</p>
    </div>
  );
}

export default App;