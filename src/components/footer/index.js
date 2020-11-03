import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {

  const handleClickFaceBook = () => {
    window.location = "https://www.facebook.com/agsdcombat";
  };

  const handleClickFaceBookids = () => {
    window.location = "https://www.facebook.com/agsdcombatenfants/";
  };

  const handleClickInstagram = () => {
    window.location = "https://www.instagram.com/agsdcombat";
  };

  const handleClickTwitter = () => {
    window.location = "https://twitter.com/CombatAgsd";
  };

  const handleClickYoutube = () => {
    window.location =
      "https://www.youtube.com/channel/UCDUTivMSGwXPmzMIGMwgWUA";
  };
  return (
    <footer>
    <div className="footer">
      <p>Create by Redouane Amrani with react</p>
      <div className="socialIcon">
        <FontAwesomeIcon onClick={handleClickFaceBook} icon={faFacebook} />
        <FontAwesomeIcon onClick={handleClickInstagram} icon={faInstagram} />
        <FontAwesomeIcon onClick={handleClickTwitter} icon={faTwitter} />
        <FontAwesomeIcon onClick={handleClickYoutube} icon={faYoutube} />
      </div>
    </div>

      <div className="pageFacebook">
        <div className="pageAdultes">
          <h1 onClick={handleClickFaceBook}>AGSD COMBAT</h1>
          <div
            class="fb-page"
            data-href="https://www.facebook.com/agsdcombat/"
            data-tabs="timeline"
            data-width=""
            data-height="130"
            data-small-header="false"
            data-adapt-container-width="false"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/agsdcombat/"
              class="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/agsdcombat/">
                AGSD Combat Saint-Denis Judo Jiu-jitsu Bresilien Boxe Mixed
                Martial Arts
              </a>
            </blockquote>
          </div>
        </div>

        <div className="pageEnfants">
        <h1 onClick={handleClickFaceBookids}>AGSD COMBAT Enfants</h1>
          <div
            class="fb-page"
            data-href="https://www.facebook.com/agsdcombatenfants"
            data-tabs="timeline"
            data-width=""
            data-height="130"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/agsdcombatenfants"
              class="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/agsdcombatenfants">
                AGSD Combat Enfants Saint Denis Judo Jiu Jitsu Bresilien
              </a>
            </blockquote>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
