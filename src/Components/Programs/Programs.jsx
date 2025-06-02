import React from 'react'
import './Programs.css'
import coda from '../../assets/coda.jpg'
import codi from '../../assets/codi.jpg'
import myHand from '../../assets/myHand.jpg'
import AppDev from '../../assets/AppDev.png'
import phoneApp from '../../assets/phoneApp.png'
import ManDesk from '../../assets/ManDesk.png'

const Programs = () => {
  return (
    <div className='progs'>

      <div className='progra'>
        <img src={coda} alt='' />
        <div className='Capt'>
          <img src={AppDev} alt='' />
          <h2>Web development</h2>
        </div>
      </div>


      <div className='progra'>
        <img src={codi} alt='' />
        <div className='Capt' >
          <img src={phoneApp} alt='' />
          <h2>Mobile App development</h2>
        </div>
      </div>


      <div className='progra'>

        <img src={myHand} alt='' />
        <div className='Capt'>
          <img src={ManDesk} alt=''/>
          <h2>Graphics Design</h2>
        </div>
      </div>




    </div>
  )
}

export default Programs
