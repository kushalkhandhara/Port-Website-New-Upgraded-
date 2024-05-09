import React,{useState} from 'react'
import './Contact.css'
import Img from '../../assets/images/Contact Us-01.jpg'
import { FaLinkedin,FaInstagram} from "react-icons/fa6";
import { FaFacebookSquare,FaGithub } from "react-icons/fa";
import axios from 'axios'//For Networking
// import { FaSnapchatGhost } from "react-icons/fa";
import Roll from 'react-reveal/Roll';
import { toast } from 'react-toastify';


const Contact = () => {

    const [name,setName] = useState('')
    const [msg,setMsg] = useState('')
    const [email,setEmail] = useState('')
    const handleSubmit = async(e) => 
    {
        e.preventDefault()
        try
        {
            if(!name || !email || !msg)
            {
                toast.error("Please Provide All Fields")
               return; 
            }
            const res = await axios.post('http://localhost:8000/api/auth/kushal/sendEmail',{name,email,msg})
                console.log(res)
                //validation success
                if(res.data.success)
                {
                    toast.success(res.data.message)
                }
                else
                {
                    toast.error(res.data.message)
                } 
        }
        catch(error)
        {
            console.log(error.message)
        }
    }





  return (

    <>
    <Roll left>
    <div className="contact" id="contact">
        <div className="card card0 border-0">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="card1">
                        <div className="row border-line">
                            <img src ={Img} alt = "Error" className="image"/>
                        </div>
                    </div>
                </div>
                {/* <div className='row'> */}
                <div className="col-md-6 col-lg-6 card3">
                    <div className="card2 d-flex border-0 px-4 py-3">
                        {/* <div className="row"> */}
                        <h4>Contact Us With</h4>
                            <FaLinkedin className="ms-3" size={30} color='black'/>
                            <FaInstagram size={30} className='ms-2' color='black'/>
                            <FaFacebookSquare size={30} className='ms-2' color='black'/>
                            <FaGithub size={30} className='ms-2' color='black'/>

                            {/* <FaSnapchatGhost size={30} color='yellow'/> */}
                        {/* </div> */}
                    </div>
                    <div className='row px-3 mb-4'>
                        <div className="line"/>
                            <small className="or text-center">OR</small>
                            <div className="line"/>
                    </div>
                    <form onSubmit={handleSubmit} method='post'>
                    <div className='row px-3'>
                        <input type='text' name='name' placeholder='Write Your Name' className ='mb-3' value={name} onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div className='row px-3'>
                        <input type='email' name='email' placeholder='Write Your Email' className ='mb-3' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div className='row px-3'>
                        <textarea type='text' name='msg' placeholder='Write Your Message' className ='mb-3' value={msg} onChange={(e)=>{setMsg(e.target.value)}}/>
                    </div>
                    <div className='row px-3'>
                        <button className='button' type='submit'>Send Message</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
        </Roll>
    {/* </div> */}
    </>
  )
}

export default Contact