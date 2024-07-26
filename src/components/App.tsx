import {useState} from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import bombPng from '@/assets/images/bomb.png';
import flagPng from '@/assets/images/flag.png';
import CrossIcon from '@/assets/icons/cloud-rain-alt.svg';

// function TODO(a:number) {
//   console.log('TODO');
// }

export const App = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter(prev => prev + 1);


  // if (__PLATFORM__ === 'mobile') {
  //   return (<div>ISMOBILEPLATFORM</div>)
  // };

  // if (__PLATFORM__ === 'desctop') {
  //   return (<div>ISDESCTOPPLATFORM</div>)
  // };

  return (
    <div>
      <h1 data-testid={'App.DataTestId'}>Platform = {__PLATFORM__}</h1>
      <div>
        <img className={classes.icon} src={bombPng} alt='bomb' />
        <img className={classes.icon} src={flagPng} alt='flag' />
      </div>
      <div>
        <CrossIcon className={classes.interface_icon} stroke='pink' />
      </div>
      <Link to={'/about'}>About</Link>
      <br/>
      <Link to={'/game'}>Game</Link>
      <h1 className={classes.value}>{counter}</h1>
      <button className={classes.button} onClick={increment}>increment</button>
      <Outlet/>
    </div>
  );
};