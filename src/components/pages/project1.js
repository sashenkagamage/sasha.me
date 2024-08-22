import React from 'react'
import './project.css'

import Footer from '../Footer'; 
function Project1(){
    return(
        <>
        <div className='container'>
            <div className ='content'>
                <div className='project'>
                <div>
                <h1>Drone Control and Navigation in Smart Manufacturing</h1>
                <div className='project-text'>
                    <p>
                The integration of drones in smart manufacturing has emerged as a promising paradigm for enhancing operational efficiency, automation, and process optimization. This research explores the topic of drone control and navigation management in smart manufacturing environments to enhance operational efficiency and automation. The research mainly focuses on drone controlling and computer-based navigation. I am conducting the research under the supervision of Dr. Pai Zheng. </p>
               <p> During the research, I examine the trending smart manufacturing technologies and gain fundamental knowledge of Unmanned aerial vehicle (UAV) controlling and Navigation systems. Then the research further discusses the algorithms and methods of implementing precise drone control. Lastly, the research focuses on navigating the drone in complex manufacturing environments. The findings of this study provide valuable insights into the benefits, challenges, and best practices associated with incorporating drones in smart manufacturing environments. The research outcomes can assist manufacturing companies in making informed decisions about adopting and implementing drone systems, ultimately driving increased efficiency, safety, and competitiveness in the evolving landscape of modern manufacturing.</p>

                </div>
                </div>
                
                <img src='/image-8.png' className='wrapper' alt=""/>
                </div>
        </div>
        </div>
        <div className='container'>
              <div className='content2'>
              <div className='project'>
                <img src='/image-8.png' className='wrapper' alt=""/>
                <div>
                <h1>Skills</h1>
                <div className='project-text'>
                
                </div>
                </div>
                </div>
              </div>
            </div>
        <Footer/>
        </>
    )
}
export default Project1;