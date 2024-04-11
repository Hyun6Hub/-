import Root from './pages/Root.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Work from './pages/Work.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, /** layout 정의 */
    // loader: rootLoader,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/skills", element: <Skills /> },
      { path: "/work", element: <Work /> },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

