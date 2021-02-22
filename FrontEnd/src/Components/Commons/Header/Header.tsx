import React from 'react';
import Navbar from './Components/Navbar';
import uDevLogo from './Components/udevLogo.jpeg';
require('./header.scss')

export default function Header() {

    return (
        <div className="header">
            <img height={"100%"} src={uDevLogo} alt="Logo"/>
            <input type="checkbox" id="hamburger-toggle" />
            <label className="hamburger">
                <span className="bar"></span>
            </label>
            <Navbar />
        </div >
    )
}

