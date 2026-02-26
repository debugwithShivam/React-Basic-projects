import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import Layout from './Layout.jsx'
import { Suspense } from 'react'
const RemoteLayout  = lazy(() => import('Layout/Layout'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
         index: true,
        element:<Suspense fallback={<h1>Loading...</h1>}>
            <RemoteLayout  />
          </Suspense>
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
