import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Catergory from '../../Pages/Category/Catergory';
import News from '../../Pages/News/News';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import Terms from '../../Pages/Others/Terms';
import Profile from '../../Pages/Others/Profile/Profile';

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
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/terms',
        element: <Terms></Terms>,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
