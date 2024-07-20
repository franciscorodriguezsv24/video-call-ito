import React from 'react'
import "./Chat.css"
import { SideBar } from '../../components/SideBar'
import { MdAddIcCall, MdVideoCall, MdEmojiEmotions, MdSend} from "react-icons/md";
import { Message } from '../../components/Message';

const Chat = () => {
  return (
    <div className='row chat'>
    <div className='col-1'>
      <SideBar/>
    </div>
    <div className='col-11 chat-content pt-5'>
      <div className='w-50 d-flex flex-row justify-content-between align-items-center'>
        <div>
          <h1 className='fw-bold text-success'>AleRod</h1>
          <h4 className='fw-light text-success fst-italic'>Available</h4>
        </div>
        <div>
          <a className='btn text-success'  href='/call'><MdAddIcCall size={45}/></a>
          <a className='btn text-success'  href='/video-call'><MdVideoCall size={45}/></a>
        </div>
      </div>
      <hr className='text-success w-50'/>
      <div className='w-50 border-end border-success d-block pe-2'>
        <div className='bg-light border rounded-top ps-2 chat-area'>
          <Message/>
        </div>
        <div className='d-flex flex-row gap-3 align-items-center justify-content-center bg-color d-block px-2 rounded-bottom'>
          <a className='p-0 d-flex flex-row justify-content-center'><MdEmojiEmotions className='text-success' size={30}/></a>
          <input type="text" className="w-100 rounded-pill ps-2"/>
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <a className='btn rounded-circle bg-success w-100'><MdSend className='text-light' size={20}/></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Chat