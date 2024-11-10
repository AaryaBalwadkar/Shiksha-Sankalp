import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav class="navbar_container">
      <a className="logo" href="#">
        <img src={logo} alt="IE"></img>
      </a>
      
      <ul class="navbar">
        <li><a>Home</a></li>
        <li><a>Contact</a></li>
      </ul>

      <div class="bx bx-menu" id="menu-icon"><i class="fa-solid fa-bars"></i></div>
    </nav>
  )
}

export default Navbar
