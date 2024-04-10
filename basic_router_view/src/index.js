import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Work from './pages/Work.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",  /** '/' :: Root Context(루트 컨텍스트) */
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: teamLoader,
      },
      {
        path: "/about",
        element: <About />,
        // loader: teamLoader,
      },
      {
        path: "/skills",
        element: <Skills />,
        // loader: teamLoader,
      },
      {
        path: "/work",
        element: <Work />,
        // loader: teamLoader,
      },
      {
        path: "/all",
        element: <Products />,
        // loader: teamLoader,
      },
      {
        path: "/detail/:pid",
        element: <ProductDetail />,
        // loader: teamLoader,
      },
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
