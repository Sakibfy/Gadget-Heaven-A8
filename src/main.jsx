import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Errorpage from './component/errorPage/ErrorPage'
import Home from './component/Home/Home'
import Dashboard from './component/dashboard/Dashboard'
import Statistics from './component/Statistics/Statistics'
import ProductDetails from './component/productDetails/ProductDetails'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Card from './component/card/Card'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../Category.json'),
        children: [
          {
            path: '/',
            element: <Card></Card>,
            loader: () => fetch('../CardData.json'),
           },
          {
            path: '/card/:category',
            element: <Card></Card>,
            loader: () => fetch('../CardData.json'),
           },
         ]
      },
      {
        path: '/productDetails/:product_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('../CardData.json'),
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>
      },
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
