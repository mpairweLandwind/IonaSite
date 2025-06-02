import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Tech from './Components/Tech/Tech'
import Programs from './Components/Programs/Programs'
import MyTitle from './Components/MyTitle/MyTitle'
import About from './Components/About/About'
import Products from './Components/Products/Products'
import Testimonials from './Components/Testimonials/Testimonials'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Tech />

      <div className='navContainer'>
        <MyTitle />
        <Programs />
        <About />


      </div>

      <Products />

      <Testimonials />

      <Contacts />

      <Footer/>
    </div>
  )
}

export default App
