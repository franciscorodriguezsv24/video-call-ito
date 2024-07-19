import React from 'react'
import "./Call.css"
import { SideBar } from '../../components/SideBar'

const Call = () => {
  return (
    <div className='row call'>
      <div className='col-1'>
        <SideBar/>
      </div>
      <div className='col-11 bg-info'>
        Call
      </div>
  </div>
  )
}

export default Call