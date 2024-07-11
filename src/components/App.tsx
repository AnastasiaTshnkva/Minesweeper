import {useState} from 'react';

export const App = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter(prev => prev + 1);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>inc</button>
    </div>
  );
};