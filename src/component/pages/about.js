import React from 'react';
import about1 from '../../asserts/abt1.jpeg';
import about2 from '../../asserts/abt2.jpeg';
import './about.css';


export const About = () => {
  return (
    <section className="about-us">
    <div className="about">
      <div className='pic'> <img alt="" src={about1} className='img1'></img></div>
      <div className="text">
        <h2>About Us</h2>
        <h5>Our <span> Vision</span></h5>
          <p>We envision a world where everyone, regardless of their visual abilities, can enjoy the freedom and empowerment of independent online shopping.</p>
        <h5>Our <span> Process</span></h5>
        <p>•  Voice-guided navigation: Easily navigate through our app using clear and concise voice prompts. No need to rely on visual cues!</p>
        <p>• Text-to-speech functionality: Have descriptions of products, categories, and other information read aloud to you with a high-quality text-to-speech engine.</p>
        <div className="data">
        <a href="/" className="hire">Get Started</a>
        </div>
      </div>
    </div>
  </section>
  
  )
}
export default About