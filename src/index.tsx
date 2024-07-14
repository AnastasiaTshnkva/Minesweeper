import {createRoot} from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { LazyAbout } from './pages/about/About.lazy';
import { LazyGame } from './pages/game/Game.lazy';
import { Suspense } from 'react';

const root = document.getElementById('root');

if(!root) {
  throw new Error('root not found');
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/about',
        element: <Suspense fallback={'...Loading'}><LazyAbout/></Suspense>,
      },
      {
        path: '/game',
        element: <Suspense fallback={'...Loading'}><LazyGame/></Suspense>,
      },
    ]
  },
]);


const container = createRoot(root);

container.render(<RouterProvider router={router} />
);