import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./components/home/Home"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import User from "./components/user/User"
import Github, { githubInfoLoader } from "./components/github/Github"
import './index.css'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'

// const router = createBrowserRouter(
//   [
//     {
//       path:'/',
//       element: <Layout />,
//       children: [
//         {
//           path:"",
//           element: <Home />
//         },
//         {
//           path:"about",
//           element: <About />
//         },
//         {
//           path:"contact",
//           element: <Contact />
//         }
//       ]
//     }

//   ])


// 2nd method

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github'
       element={<Github />} />
    </Route>
  ), { basename: import.meta.env.BASE_URL })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
