import {useState} from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter(prev => prev + 1);

  return (
    <div>
      <Link to={'/about'}>About</Link>
      <br/>
      <Link to={'/game'}>Game</Link>
      <h1 className={classes.value}>{counter}</h1>
      <button className={classes.button} onClick={increment}>increment</button>
      <Outlet/>
    </div>
  );
};