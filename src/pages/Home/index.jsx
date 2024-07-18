import React from 'react'
import auth from '../../credentials'
import { signOut } from 'firebase/auth'

const Home = () => {
  return (
    <div>Home
    <button className='btn btn-danger' onClick={()=>signOut(auth)}>logout</button>    
    </div>
  )
}

export default Home