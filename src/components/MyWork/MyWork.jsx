import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import spotify from '../../assets/spotify.svg'
import tomato from '../../assets/tomato.svg'
import weather from '../../assets/weather.svg'
import to_do from '../../assets/to_do.svg'
import prescripto from '../../assets/prescripto.svg'
import forever from '../../assets/forever.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="mywork-container">
          <a href="https://komeshan-prescripto.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={prescripto} alt="" /></a>
          <a href="https://komeshan-forever.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={forever} alt="" /></a>
          <a href="https://tomato-frontend-w6ii.onrender.com/" target="_blank" rel="noopener noreferrer"><img src={tomato} alt="" /></a>
          <a href="https://komeshan-weather-app.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={weather} alt="" /></a>
          <a href="https://komeshan-todo-app.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={to_do} alt="" /></a>
          <a href="https://spotify-frontend-d9v7.onrender.com" target="_blank" rel="noopener noreferrer"><img src={spotify} alt="" /></a>
        </div>
    </div>
  )
}

export default MyWork