import React from 'react';

function App() {
 
  const users = [
    { name: 'user1', surn: 'surn1', age: 30 },
    { name: 'user2', surn: 'surn2', age: 31 },
    { name: 'user3', surn: 'surn3', age: 32 },
  ];

  return (
    <div>
      <ul>
        
        {users.map((user, index) => (
          <li key={index}>
            Name: {user.name}, Surname: {user.surn}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;