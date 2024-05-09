import React from 'react'
import './Menus.css'
import { GrTechnology } from "react-icons/gr";
import {FcHome,FcAbout, FcPortraitMode, FcReadingEbook, FcVideoProjector,FcBusinessContact} from 'react-icons/fc'
// import * as Scroll from 'react-scroll'
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const Menus = ({toggle}) => {
  return (
    <>
  
    {toggle ?
    (
    <>
    <Zoom>
    <div className="navbar-profile-pic">
        <img src="port1.JPG" alt="Error" className="portimg"/>
    </div>
    </Zoom>
    <Zoom>
    <div className="nav-items">
        <div className="nav-item">
            <div className = "nav-link">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:'none'}}>
                    <FcHome/>Home
                </Link>
            </div>
            <div className = "nav-link">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:'none'}}>
                    <FcAbout/>About
                </Link>
            </div>
            <div className = "nav-link">
                <Link to="education" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:'none'}}>
                    <FcReadingEbook/>Education
                </Link>
            </div>
           
            <div className = "nav-link">
                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:'none'}}>
                    <GrTechnology />TechStack
                </Link>
            </div>
            
            <div className = "nav-link">
                <Link to="project" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:'none'}}>
                    <FcVideoProjector/>Projects
                </Link>
            </div>
            <div className = "nav-link">
                <Link to="work" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:'none'}}>
                    <FcPortraitMode/>Work Experiance
                </Link>
            </div>

            <div className = "nav-link">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:'none'}}>
                    <FcBusinessContact/>Contact
                </Link>
            </div>
            {/* <GrTechnology /> */}
        </div>
    </div>
    </Zoom>
    
    </>) 
    
    
    : (
        <> 
        <Fade left>
        <div className = "nav-items">
            <div className = "nav-link">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:'none'}}>
                    <FcHome size={25} title = "Home" />
                </Link>
            </div>

            <div className = "nav-link">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:'none'}}>
                    <FcAbout title = "About" size={25}/>
                </Link>
            </div>

            <div className = "nav-link">
                <Link to="education" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:'none'}}>
                    <FcReadingEbook size={25} title="Education"/>
                </Link>
            </div>

            <div className = "nav-link">
                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:'none'}}>
                    <GrTechnology title="TechStack" size={25} color = 'white' />
                </Link>
            </div>

            <div className = "nav-link">
                <Link to="project" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:'none'}}>
                    <FcVideoProjector title = "Project" size={25}/>
                </Link>
            </div>

            <div className = "nav-link">
                <Link to="work" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:'none'}}>
                    <FcPortraitMode title = "Work Experiance" size={25}/>
                </Link>
            </div>
 
            
            {/* <div className = "nav-link">
                <FcReadingEbook size={25}/>
            </div> */}


            <div className = "nav-link">
            <Link to="work" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:'none'}}>
                <FcBusinessContact title='Contacts' size={25}/>
            </Link>
            </div>
        </div>
        </Fade>
        </>
    )}
    
    </>
  )
}

export default Menus