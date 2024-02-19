import React from 'react'
import './login.css';
import profile from "../../asserts/face.png";
import email from "../../asserts/email.png";
import pass from "../../asserts/pass.png";
import Navbar from '../navbar';
 
export const Login = () => {
  return (
    <Navbar/>,
    <div className='main'>
        <div className='sub-main'>
        <div>
          <div className='imgs'>
          <div className='container-image'>
           <img src={profile} alt='profile ' className='profile'></img>

          </div>
       </div>
       <div className='text'>
        <h1>User Login</h1>
        <div className='second-input'>
        <img src={email} alt='email' className='email'/>
        <input type='text' placeholder='username' className='name'/>
        </div>
        <div className='second-input'>
        <img src={pass} alt='pass' className='email'/>
        <input type='password' placeholder='passsword' className='name'/>
        </div>
        <button className='btn2'>Login</button> 
        </div>
        <div className='acc'>
          <a href='/'>Forgot Password?</a>
          <p>Not registered?  
              <a href="/signup"> 
                Create an account 
            </a> 
        </p> 
        </div>
      </div>
    </div>
  </div>
  )
}
 export default Login