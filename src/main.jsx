import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/homepage'
import Formpage from './pages/formpage'
import './index.css'
import Author from './pages/author/components/Author'
import Authorlogin from './pages/author/Authorlogin'
import Authorform from './pages/author/Authorform'
import Imageup from './pages/author/components/Imageup'
import Adminlogin from './pages/admin/Adminlogin'
import Admin from './pages/admin/components/Admin'
import QRCode from './pages/author/components/QRCode'




const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"admin",
    element:<Admin/>
  },
  {
    path:"formpage",
    element:<Formpage/>,
  },
  {
    path:"adminlogin",
    element:<Adminlogin/>,
  },
  {
    path:"author",
    element:<Author/>
  },
  {
    path:"authorlogin",
    element:<Authorlogin/>
  },
  {
    path:"authorform",
    element:<Authorform/>
  },
  {
    path:"imageup",
    element:<Imageup/>
  },
  {
    path:"QR",
    element:<QRCode/>
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
