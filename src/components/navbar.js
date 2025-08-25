import React, { useState, useCallback } from 'react';
import "./navbar.css";
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Headroom from 'react-headroom';
import Dropdown from './Dropdown';
import useScrollSpy from '../hooks/useScrollSpy';

const NAVIGATION_ITEMS = [
    { id: 'aboutme', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'projects', label: 'Projects' },
    { id: 'music', label: 'Music' },
    { id: 'awards', label: 'Awards' }
];

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const location = useLocation();
    
    // Only enable scroll spy on home page
    const isHomePage = location.pathname === '/';
    const activeSection = useScrollSpy(
        isHomePage ? NAVIGATION_ITEMS.map(item => item.id) : [],
        100
    );

    const handleClick = useCallback(() => setClick(prev => !prev), []);
    
    const closeMobileMenu = useCallback(() => {
        setClick(false);
        // Check if we're in mobile view
        if (window.innerWidth < 960) {
            // Scroll to top with smooth behavior
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, []);
    
    const onMouseEnter = useCallback(() => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }, []);
    
    const onMouseLeave = useCallback(() => {
        setDropdown(false);
    }, []);

    return (
        <Headroom>
            <nav className='navbar'>
                <div className='navbar-container'>
     
                    
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {NAVIGATION_ITEMS.map(item => (
                            <li key={item.id} className='nav-item'>
                                {isHomePage ? (
                                    <ScrollLink 
                                        to={item.id}
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={500}
                                        className={`nav-links ${isHomePage && activeSection === item.id ? 'nav-links--active' : ''}`}
                                        onClick={closeMobileMenu}
                                    >
                                        {item.label}
                                    </ScrollLink>
                                ) : (
                                    <Link 
                                        to={`/#${item.id}`}
                                        className='nav-links'
                                        onClick={closeMobileMenu}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                        
                        <li 
                            className='nav-item'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <div 
                                className='nav-links'
                                onClick={() => {
                                    if (window.innerWidth < 960) {
                                        setDropdown(!dropdown);
                                    }
                                }}
                            >
                                Escapades <i className='fas fa-caret-down' />
                            </div>
                            {dropdown && <Dropdown onClose={() => setDropdown(false)} closeMobileMenu={closeMobileMenu} />}
                        </li>
                    </ul>
                </div>
            </nav>
        </Headroom>
    );
}

export default Navbar;