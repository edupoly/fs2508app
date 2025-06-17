import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import Counter from './features/counter/Counter.jsx'
import Cart from './features/products/Cart.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Products from './features/products/Products.jsx'
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Products></Products>
        },
        {
            path:"/counter",
            element:<Counter></Counter>
        },
        {
            path:"/cart",
            element:<Cart></Cart>
        },
      ]
    },
]);
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
