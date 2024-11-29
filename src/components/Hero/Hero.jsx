import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Komeshan_prof.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Komeshan,</span> an upcoming <br/>web developer</h1>
        <p>I am a dedicated software engineering student actively seeking an internship to apply my skills, gain practical experience, 
            and contribute to innovative projects.</p>

        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">
              <a href="../../../KOMESHAN_RESUME.pdf" download className="resume-link">My Resume</a>
            </div>
        </div>
    </div>
  )
}

export default Hero