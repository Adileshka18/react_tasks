import React, { useState } from 'react';

function App() {
  // №1
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleSum = () => {
    setResult(Number(number1) + Number(number2));
  };

  const handleProduct = () => {
    setResult(Number(number1) * Number(number2));
  };

  // №2
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [dateDiff, setDateDiff] = useState('');

  const handleDateDiff = () => {
    const diffTime = new Date(date2) - new Date(date1);
    setDateDiff(diffTime / (1000 * 3600 * 24)); // конвертация в дни
  };

  // №3
  const today = new Date().toISOString().split('T')[0];

  const [currentDate1, setCurrentDate1] = useState(today);
  const [currentDate2, setCurrentDate2] = useState(today);

  // №4
  const [inputNumber, setInputNumber] = useState('');
  const [digitSum, setDigitSum] = useState('');

  const handleBlurForSum = () => {
    const sum = inputNumber
      .split('')
      .reduce((acc, digit) => acc + Number(digit), 0);
    setDigitSum(sum);
  };

  // №5
  const [inputDivisorNumber, setInputDivisorNumber] = useState('');
  const [divisorProduct, setDivisorProduct] = useState('');

  const handleBlurForProduct = () => {
    let product = 1;
    for (let i = 1; i <= inputDivisorNumber; i++) {
      if (inputDivisorNumber % i === 0) {
        product *= i;
      }
    }
    setDivisorProduct(product);
  };

  return (
    <div>
      {/* №1 */}
      <h2>Задание 1</h2>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      <button onClick={handleSum}>Сумма</button>
      <button onClick={handleProduct}>Произведение</button>
      <p>Результат: {result}</p>

      {/* №2 */}
      <h2>Задание 2</h2>
      <input
        type="date"
        value={date1}
        onChange={(e) => setDate1(e.target.value)}
      />
      <input
        type="date"
        value={date2}
        onChange={(e) => setDate2(e.target.value)}
      />
      <button onClick={handleDateDiff}>Разница между датами</button>
      <p>Разница в днях: {dateDiff}</p>

      {/* №3 */}
      <h2>Задание 3</h2>
      <input
        type="date"
        value={currentDate1}
        onChange={(e) => setCurrentDate1(e.target.value)}
      />
      <input
        type="date"
        value={currentDate2}
        onChange={(e) => setCurrentDate2(e.target.value)}
      />
      <button onClick={handleDateDiff}>Разница между датами</button>
      <p>Разница в днях: {dateDiff}</p>

      {/* №4 */}
      <h2>Задание 4</h2>
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
        onBlur={handleBlurForSum}
      />
      <p>Сумма цифр: {digitSum}</p>

      {/* №5 */}
      <h2>Задание 5</h2>
      <input
        type="number"
        value={inputDivisorNumber}
        onChange={(e) => setInputDivisorNumber(e.target.value)}
        onBlur={handleBlurForProduct}
      />
      <p>Произведение делителей: {divisorProduct}</p>
    </div>
  );
}

export default App;