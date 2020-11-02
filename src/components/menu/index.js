import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faTwitter} from "@fortawesome/free-brands-svg-icons";
function Menu({handleClickFaceBook, handleClickInstagram,handleClickTwitter, handleClickYoutube}) {
  return (
    <menu>
      <input type="checkbox" id="check" />
      <label className="voir-menu" htmlFor="check">
        <i className="fas fa-bars" ></i>
      </label>
      <ul className="menu">
        <div className="menu-content" style={{ display: "flex"}}>
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
          <div className="socialIcon" style={{ marginLeft: 90}}>
      <FontAwesomeIcon onClick={handleClickFaceBook} icon={faFacebook} />
      <FontAwesomeIcon onClick={handleClickInstagram} icon={faInstagram} />
      <FontAwesomeIcon onClick={handleClickTwitter} icon={faTwitter} />
      <FontAwesomeIcon onClick={handleClickYoutube} icon={faYoutube} />
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
