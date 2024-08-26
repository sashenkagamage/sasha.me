import React from 'react'
import './project.css'
import Footer from '../Footer'
import CardsCmb from './CardsCmb';
function Escapades1(){
    return(
        <>
        <div className='container'>
            <div className ='content'>
                <div className='escapades'>
                <div>
                <div className='head-1'><h1>POV: It's Summer'23 and you're in Cambridge</h1></div>
                <div className='escapades-text'>
                <p>Living at <a href="https://www.girton.cam.ac.uk/" target="_blank" rel="noreferrer">Girton College, University of Cambridge</a> was like being in a cozy suburban community, surrounded by lush greenery, beautiful flowers, and even apple orchards. 
                    It was such a refreshing change from the hustle and bustle of university life in Hong Kong. </p>
                <p>Walking down the Orchard, picking rusty red apples, celebrating at Social Hub with a mint choc frappe, 
                    and punting on the river cam while humming country songs – things that you would imagine to happen in an old English film.</p>
                <p>I had to complete three modules including Quantum Technologies, Jet Engines, and Nanotechnology.  
                    The classes started with Jet Engines, taught by Dr Teng Cao, a lecturer at Imperial College of London. </p>
                <p>Also, got a chance to see the Whittle Lab, the birthplace of modern jet engines, and moved to Nanotechnology which was taught by Professor Hannah Joyce. </p>
                <p>The last adventure was Quantum Technologies with Professor Christopher Ford. He helped us navigate the mysteries of quantum mechanics, shedding light on the differences between quantum and classical theories. 
                    It all wrapped up with intriguing individual presentations.</p>
                </div>
                </div>
                
                <img src='/image-cmb.jpeg' className='wrapper' alt=""/>
                </div>
        </div>
        </div>
     
            <CardsCmb/>
         
        <Footer/>
        </>
    )
}
export default Escapades1;
