import React from "react";
import "./Navbar.scss";
import logo from  "../../logo.png"

export default function Navbar(){
    return(
        <div>
          <nav className="navbar">
          <img src={logo} alt="city tour logo"/>
          <ul className="nav-links">
          <li>
              <a href="/" className="nav-link">home</a>         
          </li>
          <li>
              <a href="/" className="nav-link">about</a>         
          </li>
          <li>
              <a href="/" className="nav-link active">tour</a>         
          </li>

          </ul>
          </nav>
    </div>
    )
}