import React, { useState }  from 'react'
import { Link } from "react-router-dom"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone"


const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  window.addEventListener("scroll",function() {
    const header =document.querySelector(".header")
    header.classList.toggle("active", window.screenY > 200)
  })
  return (
    <>
      <header className='header'>
        <div className='container flex'>
            <div className='logo'>
                <img src='assets/CrowdBird Logo.png' alt='' width="200" height="200" />
            </div>
            <div className="nav">
              <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Advertiestments'>Advertiestments</Link></li>
                <li><Link to='/blog'>Our Past Entrepreneurs</Link></li>
                <li><Link to='/portfolio'>Why CrowdBird</Link></li>
                <li><Link to='/shop'>Contact Us</Link></li>
                <li className="icon">
                  <SearchOutlinedIcon className='HeaderIcon'/>
                  <GridViewTwoToneIcon className='HeaderIcon' />
                  
                </li>
              </ul>
            </div>
            <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
              {sidebar? <CloseIcon/> : <MenuIcon/>}
            </button>
        </div>
      </header>
    </>
  )
}

export default Header
