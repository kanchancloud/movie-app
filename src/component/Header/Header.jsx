import React from 'react';
import './Header.css'
// import '../../App.css';

function Header() {
    return (
        <span onClick={() => window.scroll(0, 0)} className="Header">🎬 enjoy movie 📽️</span>
    );
}

export default Header;