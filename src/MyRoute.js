import React from 'react'
import { BrowserRouter as RT, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'

export default function Myroute() {
  return (
<RT>
    <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/About' element={<About/>} />
        <Route path='/Products' element={<Products/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Alert' element={<h1>Directly element is send..</h1>}> </Route>
    </Routes>
</RT>
  )}
