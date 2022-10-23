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
      {
        path: '/',
        element: <Home></Home>,
        loader: () => {
          return fetch('http://localhost:5000/news');
        },
      },
      {
        path: '/category/:id',
        element: <Catergory></Catergory>,
        //multi column hole return korte hobe
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
      },
      {
        path: '/news/:id',
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);
