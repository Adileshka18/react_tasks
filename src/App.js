import React from 'react';

function App() {
  const arr = ['a', 'b', 'c', 'd', 'e'];  

  return (
    <div>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>  
        ))}
      </ul>
    </div>
  );
}

export default App;