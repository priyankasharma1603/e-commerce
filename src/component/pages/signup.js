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
   <form>
   <div className='text'>
    <h1>Signup</h1>
      <div className='second-input1'>
        <img src={name} alt='Name' className='email'/>
        <input type='text' placeholder='Name' className='name' id='name'/>
      </div>
      <div className='second-input'>
        <img src={email} alt='email' className='email' id='email'/>
        <input type='text' placeholder='Email' className='name'/>
      </div>
      <div className='second-input'>
        <img src={contact} alt='email' className='email'/>
        <input type='number' placeholder='Contact' className='name'id='contact'/>
      </div>
      <div className='second-input'>
        <img src={pass} alt='pass' className='email'/>
        <input type='password' placeholder='passsword' className='name' id='password'/>
      </div>
        <button className='btn2' onClick={storeData} id='butt'>Signup</button> 
      </div>
    <div className='acc'>
      <a href='/'>Forgot Password?</a>
      <p>Already have an account?  
          <a href="/login"> 
            Login
        </a> 
    </p> 
    </div>
    </form>
  </div>
  {/* </form> */}
</div>
</div>
  )
}

// declaring an empty array to store the user data in the form of --Array of Objects--
const arr = [];
let j = arr.length+1; //this variable is used for the storage of id
function storeData() {
  // let e = document.getElementById('butt');
    // e.stopPropagation
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let password = document.getElementById("password").value;

    let obj = {
        id: j++,
        name: name, 
        email: email, 
        contact: contact,
        password: password
    };

    arr.push(obj);

    console.log(arr);

    console.table(obj);
}


export default Signup