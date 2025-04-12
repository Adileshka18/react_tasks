import React from 'react';


function App() {
  const isAdult = true;

  return (
    <div>
      {isAdult ? (
        <p>Вы совершеннолетний.</p>
      ) : (
        <p>Вы несовершеннолетний.</p>
      )}
    </div>
  );
}

export default App;


