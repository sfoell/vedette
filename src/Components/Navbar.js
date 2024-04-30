import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleLinkClick = () => {
        setShowMenu(false); // Close the menu after a link is clicked
    };

    return (
        <div className='navbar'>
            <Link className='banner-link' to='/solution'>Google Vedette</Link>
            <div className='menu' onClick={() => {
                setShowMenu(!showMenu);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* <div className='primary-links' > */}
            <div className={`primary-links ${showMenu ? 'show' : ''}`}>
                <Link className='nav-link' to='/solution' onClick={handleLinkClick}>Solution</Link>
                <Link className='nav-link' to='/team' onClick={handleLinkClick}>Team</Link>
                <Link className='nav-link' to='/milestones' onClick={handleLinkClick}>Milestones</Link>
                <a className='primary-button nav-button-mods' href="https://www.youtube.com/watch?v=1VPCImR1Py8" target="_blank" rel="noopener noreferrer">VIEW DEMO</a>
            </div>
        </div>
        // <div>
        //     <div>
        //         <Link className='banner-link' to='/solution'>Google Vedette</Link>
        //     </div>
        //     <div className='navbar'>
        //         <div className='menu' onClick={() => {
        //             setShowMenu(!showMenu);
        //         }}>
        //             <span></span>
        //             <span></span>
        //             <span></span>
        //         </div>
        //         {/* <div className='primary-links' > */}
        //         <div className={`primary-links ${showMenu ? 'show' : ''}`}>
        //             <Link className='nav-link' to='/solution' onClick={handleLinkClick}>Solution</Link>
        //             <Link className='nav-link' to='/team' onClick={handleLinkClick}>Team</Link>
        //             <Link className='nav-link' to='/milestones' onClick={handleLinkClick}>Milestones</Link>
        //             <a className='primary-button nav-button-mods' href="https://www.youtube.com/watch?v=1VPCImR1Py8" target="_blank" rel="noopener noreferrer">VIEW DEMO</a>
        //         </div>
        //     </div>
        // </div>

    )
}