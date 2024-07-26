import "./css/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import NewProduct from "./pages/NewProduct";
import MyCart from "./pages/MyCart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DetailProduct from "./pages/DetailProduct";
import Root from "./pages/Root";
import { useState, useEffect } from "react";
import Food from "./pages/Food";
import Drinks from "./pages/Drinks";
import { Snacks } from "./pages/Snacks";
import { Daily } from "./pages/Daily";
import { Etc } from "./pages/Etc";
import Product from "./components/Product";
import Modal from "./components/Modal";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // if (process.env.NODE_ENV === 'production') 지우면 모달뜸
    if (process.env.NODE_ENV === "production") setIsModalOpen(true); // 컴포넌트 마운트 시 모달을 자동으로 엽니다.
  }, []);

  const closeModal = () => setIsModalOpen(false);

  const removeCartItem = (cid, qty) => {
    const removeIndex = cartItems.findIndex((item) => item.cid === cid);
    const updateCartList = cartItems.filter((item, i) => i !== removeIndex);
    setCartItems(updateCartList);
    setCartCount(cartCount - qty);
  };

  const addCartCount = (item) => {
    const updateItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id && cartItem.size === item.size
    );

    if (updateItemIndex !== -1) {
      const updateItems = [...cartItems];
      updateItems[updateItemIndex].qty++;
      setCartItems(updateItems);
    } else {
      setCartItems([...cartItems, item]);
    }

    setCartCount(cartCount + 1);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root cartCount={cartCount} />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <AllProducts /> },
        {
          path: "/products/:id",
          element: <DetailProduct addCartCount={addCartCount} />,
        },
        { path: "/products/new", element: <NewProduct /> },
        {
          path: "/carts",
          element: (
            <MyCart cartItems={cartItems} removeCartItem={removeCartItem} />
          ),
        },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        { path: "/food", element: <Food /> },
        { path: "/snacks", element: <Snacks /> },
        { path: "/drinks", element: <Drinks /> },
        { path: "/daily", element: <Daily /> },
        { path: "/etc", element: <Etc /> },
        { path: "/products", element: <Product /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl="/images/modal.jpg"
      >
        <h2>안녕하세요</h2>
        <p>사이트에 궁금한 점이 있다면 언제든 연락주세요.</p>
      </Modal>
    </>
  );
}

export default App;
