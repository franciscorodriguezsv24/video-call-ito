import React from 'react'
import "./Chat.css"
import { SideBar } from '../../components/SideBar'

const Chat = () => {
  return (
    <div className='row chat'>
    <div className='col-1'>
      <SideBar/>
    </div>
    <div className='col-11 bg-info'>
    Chat
    </div>
  </div>
  )
}

export default Chat