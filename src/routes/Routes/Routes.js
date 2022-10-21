import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../Pages/Home/Home/Home';

//create browser router and export it
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [{ path: '/', element: <Home></Home> }],
  },
]);
