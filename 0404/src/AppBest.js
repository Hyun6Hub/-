import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BestSeller from './page_best/BestSeller.jsx';
import RealTimeBestSeller from './page_best/RealTimeBestSeller.jsx';
import HotPriceBestSeller from './page_best/HotPriceBestSeller.jsx';
import DayBestSeller from './page_best/DayBestSeller.jsx';
import MonthWeeklyBestSeller from './page_best/MonthWeeklyBestSeller.jsx';
import SteadySeller from './page_best/SteadySeller.jsx';
import Root from './page_best/Root.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, /** layout 정의 */
    // loader: rootLoader,
    children: [
      { path: "/", element: <BestSeller /> },
      { path: "/realtime", element: <RealTimeBestSeller /> },
      { path: "/hotprice", element: <HotPriceBestSeller /> },
      { path: "/day", element: <DayBestSeller /> },
      { path: "/monthweekly", element: <MonthWeeklyBestSeller /> },
      { path: "/steady", element: <SteadySeller /> },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

