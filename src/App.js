import React, { useState } from 'react';

function App() {
  const [age, setAge] = useState(30);

  const increaseAge = () => setAge(age + 1);
  const decreaseAge = () => setAge(age - 1);

  return (
    <div>
      <p>Age: {age}</p>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={decreaseAge}>Decrease Age</button>
    </div>
  );
}

export default App;