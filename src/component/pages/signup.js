import React from 'react'
import "./signup.css"
import profile from "../../asserts/face.png";
import email from "../../asserts/email.png";
import pass from "../../asserts/pass.png";
import name from "../../asserts/name.png"
import contact from "../../asserts/contact.png"

export const Signup = () => {
  return (
    <div className='main1'>
    <div className='sub-main1'>
    <div>
      <div className='imgs'>
      <div className='container-image'>
       <img src={profile} alt='profile ' className='profile'></img>

      </div>
   </div>
   <div className='text'>
    <h1>Signup</h1>
    <div className='second-input1'>
    <img src={name} alt='Name' className='email'/>
    <input type='text' placeholder='Name' className='name'/>
    </div>
    <div className='second-input'>
    <img src={email} alt='email' className='email'/>
    <input type='text' placeholder='Email' className='name'/>
    </div>
    <div className='second-input'>
    <img src={contact} alt='email' className='email'/>
    <input type='number' placeholder='Contact' className='name'/>
    </div>
    <div className='second-input'>
    <img src={pass} alt='pass' className='email'/>
    <input type='password' placeholder='passsword' className='name'/>
    </div>
    <button className='btn2'>Signup</button> 
    </div>
    <div className='acc'>
      <a href='/'>Forgot Password?</a>
      <p>Already have an account?  
          <a href="/login"> 
            Login
        </a> 
    </p> 
    </div>
  </div>
</div>
</div>
  )
}

export default Signup