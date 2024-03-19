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
       <form >
       {/* action='#' method='POST' */}
          <div className='text'>
          <h1>User Login</h1>

          <div className='second-input'>
          <img src={email} alt='email' className='email'/>
          <input type='text' placeholder='username' className='name' id='userEmail'/>
          </div>
          <div className='second-input'>
          <img src={pass} alt='pass' className='email'/>
          <input type='password' placeholder='passsword' className='name' id='pass'/>
          </div>
          <button className='btn2' onClick={myFunction}>Login</button> 
          </div>
        </form>
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

function myFunction() {
  let obj = {
    email:'devanshgupta1947@gmail.com',
    pass:1234
  }
  // event.preventDefault();

  let ref_id = document.getElementById('userEmail').value
  let ref_pass = Number(document.getElementById('pass').value);
  // console.log(typeof ref_pass)

  if(ref_id === obj.email) {
      if(ref_pass === obj.pass) {
          window.alert("Successfully logged in");
      } else {
          window.alert("Password is incorrect")
      }
  } else {
      window.alert("Enter a valid Email")
  }
}

 export default Login