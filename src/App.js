import React from 'react';
import styles from './style';  

function ButtonComponent() {
  return (
    <div style={styles.container}>
      <button 
        style={styles.button}
        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor} 
        onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}>
        Кнопка 1
      </button>
      <button 
        style={styles.button}
        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor} 
        onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}>
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