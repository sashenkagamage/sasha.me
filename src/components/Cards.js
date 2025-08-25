import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
      <div> 
      <div className='cards'>
        <h1>Projects</h1>
        <div className="location">
         <a href='https://github.com/sashenkagamage'><p> Check my GitHub for more!</p></a>  
                </div>
        <div className='cards__container'>
          <div className='cards__wrapper'>
          <ul className='cards__items'>
               <CardItem
                src='./image-weeblebot.jpeg'
                text='Weeblebot: Autonomous Navigation for Self-Balancing Robot using ROS2 and Nav2.'
                path='https://github.com/sashenkagamage/weeblebot'
              />
              <CardItem
                src='./image-robotics.jpg'
                text='Mobile Robot Control using PS5 Controller and using YOLOv11 for object detection.'
                path='https://youtu.be/rHBzTDEv09U'
              />
            </ul>
            <ul className='cards__items'>
               <CardItem
                src='./image-URIS.png'
                text='Undergraduate Innovation and Research Scheme: Drone Control and Navigation Management in Smart Manufacturing.'
                path = '/' //project1
              />
              <CardItem
                src='./image-PCB.png'
                text='PCB Designing Projects: LED Torch and Breadboard Power Supply, designed using KiCad 7.0.'
                path = 'https://github.com/sashenkagamage/PCB_Projects' //project2
              />

              
              
            </ul>
            <ul className='cards__items'>
               <CardItem
                src='./image-GoPark.png'
                text='GoPark: Users can find the closest parking spot through the mobile application.'
                path = 'https://hello-gopark.github.io/' //project1
              />
              <CardItem
                src='./image-3.jpg'
                text='CLP Generator Inspection Robot : Fabricate a robust inspection robot to examine the generator health without removing the rotor.'
                path = '/' //project2
              />
            <CardItem
                src='./image-1.jpg'
                text='Bera Tiles: Mobile Application includes Sri Lankan traditional drums.'
                path = '/' //project3
              />
              
              
            </ul>
    
          </div>
        </div>
      </div>
      </div>
    );
  }

export default Cards;
