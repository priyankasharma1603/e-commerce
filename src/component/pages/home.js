import React from 'react';
import './home.css';
import {useTypewriter,cursor} from 'react-simple-typewriter'
import {Link} from 'react-scroll';



const Home = () => {
  const [typeEffect]=useTypewriter({
    words:['Welcome to ShopSight !!'],
    loop:{},
    typeSpeed:100,
    delaySpeed:40
  })
  return (
    <section id='home'>
       <div className='homeContent'>
       <h1 className='homeText'>
        Hello, <span>{typeEffect}</span>
        </h1>
       <p className='homePara'>
       This is an e-commerce site for visually impaired 
       However, it can be used by the regular people to cater their
       shopping needs.This web application provides services
       under six different categories</p>
       <Link><button className='btn'>Get Started !!</button></Link> 


       </div>
    </section>
  )
}

export default Home
