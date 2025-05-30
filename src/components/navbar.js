import React, { useState, useCallback } from 'react';
import "./navbar.css";
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
    const closeMobileMenu = useCallback(() => setClick(false), []);
    
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

    const scrollWithOffset = useCallback((el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; // Adjust this value based on your header height
        window.scrollTo({ 
            top: yCoordinate + yOffset, 
            behavior: 'smooth'
        });
    }, []);

    return (
        <Headroom>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <HashLink 
                        smooth 
                        to='/#aboutme' 
                        className='navbar-logo'
                        scroll={scrollWithOffset}
                        onClick={closeMobileMenu}
                    >
                        It's me
                    </HashLink>
                    
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {NAVIGATION_ITEMS.map(item => (
                            <li key={item.id} className='nav-item'>
                                <HashLink 
                                    smooth 
                                    to={`/#${item.id}`}
                                    className={`nav-links ${isHomePage && activeSection === item.id ? 'nav-links--active' : ''}`}
                                    onClick={closeMobileMenu}
                                    scroll={scrollWithOffset}
                                >
                                    {item.label}
                                </HashLink>
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
                            {dropdown && <Dropdown onClose={() => setDropdown(false)} />}
                        </li>
                    </ul>
                </div>
            </nav>
        </Headroom>
    );
}

export default Navbar;