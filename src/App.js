import React from 'react';

function User() {
  return <p>Этот пользователь активен.</p>;
}

function App() {
  return (
    <div>
      <h1>Список пользователей</h1>
      <User />
      <User />
      <User />
    </div>
  );
}

export default App;