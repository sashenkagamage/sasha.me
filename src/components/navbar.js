
import React, {useState} from 'react';

import "./navbar.css";
import Headroom from 'react-headroom';
function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false); 
    return (
    <>
    <Headroom>
    <nav className='navbar'>
        <div className='navbar-container'>
                    <a href ='/#main' className='navbar-logo' onClick={closeMobileMenu}>
                        Sasha
                    </a>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div> 
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <a href = '/#aboutme' className='nav-links' onClick={closeMobileMenu}>
                        About Me 
                   </a>  
                </li>
              
                <li className='nav-item'>
                    <a href = '/#experiences' className='nav-links' onClick={closeMobileMenu}>
                       Experiences 
                    </a>
                </li>
                <li className='nav-item'>
                    <a href = '/#projects' className='nav-links' onClick={closeMobileMenu}>
                        Projects
                    </a>
                </li>
                <li className='nav-item '>
                    <a href = '/#music' className='nav-links' onClick={closeMobileMenu}>
                        Music
                    </a>
                </li>
                <li className='nav-item'>
                    <a href = '/#awards' className='nav-links' onClick={closeMobileMenu}>
                        Awards 
                   </a>
                </li>
                

            </ul>
        </div>
    </nav>
    </Headroom>
    
    </>
    );
}

export default Navbar;