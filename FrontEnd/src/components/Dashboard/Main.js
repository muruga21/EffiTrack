import React, { useState } from 'react'
import Navbar from './Navbar'
import Mid from './Mid'
import Showcase from './Showcase'
import Shimmer from './Shimmer'
import EditProfile from '../ProfilePage/Editprofile'
import Chart from '../highcharts';

 const Main = ( props ) => {
  console.log(props.display)
  return (
    <div className='overflow-hidden h-full'>
        <div className='overflow-hidden h-[92vh]  white p-3 '>
          <div className='overflow-y-auto w-full h-full no-scrollbar'>
            {
              props.display  === 'dashboard' ? <div>
                  <Navbar className='fixed'/>
                  <Mid/>
                  <Showcase/>
                  <Showcase/>
                  <Showcase/>
                </div>
              :
              <EditProfile/>
            }
          </div>
        </div>       
    </div>
  )
}

export default Main;