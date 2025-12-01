import React from 'react'
import Logo from './logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div>
        <img src={Logo} alt='logo'/>
      </div>
      <div>
        <ol>
            <li>
                <Link to={"/viewstudents"}>Viewstudents</Link>
            </li>
            <li>
                <Link to={"/addstudents"}>Addstudents</Link>
            </li>
          
        </ol>
      </div>
    </nav>
  )
}

export default Nav
