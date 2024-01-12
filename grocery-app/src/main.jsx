import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Location from './pages/Location';
import StoreMap from './pages/StoreMap';
import Products from './pages/Products';
import List from './pages/List';
import Comparison from './pages/Comparison';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Location />,
  },
  {
    path:"/StoreMap",
    element: <StoreMap />,
  },
  {
    path:"/Products",
    element: <Products />,
  },
  {
    path:"/List",
    element: <List />,
  },
  {
    path:"/Comparison",
    element: <Comparison />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)