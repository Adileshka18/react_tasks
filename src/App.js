import React from 'react';

function App() {
  const users = [
    { id: 1, name: 'user1', surn: 'surn1', age: 30 },
    { id: 2, name: 'user2', surn: 'surn2', age: 31 },
    { id: 3, name: 'user3', surn: 'surn3', age: 32 },
  ];

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {/* Используем .map для рендеринга строк таблицы */}
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.surn}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;