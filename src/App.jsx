import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './pages/Layout';
import Shop from './pages/Shop';
import ShopDetail from './pages/ShopDetail';
import NoFound from './pages/NoFound';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

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
        element: <Shop />,
      },
      {
        path: '/shop-detail',
        element: <ShopDetail />,
      },
      {
        path: '*',
        element: <NoFound />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },



    ]
  }
]);



const App = () => {
  return <RouterProvider router={router} />;
}

export default App