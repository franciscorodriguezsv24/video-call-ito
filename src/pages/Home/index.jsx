import React from 'react'
import './Home.css'
import { SideBar } from '../../components/SideBar'
import { useAuth } from '../../context/Authentication'

const Home = () => {
  const {currentUser} = useAuth()

  console.log(currentUser)
  return (
    <div className='row home'>
      <div className='col-1'>
        <SideBar/>
      </div>
      <div className='col-11 home-content d-flex flex-column gap-3'>
        <div className='w-100 text-center pt-5'>
          <h1 className='text-success'>Welcome to Connect Us!</h1>
        </div>
        <div>
          <h2 className='text-success'>Explore the benefits to use Connect Us!</h2>
          <hr className='w-100'/>
        </div>
        <div>
          <div className="text-center d-flex flex-column align-items-center gap-3">
            <div className="d-flex flex-row w-75 gap-3">
              <div className="border border-success w-50 rounded pb-2">
                <div className='image-container border rounded-top'>
                  <img src='https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='image'/>
                </div>
                <div className='ps-2 text-start'>
                  <h2 className='fs-1 text-success'>Video Calls</h2>
                  <p>
                    lorem picsm detail
                  </p>
                </div>
                <a className='btn btn-success text-light'>Learn More!</a>
              </div>
              <div className="border border-success w-50 rounded pb-2">
                <div className='image-container border rounded-top'>
                    <img src='https://images.pexels.com/photos/5588311/pexels-photo-5588311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  className='image'/>
                  </div>
                  <div className='ps-2 text-start'>
                    <h2 className='fs-1 text-success'>Calls</h2>
                    <p>
                      lorem picsm detail
                    </p>
                  </div>
                  <a className='btn btn-success text-light'>Learn More!</a>
                </div>
              </div>

            <div className="d-flex flex-row w-75 gap-3">
              <div className=" border border-success w-50 rounded pb-2">
                <div className='image-container border rounded-top'>
                  <img src='https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  className='image'/>
                </div>
                <div className='ps-2 text-start'>
                  <h2 className='fs-1 text-success'>Chat</h2>
                  <p>
                    lorem picsm detail
                  </p>
                </div>
                <a className='btn btn-success text-light'>Learn More!</a>
              </div>

              <div className=" border border-success w-50 rounded pb-2">
                <div className='image-container border rounded-top'>
                  <img src='https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  className='image'/>
                </div>
                <div className='ps-2 text-start'>
                  <h2 className='fs-1 text-success'>Friends</h2>
                  <p>
                    lorem picsm detail
                  </p>
                </div>
                <a className='btn btn-success text-light'>Learn More!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home