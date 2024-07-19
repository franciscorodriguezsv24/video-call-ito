import React from 'react'
import { SideBar } from '../../components/SideBar'
import './VideoCall.css'

const VideoCall = () => {
  return (
    <div className='row videoCall'>
    <div className='col-1'>
      <SideBar/>
    </div>
    <div className='col-11 bg-info'>
    Video Call
    </div>
  </div>
  )
}

export default VideoCall