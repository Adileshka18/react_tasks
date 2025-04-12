import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('John');
  const [surname, setSurname] = useState('Doe');
  const [age, setAge] = useState(30);

  const handleNameChange = () => setName('Alex');
  const handleSurnameChange = () => setSurname('Smith');
  const handleAgeChange = () => setAge(35);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>
      <p>Age: {age}</p>
      
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleSurnameChange}>Change Surname</button>
      <button onClick={handleAgeChange}>Change Age</button>
    </div>
  );
}

export default App;