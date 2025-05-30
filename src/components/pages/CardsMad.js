import React from 'react';
import './CardsCmb.css' // We can reuse the same CSS
import CardItemCmb from './CardItemCmb';

function CardsMad() {
    return (
      <div> 
      <div className='cards_cmb'>
        <h1>Chronicles</h1>
        <div className='cards__container'>
          <div className='cards__wrapper_cmb'>
            <ul className='cards__items_cmb'>
               <CardItemCmb
                src='./images-mad1.JPEG'
                text='Badger Game Day'
                path='' 
              />
              <CardItemCmb
                src='./images-mad2.JPEG'
                text='With String Orchestra Conductors'
                path='' 
              />
              <CardItemCmb
                src='./images-mad3.JPEG'
                text='Campus in Winter'
                path='' 
              />
            </ul>
            
            <ul className='cards__items_cmb'>
               <CardItemCmb
                src='./images-mad4.JPEG'
                text='Undergraduate Symposium'
                path=''
              />
              <CardItemCmb
                src='./images-mad5.JPEG'
                text='Robotics Final Project'
                path='' 
              />
              <CardItemCmb
                src='./images-mad6.JPEG'
                text='Lake Mendota at Night'
                path=''
              />
            </ul>

          
          </div>
        </div>
      </div>
      </div>
    );
}

export default CardsMad; 