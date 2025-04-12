import React from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';

function generateId(usingNanoid = true) {
  return usingNanoid ? nanoid() : uuid();
}

function App() {
  const users = [
    { id: generateId(true), name: 'User1', surname: 'Surname1', age: 30 },
    { id: generateId(true), name: 'User2', surname: 'Surname2', age: 31 },
    { id: generateId(true), name: 'User3', surname: 'Surname3', age: 32 },
  ];

  return (
    <div>
      <h1>Users List (using nanoid)</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} {user.surname} - Age: {user.age} (ID: {user.id})
          </li>
        ))}
      </ul>

      <h1>Users List (using react-uuid)</h1>
      <ul>
        {users.map(user => (
          <li key={generateId(false)}>
            {user.name} {user.surname} - Age: {user.age} (ID: {generateId(false)})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;