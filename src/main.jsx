import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import cartProductsLoader from './loaders/cartProductsLoader';
import Login from './components/singin&up/Login';
import SingUp from './components/singin&up/SingUp';
import AuthProviders from './providers/AuthProviders';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import CheckoutOrder from './components/CheckOutOrder/CheckoutOrder';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'shop',
        element:<Shop></Shop>
      },
      {
        path:'orders',
        element:<Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path:'inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'singup',
        element:<SingUp></SingUp>
      },
      {
        path:'checkout',
        element:<PrivateRoute><CheckoutOrder></CheckoutOrder></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
       <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
