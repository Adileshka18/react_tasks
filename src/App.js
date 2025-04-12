import React, { useState } from 'react';

function App() {
  const [date, setDate] = useState({
    year: 2025,
    month: 12,
    day: 31,
  });

  const handleDateChange = (field, event) => {
    const newDate = { ...date, [field]: Number(event.target.value) };
    setDate(newDate);
  };

  const getDayOfWeek = () => {
    const { year, month, day } = date;
    const dateObject = new Date(year, month - 1, day); 
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dateObject.getDay()];
  };

  return (
    <div>
      <h2>Дата:</h2>
      <p>
        {date.day}.{date.month}.{date.year} - {getDayOfWeek()}
      </p>

      <h3>Редактировать дату:</h3>
      <div>
        <label>Год:</label>
        <input 
          type="number" 
          value={date.year} 
          onChange={(event) => handleDateChange('year', event)} 
        />
      </div>
      <div>
        <label>Месяц:</label>
        <input 
          type="number" 
          value={date.month} 
          onChange={(event) => handleDateChange('month', event)} 
        />
      </div>
      <div>
        <label>День:</label>
        <input 
          type="number" 
          value={date.day} 
          onChange={(event) => handleDateChange('day', event)} 
        />
      </div>
    </div>
  );
}

export default App;