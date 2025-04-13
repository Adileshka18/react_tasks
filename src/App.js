import React from 'react';

function Employee({ surname, name, patronymic, salary }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2>{surname} {name} {patronymic}</h2>
      <p>Зарплата: {salary} руб.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Список сотрудников</h1>
      <Employee surname="Иванов" name="Иван" patronymic="Иванович" salary={50000} />
      <Employee surname="Петров" name="Петр" patronymic="Петрович" salary={60000} />
      <Employee surname="Сидоров" name="Алексей" patronymic="Алексеевич" salary={55000} />
    </div>
  );
}

export default App;