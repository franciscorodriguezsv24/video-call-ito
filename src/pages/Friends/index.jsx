import React, { useState, useEffect }  from 'react'
import "./Friends.css"
import { SideBar } from '../../components/SideBar'
import { UserFriend } from '../../components/UserFriend'


const Friends = () => {

  const data = [
    {
      status: "Available",
      nickname: "AlejandroRB22"
    },
    {
      status: "Busy",
      nickname: "JohnDoe45"
    },
    {
      status: "Busy",
      nickname: "JaneSmith"
    }
  ];


  return (
    <div className='row friends'>
      <div className='col-1'>
        <SideBar/>
      </div>
    <div className='col-11 friends-content'>
      <div className='pt-5'>
        <h1 className='text-success'>Friends</h1>
        <hr/>
      </div>
      <div className='w-50 d-flex flex-column gap-2 border-end border-success'>
        {data.map((d, index) => (
            <UserFriend key={index} nickname={d.nickname} status={d.status} />
          ))}
      </div>
    </div>
  </div>
  )
}

export default Friends