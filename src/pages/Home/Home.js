import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect'
import Resume from '../../assets/docs/Kushal_Resume (1).pdf'

const Home = () => {
  return (
    <>
    <div className="container-fluid home-container" id="home">
      <div className="container home-content">
        <h1>Hii👋 I'am Kushal</h1>
        <h2>
          <Typewriter options = {{

            strings : ["Full Stack Developer!","MERN Stack Developer!","Django Developer!"],
            autoStart : true,
            loop : true,
          }}/>
        </h2>
        <div className="home-buttons">
          <a className="btn btn-hire" href="https://api.whatsapp.com/send?phone=9664996896" 
          rel = "noreferrer" target= "_blank">Hire Me</a>
          {/* <button className="btn btn-hire">Hire Me</button> */}
          <a className="btn btn-cv" href = {Resume} download = "Kushal_Resume">My Resume</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home