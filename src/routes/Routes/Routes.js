import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../Pages/Home/Home/Home';

import Catergory from '../../Pages/Category/Catergory';
import News from '../../Pages/News/News';

//create browser router and export it
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/', element: <Home></Home> },
      { path: '/category/:id', element: <Catergory></Catergory> },
      { path: '/news/:id', element: <News></News> },
    ],
  },
]);
