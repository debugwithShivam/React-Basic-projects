import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import { lazy } from 'react'
import { Suspense } from 'react'

const Home = lazy(() => import("home/Home"));
const About = lazy(() => import("about/About"));
const Products = lazy(() => import("products/Products"));
let router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/Product',
        element:<Products/>
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
