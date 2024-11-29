import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/Komeshan_about.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>I am a dedicated software engineering student actively seeking an internship opportunity to apply my skills and gain practical 
                        experience in the field. With a solid foundation in software development, I am eager to contribute to innovative projects and 
                        learn from industry professionals.</p>
                    <p>I am passionate about coding, problem-solving, and continuously improving my technical abilities.</p>
                </div>

                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"50%"}}/>
                    </div>

                    <div className="about-skill">
                        <p>Javascript</p>
                        <hr style={{width:"50%"}}/>
                    </div>

                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{width:"50%"}}/>
                    </div>

                    <div className="about-skill">
                        <p>Node JS</p>
                        <hr style={{width:"50%"}}/>
                    </div>

                    <div className="about-skill">
                        <p>Express JS</p>
                        <hr style={{width:"50%"}}/>
                    </div>

                    <div className="about-skill">
                        <p>MongoDb</p>
                        <hr style={{width:"50%"}}/>
                    </div>
                </div>
            </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1>6</h1>
                <p>PROJECTS COMPLETED</p>
            </div>

            <hr />
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF CORPORATE EXPERIENCE</p>
            </div>

            <hr />
            <div className="about-achievement">
                <h1>6</h1>
                <p>TECHNICAL SKILLS</p>
            </div>
        </div>
    </div>
  )
}

export default About