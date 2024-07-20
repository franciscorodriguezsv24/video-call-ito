import React from 'react'
import UserImg from "../../../public/user-img.png"
import { MdAddIcCall, MdVideoCall, MdChat} from "react-icons/md";

export const UserFriend = ({nickname, status}) => {
  return (
    <div className='w-100'>
      <div className='w-50 border border-success rounded d-flex flex-row align-items-center gap-3 ps-3 py-2'>
        <div className='border border-black rounded-circle d-flex flex-column align-items-center'>
            <img src={UserImg} width={40} height={40}/>
        </div>
        <div>
            <p className='m-0'>{nickname}</p>
            <p className={status == "Available" ? "text-success m-0" : "text-warning m-0"}>{status}</p>
        </div>

        <fieldset className='d-flex flex-row gap-2 justify-content-end w-100 pe-3' disabled={status !== "Available"}>
              <a href='video-call' className='btn btn-success rounded-circle text-light'><MdVideoCall size={25}/></a>
              <a href='/call' className='btn btn-success rounded-circle text-light'><MdAddIcCall size={25}/></a>
              <a href='/chat' className='btn btn-success rounded-circle text-light'><MdChat size={25}/></a>
        </fieldset>
      </div>
    </div>
  )
}
