import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('John');
  const [surname, setSurname] = useState('Doe');

  const handleNameChange = () => setName('Alex');
  const handleSurnameChange = () => setSurname('Smith');

  return (
    <div>
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>

      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleSurnameChange}>Change Surname</button>
    </div>
  );
}

export default App;