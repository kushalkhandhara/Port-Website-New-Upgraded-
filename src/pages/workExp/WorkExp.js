import React from 'react'
import './WorkExp.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { FaUserGraduate } from "react-icons/fa";
// import {  IoSchoolOutline } from "react-icons/io5";
import Slide from 'react-reveal/Slide'
import { ImOffice } from "react-icons/im";

const WorkExp = () => {
  return (
    <>
    <Slide right>
    <div className="work" id="work">
        <div className="container work-exp">
            <h2 className="col-12 mt-3 mb-1 text-center">My Work Experience</h2>
            <hr/>
            <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Date_Name"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<ImOffice />}>

    <h3 className="vertical-timeline-element-title" style = {{color:'white',fontWeight:'bold'}}>Company_Name</h3>
    <h4 className="vertical-timeline-element-subtitle" style = {{color:'white'}}>Position_Name</h4>
    {/* <h4 className="vertical-timeline-element-subtitle" style = {{color:'white',paddingTop : '4px'}}>Nirman High School</h4> */}
    <p style = {{color:'white'}}>
      My Work Experiance 
    </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#7FFF00', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #7FFF00' }}
    date="Date_Name"
    iconStyle={{ background: '#7FFF00', color: '#fff' }}
    icon={<ImOffice />}>

    <h3 className="vertical-timeline-element-title" style = {{color:'white',fontWeight:'bold'}}>Company_Name</h3>
    <h4 className="vertical-timeline-element-subtitle" style = {{color:'white',paddingTop:'8px'}}>Position_Name</h4>
    <p style = {{color:'white'}}>
      My Work Experiance
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#FFFF3C', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid yellow' }}
    date="Date_Name"
    iconStyle={{ background: 'yellow', color: '#fff' }}
    icon={<ImOffice />}>

    <h3 className="vertical-timeline-element-title" style = {{color:'white',fontWeight:'bold'}}>Company_Name</h3>
    <h4 className="vertical-timeline-element-subtitle" style = {{color:'white'}}>Position_Name</h4>
    {/* <h4 className="vertical-timeline-element-subtitle" style = {{color:'white',paddingTop : '4px'}}>Nirman High School</h4> */}
    <p style = {{color:'white'}}>
      My Work Experiance 
    </p>
        </VerticalTimelineElement>
   
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'red', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  red' }}
    date="Date_Name"
    iconStyle={{ background: 'red', color: '#fff' }}
    icon={<ImOffice />}>

    <h3 className="vertical-timeline-element-title" style = {{color:'white',fontWeight:'bold'}}>Company_Name</h3>
    <h4 className="vertical-timeline-element-subtitle" style = {{color:'white',paddingTop:'8px'}}>Position_Name</h4>
    <p style = {{color:'white'}}>
      My Work Experiance
    </p>
        </VerticalTimelineElement>
</VerticalTimeline>
            
        </div>
    </div>
    </Slide>
    </>
  )
}

export default WorkExp