
import React, {useState} from 'react';
import "./navbar.css";
import { HashLink } from 'react-router-hash-link';
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
        <HashLink smooth to ='/#aboutme' className='navbar-logo' onClick={closeMobileMenu}>
                        Sasha
                    </HashLink>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div> 
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <HashLink smooth to= '/#aboutme' className='nav-links' onClick={closeMobileMenu}>
                        About Me 
                   </HashLink>  
                </li>
              
                <li className='nav-item'>
                    <HashLink smooth to = '/#experiences' className='nav-links' onClick={closeMobileMenu}>
                       Experiences 
                    </HashLink>
                </li>
                <li className='nav-item'>
                    <HashLink smooth to = '/#projects' className='nav-links' onClick={closeMobileMenu}>
                        Projects
                    </HashLink>
                </li>
                <li className='nav-item '>
                    <HashLink smooth to = '/#music' className='nav-links' onClick={closeMobileMenu}>
                        Music
                    </HashLink>
                </li>
                <li className='nav-item'>
                    <HashLink smooth to = '/#awards' className='nav-links' onClick={closeMobileMenu}>
                        Awards 
                   </HashLink>
                </li>
                

            </ul>
        </div>
    </nav>
    </Headroom>
    
    </>
    );
}

export default Navbar;