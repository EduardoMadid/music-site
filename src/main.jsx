import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './routes/Error.jsx'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Musicas from './routes/Musicas.jsx'
import GlobalStyle from './css/GlobalStyle.jsx'

const router = createBrowserRouter([
  {
    // Elemento pai
    path:'/', element:<App/>,
    errorElement:<Error/>,

    // Elementos filhos
    children:[
      {path:'/', element:<Home/>},
      {path:'/login', element:<Login/>},
      {path:'/musicas', element:<Musicas/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyle/>
  </StrictMode>,
)
