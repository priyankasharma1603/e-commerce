import React from 'react';
import './navbar.css';
import logo from '../../src/asserts/logo.png';
import {Link} from 'react-scroll';
import NavigateM from './pages/navigateM';
import {useState} from 'react';

const Navbar=()=>{
    const [openModel,setOpenModal]=useState(false)
    return(
      <>
        <header>
            <div className='container'>
                <div className='logo-brand'>
                <a href='/'>ShopSight</a>

                </div>
                <nav>
                    <ul>
                        <li>
                        <a href='/'>Home</a>
                        </li>
                        <li>
                        <a href='#' onClick={()=>{
                            setOpenModal(true);
                        }}>Navigation Mannual</a>
                        </li>
                        {openModel && <NavigateM closeModel={setOpenModal}/>}
                        <li>
                        <a href='/about'>About</a>
                        </li>
                        <a href="/login">
                       <button className='btn1'>
                        Login
                        </button>
                         </a>
                    </ul>

                </nav>

            </div>
        </header>
      </>


    )
}
export default Navbar;