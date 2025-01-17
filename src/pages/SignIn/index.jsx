import React, { useState } from 'react'
import "./SignIn.css"
import UserImg from "../../../public/user-img.png"
//import firebase component
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import {auth} from '../../credentials'
import { useNavigate } from 'react-router-dom';
import { BiWorld } from "react-icons/bi";

const SignIn = () => {
    const navigate = useNavigate();

    const [register, setRegister] = useState(false)

    const authentication = async(e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (register){
            await createUserWithEmailAndPassword(auth, email, password)
            navigate('/');
        }
        else {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/');
        }
    }

    return (

        <div className='m-0 w-100 p-0 sign-in-page'>
            <div className='row h-100'>
                <div className='col-md-4 h-100 d-flex flex-column justify-content-center align-items-center'>
                    <div className='form-body d-flex flex-column justify-content-center align-items-center border border-black rounded-4 w-75 p-5 gap-2 shadow'>
                        <form className='d-flex flex-column gap-2 w-100 align-items-center' onSubmit={authentication}>
                            <div className='border border-black rounded-circle d-flex flex-column align-items-center w-25'>
                                <img src={UserImg} width={80} height={85}/>
                            </div>
                            <input type="text" placeholder="Email" className='ps-2 rounded-3 border border-black w-100 input-design' id='email'/>
                            <input type="password" placeholder="Password" className='ps-2 rounded-3 border border-black w-100 input-design' id='password'/>
                            <button className='btn btn-success text-light'>{register ? "Sign Up" : "Sign In"}</button>
                        </form>
                        <div className='d-flex flex-row align-items-center gap-2'>
                            <p className='m-0'>{register ? "You have an account" : "Don't have an account yet?"}</p>
                            <button className='btn border border-success text-success' onClick={()=>setRegister(!register)}>{register ? "Sign In" : "Sign Up"}</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-8 sign-container'>
                    <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='phrase-1 text-success'>This is the place</h1>
                        <div className='d-flex flex-row align-items-center gap-3'>
                            <p className='phrase-2 m-0 text-success'>Where you can</p>
                            <p className='phrase-2dot5 m-0 text-success'>Connect</p>
                        </div>
                            <h1 className='phrase-3 m-0 text-success'>with</h1>
                            <h1 className='phrase-4 text-success'>your own <BiWorld/></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn 