import React from 'react'
import {Link} from "react-router-dom";
function Menu() {
    return (
        <menu>
            <input type="checkbox" id="check" />
            <label className="voir-menu" htmlFor="check">
                <i className="fas fa-bars"></i>
            </label>
            <ul className="menu">
                <li><Link className="on" to="/">Accueil</Link></li>
                <li><a href="horaires.html">Horaires</a></li>
                <li><a href="inscription.html">Inscription</a></li>
                <li><Link to="/contact">Contact</Link></li>
                <label className="cacher-menu" htmlFor="check">
                    <i className="fas fa-times"></i>
                </label>
            </ul>
        </menu>

    )
}

export default Menu
