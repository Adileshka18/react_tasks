import React from 'react';

function App() {
  const age = 19;

  return (
    <div>
      {age > 18 ? (
        <p>Вы совершеннолетний.</p>
      ) : (
        <p>Вы несовершеннолетний.</p>
      )}
    </div>
  );
}

export default App;