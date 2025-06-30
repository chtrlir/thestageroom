import React from 'react'
import '../App.css'
const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-label'>TheStageRoom</div>
      <div className="header-right">
        <ul>
            <li>Home</li>
             <li>About</li>
              <li>Log in</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
    