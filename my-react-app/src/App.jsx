import { useState } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom"
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Recipe from './pages/Recipe'
import Favorite from './pages/Favorite'

import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
     <Route index element={<Home />} />
     <Route path="about" element={<About />} />
     <Route path ="recipes" element={<Recipe/>}/>
     <Route path ="favorites" element={<Favorite/>}/>
    
  </Route>

))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
