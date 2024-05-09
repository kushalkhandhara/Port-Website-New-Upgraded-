import {React,useState} from 'react'
import './MobileNav.css'
import { CgMenuGridO } from "react-icons/cg";
import { GrTechnology } from "react-icons/gr";
import { Link } from 'react-scroll';
import { IoIosClose } from "react-icons/io";
import {FcHome,FcAbout, FcPortraitMode, FcReadingEbook, FcVideoProjector,FcBusinessContact} from 'react-icons/fc'

const MobileNav = () => {
    const [open,setOpen] = useState(false)
    // handle open
    const handleOpen = ()=>
    {
        setOpen(!open)
    }
  return (
    <>
    <div className="mobile-nav" >
        <div className="mobile-nav-header">
            {open ? (<IoIosClose size={30} color='white' className='mobile-nav-icon' onClick={handleOpen}/>) 
            : (<CgMenuGridO size={30} className='mobile-nav-icon' onClick={handleOpen}/>)}
            <span className="mobile-nav-title">My Portfolio</span>
        </div>
        {open  && (
            
                <div className="mobile-nav-menu" >
                    <div className="nav-items" >
                    <div className="nav-item" >
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
            </div>

        )}
 
    </div>


    </>
  )
}

export default MobileNav