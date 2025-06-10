import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Aboutus from './Aboutus.jsx';
import Home from './Home.jsx';
import Contactus from './Contactus.jsx';
import Products from './Products.jsx';
import ProductDetails from './ProductDetails.jsx';

  const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/aboutus",
                element:<Aboutus></Aboutus>
            },
            {
                path:"/home",
                element:<Home></Home>
            },
            {
                path:"/contactus",
                element:<Contactus></Contactus>
            },
            {
                path:"/products",
                element:<Products></Products>
            },
            {
                path:"/productDetails/:id",
                element:<ProductDetails></ProductDetails>
            }
        ]
    },
    
  ])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
