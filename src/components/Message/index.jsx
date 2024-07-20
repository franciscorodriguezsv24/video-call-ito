import React from 'react'
import { CiUser } from "react-icons/ci";
import './Message.css'

export const Message = () => {
  return (
    <>
      <div className='d-flex flex-row align-items-center gap-2 pt-2'>
        <div className='border border-black rounded-circle d-flex flex-column align-items-center p-1'>
          <CiUser size={35}/>
        </div>
        <div>
          <p className='m-0 friend-container py-2 rounded px-2'>
            Lorems picsum like a message
          </p>
        </div>
      </div>

      <div className='d-flex flex-row align-items-center justify-content-end gap-2 pe-2 pb-2'>
        <div>
          <p className='m-0 bg-success text-light rounded p-2'>
            Lorems picsum like a message
          </p>
        </div>
        <div className='border border-black rounded-circle d-flex flex-column align-items-center p-1'>
          <CiUser size={35}/>
        </div>
      </div>
    </>

)
}
