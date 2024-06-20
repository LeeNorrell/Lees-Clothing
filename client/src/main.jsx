import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Homepage from './pages/Homepage.jsx';
import Shirts from './pages/Shirts.jsx';
import Jackets from './pages/Jackets.jsx';
import Hoodies from './pages/Hoddies.jsx';
import Shorts from './pages/Shorts.jsx';
import Pants from './pages/Pants.jsx';
import Sweatpants from './pages/Sweatpants.jsx';
import Underwear from './pages/Underwear.jsx';
import Shoes from './pages/Shoes.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'shirts',
        element: <Shirts />,
      },
      {
        path: 'jackets',
        element: <Jackets/>,
      },
      {
        path: 'hoodies',
        element: <Hoodies/>
      },
      {
        path: 'shorts',
        element: <Shorts />
      },
      {
        path: 'pants',
        element: <Pants />
      },
      {
        path: 'sweatpants',
        element: <Sweatpants />
      },
      {
        path: 'underwear',
        element: <Underwear />
      },
      {
        path: 'shoes',
        element: <Shoes />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
