import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components.jsx/Home/Home.jsx'
import About from './components.jsx/About/About.jsx'
import Contact from './components.jsx/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components.jsx/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children:[
//         {
//             path: "",
//             element : <Home/>

//         },
//          {
//             path: "about",
//             element : <About/>
//          },
//          {
//           path: "Contact",
//           element: <Contact/>
//          }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    {/* <Route path='Github' element={<Github/>}/> */}

    // BY Using Loader Function we can use gith hub to optimize it by hovering it and it loads the page
    <Route
        path='Github'
        element={<Github/>}
        loader={githubInfoLoader}
      />
    </Route>
  )
  
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
