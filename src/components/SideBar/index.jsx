import React from 'react'
import { MdAddIcCall, MdVideoCall, MdChat, MdLogout, MdHomeFilled} from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import UserImg from "../../../public/user-img.png"
import { signOut } from 'firebase/auth';
import auth from '../../credentials'
import { useLocation, Link } from "react-router-dom";

export const SideBar = () => {
    const location = useLocation();
  return (
    <>
        <nav className="d-flex flex-column justify-content-between gap-3 h-100 ps-2 pb-3">
            <div>
                header 
            </div>
            <div className='d-flex flex-column gap-2 justify-content-center'>
                <Link className={location.pathname === '/video-call' ? 'btn d-flex flex-row text-light bg-success align-items-center gap-2 fs-4' : 'btn d-flex flex-row text-success align-items-center gap-2 fs-4'} to="/video-call">
                    <MdVideoCall size={35}/>
                    Video Call
                </Link>
                <Link className={location.pathname === '/call' ? 'btn d-flex flex-row text-light bg-success align-items-center gap-2 fs-4' : 'btn d-flex flex-row text-success align-items-center gap-2 fs-4'}  to="/call">
                    <MdAddIcCall size={35}/>
                    Call
                </Link>
                <Link  className={location.pathname === '/' ? 'btn d-flex flex-row text-light bg-success align-items-center gap-2 fs-4' : 'btn d-flex flex-row text-success align-items-center gap-2 fs-4'}  to="/">
                    <MdHomeFilled size={35}/>
                    Home
                </Link>
                <Link  className={location.pathname === '/friends' ? 'btn d-flex flex-row text-light bg-success align-items-center gap-2 fs-4' : 'btn d-flex flex-row text-success align-items-center gap-2 fs-4'}  to="/friends">
                    <FaUserFriends size={35}/>
                    Friends
                </Link>
                <Link className={location.pathname === '/chat' ? 'btn d-flex flex-row text-light bg-success align-items-center gap-2 fs-4' : 'btn d-flex flex-row text-success align-items-center gap-2 fs-4'}  to="/chat">
                    <MdChat size={35}/>
                    Chat
                </Link>
                
            </div>
            <div className='d-flex flex-column align-items-start w-100'>
                <div className='w-100 d-flex flex-column align-items-center'>
                    <div className='border border-black rounded-circle d-flex flex-column align-items-center w-25'>
                        <img src={UserImg} width={60} height={60}/>
                    </div>
                </div>
    
                <button className='btn btn d-flex flex-row text-danger align-items-center gap-2 fs-4' onClick={()=>signOut(auth)}>
                <MdLogout size={35}/>
                logout</button>  
            </div>
        </nav>
    </>
  )
}
