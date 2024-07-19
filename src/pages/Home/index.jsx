import React from 'react'
import './Home.css'
import { SideBar } from '../../components/SideBar'

const Home = () => {
  return (
    <div className='row home'>
      <div className='col-1'>
        <SideBar/>
      </div>
      <div className='col-11 bg-info'>
      home
      </div>
    </div>
  )
}

export default Home