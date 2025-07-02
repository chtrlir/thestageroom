import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-label'> <nav>
        <Link to="/" end className="nav-link">TheStageRoom</Link>
      </nav>
             </div>
      <div className="header-right">
        <nav>
        <ul>
              <Link to="/" end className="nav-link">
              <li>
                Home
              </li>
          
        </Link>
        <Link to="/about" end className="nav-link">
                <li>About</li>
          
        </Link>
        <Link to="/login" end className="nav-link">
               <li>Log in</li>
          
        </Link>
           
           
           
        </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
