import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/shop',
        element: <h1>Shop</h1>,
      },



    ]
  }
]);



const App = () => {
  return <RouterProvider router={router} />;
}

export default App