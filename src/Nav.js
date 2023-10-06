import {Link} from 'react-router-dom';
import React from 'react'
import './Home.css'

export default function Nav() {
  return (
    <>
    <nav>

    <ul className='nav'>
        <Link to='/'> <li>Home</li></Link>
        <Link to='/About'><li>About</li></Link>
        <Link to='/Products'><li>Products</li></Link>
        <Link to='/Contact'><li>Contact</li></Link>
        <Link to='/Alert'><li>Do not click!!!!</li></Link>
      </ul>


      {/* <ul className='nav'>
        <a href='/'> <li>Home</li></a>
        <a href='/About'><li>About</li></a>
        <a href='/Contact'><li>Contact</li></a>
        <a href='/Hello'><li>Do not click</li></a>
      </ul> */}
    </nav>
    </>
  )
}
