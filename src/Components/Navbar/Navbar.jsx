import React, { useState } from 'react'
import './Navbar.css'
import Iona from '../../assets/Iona.jpg'
 import menuIcon from '../../assets/menuIcon.png'
import { Link } from 'react-scroll'
 
const Navbar = () => {

const [mobileMenu, setMobileMenu] = useState(false)
  const ToggleMenu = ()=>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true)

  }
  return (

    <>
      <nav className='navContainer'>
        <img src={Iona} alt='' className='logo' />

        <ul className={mobileMenu?'': 'hideMenu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='progs' smooth={true} offset={-260} duration={500}>Programs</Link></li>
          <li><Link to='MyProducts' smooth={true} offset={-150} duration={500}>Products</Link></li>
          <li><Link to='testimonials-section' smooth={true} offset={-260} duration={500}>Team</Link></li>
          <li><Link to='descrip' smooth={true} offset={-260} duration={500}>Services</Link></li>
          <li><Link to='contact_us' smooth={true} offset={-400} duration={500} className='myButton'> Contacts </Link></li> {/* Created a button for the Contact us*/}

        </ul>


       <img src={menuIcon} alt="" className='menu_icon' onClick={ToggleMenu} />
      </nav>


    </>
  )

}

export default Navbar
