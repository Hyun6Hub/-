import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import NewProduct from './pages/NewProduct';
import MyCart from './pages/MyCart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DetailProduct from './pages/DetailProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, /** layout 정의 */
    // loader: rootLoader,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <AllProducts /> },
      { path: "/products/:id", element: <DetailProduct /> },
      { path: "/products/new", element: <NewProduct /> },
      { path: "/carts", element: <MyCart /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
