import React from 'react';

function App() {
  const items = [];  

 
  for (let i = 1; i <= 5; i++) {
    items.push(<li key={i}>{i}</li>);
  }

  return (
    <div>
      <ul>
        {items} 
      </ul>
    </div>
  );
}

export default App;