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
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#607D8B',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)