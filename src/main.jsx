import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/homepage'
import Admin from './pages/admin'
import Formpage from './pages/formpage'
import Login from './pages/login'



const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"admin",
    element:<Admin/>,
  },
  {
    path:"formpage",
    element:<Formpage/>,
  },
  {
    path:"login",
    element:<Login/>,
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
