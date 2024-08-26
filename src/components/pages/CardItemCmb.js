import React from 'react';
import { Link } from 'react-router-dom';
import './CardsCmb.css';

function CardItemCmb(props) {
    return (
      <>
        <li className='cards__item_cmb'>
          <Link className='cards__item__link_cmb' to = {props.path}>
            <figure className='cards__item__pic-wrap_cmb' >
              <img
                className='cards__item__img_cmb'
                alt='Travel'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info_cmb'>
              <h7 className='cards__item__text_cmb'>{props.text}</h7>
              
            </div>
          </Link>
        </li>
      </>
    );
  }

export default CardItemCmb;
