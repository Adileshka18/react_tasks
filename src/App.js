import React from 'react';

function App() {
  const isAdmin = true;

  return (
    <div>
      {isAdmin && (
        <div>
          <p>Добро пожаловать, администратор!</p>
          <p>У вас есть доступ к админ-панели.</p>
        </div>
      )}
    </div>
  );
}

export default App;