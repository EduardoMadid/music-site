import React, { useState } from 'react';
import { NavStyle } from '../css/NavStyle';
import { Link } from 'react-router-dom';

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
                        <Link to="/"><h1 className="logo">Musicas</h1></Link>

                        <div className="hamburger" onClick={toggleMenu}>
                        </div>

                        <ul className={menuOpen ? 'active' : ''}>
                            <Link to="/" className="link">Home</Link>
                            <Link to="/produtos" className="link">Produtos</Link>
                            <Link to="/sobre" className="link">Sobre</Link>
                            <Link to="/contato" className="link">Contato</Link>
                        </ul>
                    </div>
                </header>
            </NavStyle>
        </>
    )
}
export default Nav