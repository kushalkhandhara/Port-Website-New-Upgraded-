import React from 'react'
import './Techstack.css'
import { techstacklist } from '../../utils/TechstackList'
import Fade from 'react-reveal/Fade'

const Techstack = () => {
  return (
    <>
    
    <div className="container techstack" id="techstack">
        <Fade right>
        <h2 className="col-12 mt-3 mb-1 text-center">Technology Stack</h2>
        <hr/>
        <p className="pb-3 text-center">👉Including programming languages,framework,databse,font-end,back-end,API's</p>
        </Fade>
        <div className = "row">
        {techstacklist.map(tech=>(
        <Fade left>
            <div className="col-md-3" key = {tech._id}>
                <div className='card m-2'>
                    <div className='card-content'>
                        <div className='card-body'>
                            <div className='media d-flex justify-content center'>
                                <div className='align-self-center'>
                                    <tech.icons className='tech-icon'/>
                                </div>
                                <div className='media-body'>
                                    <h5>{tech.name}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
        ))}
        
    </div>
    </div>
    {/* </Fade> */}

    </>
  )
}

export default Techstack