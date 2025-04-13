import React from 'react';

function User({ name, surname, age }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
    </tr>
  );
}

function id() {
  return Math.random().toString(36).substr(2, 9);
}

function App() {
  const users = [
    { id: id(), name: 'user1', surn: 'surn1', age: 30 },
    { id: id(), name: 'user2', surn: 'surn2', age: 31 },
    { id: id(), name: 'user3', surn: 'surn3', age: 32 },
  ];

  return (
    <div>
      <h1>Список пользователей</h1>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Возраст</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <User key={user.id} name={user.name} surname={user.surn} age={user.age} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;