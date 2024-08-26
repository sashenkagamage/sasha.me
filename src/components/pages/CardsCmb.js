import React from 'react';
import './CardsCmb.css'
import CardItemCmb from './CardItemCmb';
function CardsCmb() {
    return (
      <div> 
      <div className='cards_cmb'>
        <h1>Chronicles</h1>
        <div className='cards__container'>
          <div className='cards__wrapper_cmb'>
            <ul className='cards__items_cmb'>
               <CardItemCmb
                src='./images-cmb2.jpeg'
                text='Louise and I'
                path = '' 
              />
              <CardItemCmb
                src='./images-cmb3.jpeg'
                text='Selfie Hunt'
                path = '' 
              />
            <CardItemCmb
                src='./images-cmb4.jpeg'
                text="Authur's Seat"
                path = '' 
              />
              
              
            </ul>
            <ul className='cards__items_cmb'>
               <CardItemCmb
                src='./images-cmb5.jpeg'
                text='Street in Edinburgh'
                path = ''
              />
              <CardItemCmb
                src='./images-cmb6.jpeg'
                text='Whittle Lab'
                path = '' 
              />
            <CardItemCmb
                src='./images-cmb7.jpeg'
                text='I swear I did not drink'
                path = ''
              />
              
              
            </ul>
            <ul className='cards__items_cmb_1'>
               <CardItemCmb
                src='./images-cmb8.png'
                text='The most beautiful college I have ever seen'
                path = ''
            />
              
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }

export default CardsCmb;
