import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Authentication from './screens/Authentication/Authentication.jsx'

const router = createBrowserRouter([
  {
    index: true,
    element: <App />
  },
  {
    path: "/auth",
    element: <Authentication />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
