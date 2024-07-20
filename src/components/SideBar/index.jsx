import React from 'react'
import { MdAddIcCall, MdVideoCall, MdChat, MdLogout, MdHomeFilled, MdMissedVideoCall} from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import UserImg from "../../../public/user-img.png"
import { signOut } from 'firebase/auth';
import {auth} from '../../credentials'
import { useLocation, Link } from "react-router-dom";
import { useAuth } from '../../context/Authentication';

export const SideBar = () => {
    const location = useLocation();
    const {currentUser} = useAuth();

return (
    <>
        <nav className="d-flex flex-column justify-content-between gap-3 h-100 ps-2 pb-3">
            <div className='text-success text-center'>
                <MdMissedVideoCall size={60}/>
                <p className='m-0'>Connect Us</p>
            </div>
            <div className='d-flex flex-column gap-2 justify-content-center'>
                <Link className={location.pathname === '/video-call' ? 'btn d-flex flex-row text-light bg-success align-items-center gap-2 fs-4' : 'btn d-flex flex-row text-success align-items-center gap-2 fs-4'} to="/video-call">
                    <MdVideoCall size={30}/>
                    Video Call
                </Link>
                <Link className={location.pathname === '/call' ? 'btn d-flex flex-row text-light bg-success align-items-center gap-2 fs-4' : 'btn d-flex flex-row text-success align-items-center gap-2 fs-4'}  to="/call">
                    <MdAddIcCall size={30}/>
                    Call
                </Link>
                <Link  className={location.pathname === '/' ? 'btn d-flex flex-row text-light bg-success align-items-center gap-2 fs-4' : 'btn d-flex flex-row text-success align-items-center gap-2 fs-4'}  to="/">
                    <MdHomeFilled size={30}/>
                    Home
                </Link>
                <Link  className={location.pathname === '/friends' ? 'btn d-flex flex-row text-light bg-success align-items-center gap-2 fs-4' : 'btn d-flex flex-row text-success align-items-center gap-2 fs-4'}  to="/friends">
                    <FaUserFriends size={30}/>
                    Friends
                </Link>
                <Link className={location.pathname === '/chat' ? 'btn d-flex flex-row text-light bg-success align-items-center gap-2 fs-4' : 'btn d-flex flex-row text-success align-items-center gap-2 fs-4'}  to="/chat">
                    <MdChat size={30}/>
                    Chat
                </Link>
                
            </div>
            <div className='d-flex flex-column align-items-start w-100'>
                <div className='w-100 d-flex flex-column align-items-center'>
                    <div className='border border-black rounded-circle d-flex flex-column align-items-center'>
                        <img src={UserImg} width={60} height={60}/>
                    </div>
                    <div className='w-100 text-wrap m-0'>{currentUser.email}</div>
                </div>
    
                <button className='btn btn d-flex flex-row text-danger align-items-center gap-2 fs-4' onClick={()=>signOut(auth)}>
                <MdLogout size={35}/>
                Logout
                </button>  
            </div>
        </nav>
    </>
  )
}
