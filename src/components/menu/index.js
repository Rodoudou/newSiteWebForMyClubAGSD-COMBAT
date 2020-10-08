import React from "react";
import { NavLink, Link } from "react-router-dom";
function Menu() {
  return (
    <menu>
      <input type="checkbox" id="check" />
      <label className="voir-menu" htmlFor="check">
        <i className="fas fa-bars"></i>
      </label>
      <ul className="menu">
        <div style={{ display: "flex" }}>
          <div>
            <li>
              <NavLink activeClassName="active" to="/">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="horaires">
                Horaires
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/tarifs">
                Tarifs
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="inscription">
                Inscription
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </li>
          </div>
          <div style={{ marginLeft: 25 }}>
            <Link to="/public" style={{ margin: 10 }}>
              Public
            </Link>
            <Link to="/private">Private</Link>
          </div>
        </div>
        <label className="cacher-menu" htmlFor="check">
          <i className="fas fa-times"></i>
        </label>
      </ul>
    </menu>
  );
}

export default Menu;
