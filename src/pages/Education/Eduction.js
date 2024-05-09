import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUserGraduate } from "react-icons/fa";
import {  IoSchoolOutline } from "react-icons/io5";
import Zoom from 'react-reveal/Zoom';

const Eduction = () => {
  return (
    <>
    <Zoom left>
    <div className='container education' id="education">
        <h2 className="col-12 mt-3 mb-1 text-center">My Education Details</h2>
        <hr/>

<VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2018-2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoSchoolOutline />}>

    <h3 className="vertical-timeline-element-title" style = {{color:'white',fontWeight:'bold'}}>School</h3>
    <h4 className="vertical-timeline-element-subtitle" style = {{color:'white'}}>A-one School</h4>
    {/* <h4 className="vertical-timeline-element-subtitle" style = {{color:'white',paddingTop : '4px'}}>Nirman High School</h4> */}
    <p style = {{color:'white'}}>
      I have Completed My HSc Exams With 78% and SSc Exams with 85%
    </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#7FFF00', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #7FFF00' }}
    date="2021-2025"
    iconStyle={{ background: '#7FFF00', color: '#fff' }}
    icon={<FaUserGraduate />}>

    <h3 className="vertical-timeline-element-title" style = {{color:'white',fontWeight:'bold'}}>Pursuing Computer Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle" style = {{color:'white',paddingTop:'8px'}}>LJ University</h4>
    <p style = {{color:'white'}}>
      I have Completed My SEM-4 with 7.84 SPI
      and My PPI is 8.84 
    </p>
        </VerticalTimelineElement>
</VerticalTimeline>
    </div>
    </Zoom>
    </>
  )
}

export default Eduction