import React, { useState } from 'react';

// Функция для генерации уникального id
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Компонент User для отображения одного пользователя
function User({ user }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.age}</td>
    </tr>
  );
}

// Основной компонент Users
function Users() {
  const [users, setUsers] = useState([
    { id: generateId(), name: 'Иван', surname: 'Иванов', age: 30 },
    { id: generateId(), name: 'Петр', surname: 'Петров', age: 31 },
    { id: generateId(), name: 'Сергей', surname: 'Сергеев', age: 32 },
  ]);

  return (
    <div>
      <h2>Список пользователей</h2>
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
            <User key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;