import React from 'react'
import './Home.css'
import { SideBar } from '../../components/SideBar'
import { useAuth } from '../../context/Authentication'

const Home = () => {
  const {currentUser} = useAuth()

  console.log(currentUser)
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