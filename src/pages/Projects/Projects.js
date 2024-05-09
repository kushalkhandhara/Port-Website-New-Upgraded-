import React from 'react'
import './Projects.css'
import Image from '../../assets/images/ecommerce.jpg'
import Fade from 'react-reveal/Fade'

const Projects = () => {
  return (
    <>

    <div className='container project' id="project">
        <Fade left>
        <h2 className="col-12 mt-3 mb-1 text-center">My Top Recent Projects</h2>
        <hr/>
        <p className="pb-3 text-center">👉 Here Are My Top Recent Projects </p>
        </Fade>
        {/* Card Design */}
        <div className="row" id = "ads">
            <Fade right>
            <div className='col-md-4'>
                <div className="card rounded">
                    <div className = "card-image">
                        <span className = "card-notify-badge">
                            Full Stack
                        </span>
                        <img src={Image} alt="projects"/>
                        <div className = "card-image-overly m-auto mt-2">
                            <span className = "card-detail-badge">HTML</span>
                            <span className = "card-detail-badge">CSS</span>
                            <span className = "card-detail-badge">Js</span>
                            <span className = "card-detail-badge">Python</span>
                            <span className = "card-detail-badge">Django</span>
                        </div>
                        <div className = "card-body text-center">
                            <div className = "ad-title">
                                <h5>E-Commerce Website</h5>
                            </div>
                            <a href ="#google" className = "ad-btn"> View</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='col-md-4'>
                <div className="card rounded">
                    <div className = "card-image">
                        <span className = "card-notify-badge">
                            Full Stack
                        </span>
                        <img src={Image} alt="projects"/>
                        <div className = "card-image-overly m-auto mt-2">
                            <span className = "card-detail-badge">MongoDB</span>
                            <span className = "card-detail-badge">NodeJs</span>
                            <span className = "card-detail-badge">ReactJs</span>
                            <span className = "card-detail-badge">NodeJs</span>
                            {/* <span className = "card-detail-badge">Django</span> */}
                        </div>
                        <div className = "card-body text-center">
                            <div className = "ad-title">
                                <h5>i-Notebook</h5>
                            </div>
                            <a href ="#google" className = "ad-btn"> View</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className="card rounded">
                    <div className = "card-image">
                        <span className = "card-notify-badge">
                            Static
                        </span>
                        <img src={Image} alt="projects"/>
                        <div className = "card-image-overly m-auto mt-2">
                            <span className = "card-detail-badge">HTML</span>
                            <span className = "card-detail-badge">CSS</span>
                            <span className = "card-detail-badge">Js</span>
                            <span className = "card-detail-badge">Bootstrap</span>
                            {/* <span className = "card-detail-badge">Django</span> */}
                        </div>
                        <div className = "card-body text-center">
                            <div className = "ad-title">
                                <h5>StarBucks Website</h5>
                            </div>
                            <a href ="#google" className = "ad-btn">View</a>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        </div>


    </div>
    
    </>
  )
}

export default Projects