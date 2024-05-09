import React from 'react'
import './About.css'
import Fade from 'react-reveal/Fade';
const About = () => {
  return (
    <>
    <Fade>
      <div className = "about" id="about">
        <div className='row'>
          <div className = 'col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
            <img src = "port1.JPG" alt = "Error"/>
          </div>
          <div className = 'col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
            <h1>About me</h1>
            <p>Software Engineer | [Current/Previous Company], [Location] | [Month, Year] - Present/End Date</p>
            <p>Developed and maintained [specific software/application] resulting in [quantifiable achievement, e.g., 20% improvement in efficiency].</p>
            <p>Collaborated with cross-functional teams to design and implement new features, ensuring alignment with project goals.</p>
            <p>Conducted thorough testing, identifying and resolving bugs to enhance software reliability.</p>
            <p>Participated in code reviews and collaborated with senior developers to enhance coding skills.</p>
          </div>
        </div>
      </div>
      </Fade>
    </>
  )
}

export default About