import React from 'react'
import logo from './images/dn_logo.png'
import "./header.css"

export default function Header() {
    //Retorno:
    return (
        <div className="header">
            <div className="header__menu">
                <a href="/" className="header__menu__logo"><img src={logo} alt="logo"/></a>
                <div className="header__nav">
                    <nav>
                        <a href="https://github.com/Faydiamond">Quines Somos</a>
                        <a href="/#Home">Peliculas</a>
                        <a href="/contacto">Contactenos</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
