import React from 'react'
import logo from "./logo.jpeg"

const Nav = () => {
  return (
    <div>
      <nav className='navsection mb-3'>
        <div>
            <img className='logosection' src={logo} alt="logo"/>
        </div>
        <div>
            <h1 className='logoheader'>INDIAN INSTITUTION OF ENGINEERING TECHNOLOGY</h1>
        </div>
      </nav>
    </div>
  )
}

export default Nav
