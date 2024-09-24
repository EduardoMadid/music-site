import React, { useState } from 'react';
import { NavStyle } from '../css/NavStyle';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <NavStyle>
                <header className="nav">
                    <div className="container">
                        <Link to="/"><img src={Logo} alt="Logo" className='logo'/></Link>
                        <h1 className='nome'>CITY SOUND</h1>

                        <div className="hamburger" onClick={toggleMenu}>
                            &#9776; 
                        </div>

                        <ul className={menuOpen ? 'active' : ''}>
                            <li><Link to="/" className="link">Home</Link></li>
                            <li><Link to="/musicas" className="link">Musicas</Link></li>
                            <li><Link to="/login" className="link">Login</Link></li>
                            
                        </ul>
                    </div>
                </header>
            </NavStyle>
        </>
    );
};

export default Nav;
