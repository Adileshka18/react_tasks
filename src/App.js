import React from 'react';

function ButtonComponent() {
  // Создаем объекты стилей
  const containerStyle = {
    display: 'flex',
    gap: '10px',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '4px'
  };

  // Стили для hover эффекта
  const buttonHoverStyle = {
    backgroundColor: '#0056b3'
  };

  return (
    <div style={containerStyle}>
      <button 
        style={buttonStyle} 
        onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} 
        onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
        Кнопка 1
      </button>
      <button 
        style={buttonStyle} 
        onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} 
        onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
        Кнопка 2
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <ButtonComponent />
    </div>
  );
}

export default App;