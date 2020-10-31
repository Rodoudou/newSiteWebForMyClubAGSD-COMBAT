import React from "react";
import logo from "../../assets/img/logo.jpg";


function Nav() {
  return (
    <nav>
       <img src={logo} alt="logo"/>


        <div className="nav-content">
              <h2>AGSD COMBAT Saint-Denis (93)</h2>
              <p>
                Sports de combats pour les adultes et les enfants à partir de 3 ans sur
                la ville de Saint-Denis 93200
              </p>
        </div>
        <div style={{width:'25%'}}></div>

    </nav>
  );
}

export default Nav;
