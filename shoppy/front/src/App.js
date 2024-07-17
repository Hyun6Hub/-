import "./css/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  return <RouterProvider router={router} />;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root cartCount={cartCount} />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
}

export default App;
