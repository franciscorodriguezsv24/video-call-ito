import React from 'react'
import "./Friends.css"
import { SideBar } from '../../components/SideBar'

const Friends = () => {
  return (
    <div className='row chat'>
    <div className='col-1'>
      <SideBar/>
    </div>
    <div className='col-11 bg-info'>
    Friends
    </div>
  </div>
  )
}

export default Friends