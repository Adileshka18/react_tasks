import React from 'react';

function App() {
  // №1
  const num1 = 3;
  const num2 = 2;

  // №2
  const name = 'john';
  const surname = 'smit';

  // №3
  const num = 4;

  return (
    <div>
      {/* №1 */}
      <div>
        result: {num1 ** num2}
      </div>

      {/* №2 */}
      <div>
        result: {name + ' ' + surname}
      </div>

      {/* №3 */}
      <div>
        result: {Math.sqrt(num)}
      </div>
    </div>
  );
}

export default App;