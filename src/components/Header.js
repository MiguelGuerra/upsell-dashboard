import React from 'react'
import './Header.css';
import UpsellGuruLogo from '../assets/img/upsellguru-logo.png';

function Header() {
    return (
        <header className="smooth-shadow">
            <div className="logo container">
                <img src={UpsellGuruLogo} alt="upsellguru-logo" />
            </div>
        </header>
    )
}

export default Header
