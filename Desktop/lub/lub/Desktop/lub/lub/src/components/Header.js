import React from 'react';
import './Header.css'

function Header() {
    return (
    <div className="container">
        <div className="Header">
            <div className="items">
                <a href="#stack">STACK</a>
                <a href="#project">PROJETOS</a>
                <a href="#">EXPERIÊNCIA</a>
                <a href="#">CONTATO</a>
            </div>
        </div>
    </div>
    );
}

export default Header;