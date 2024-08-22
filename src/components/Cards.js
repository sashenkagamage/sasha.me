import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
      <div> 
      <div className='cards'>
        <h1>Projects</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
               <CardItem
                src='./sasha.me/image-URIS.png'
                text='Undergraduate Innovation and Research Scheme: Drone Control and Navigation Management in Smart 
                Manufacturing'
                path = '/' //project1
              />
              <CardItem
                src='./sasha.me/image-PCB.png'
                text='PCB Designing Projects: LED Torch and Breadboard Power Supply, designed using KiCad 7.0'
                path = 'https://github.com/sashenkagamage/PCB_Projects' //project2
              />
            <CardItem
                src='./sasha.me/image-Fintrust.png'
                text='FinTrust: API Service to protect your money in real-time from fraudsters using AI and ML algorithms.'
                path = 'https://fintrusthk.netlify.app/home' //project3
              />
              
              
            </ul>
            <ul className='cards__items'>
               <CardItem
                src='./sasha.me/image-GoPark.png'
                text='GoPark: Users can find the closest parking spot through the mobile application.'
                path = 'https://hello-gopark.github.io/' //project1
              />
              <CardItem
                src='./sasha.me/image-3.jpg'
                text='CLP Generator Inspection Robot : Fabricate a robust inspection robot to examine the generator health without removing the rotor'
                path = '/' //project2
              />
            <CardItem
                src='./sasha.me/image-1.jpg'
                text='Bera Tiles: Mobile Application includes Sri Lankan traditional drums'
                path = '/' //project3
              />
              
              
            </ul>
            <ul className='cards__items'>
            
              
              
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }

export default Cards;
