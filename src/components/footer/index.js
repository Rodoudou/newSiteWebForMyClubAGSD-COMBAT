import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faTwitter} from "@fortawesome/free-brands-svg-icons";

function Footer() {

  const handleClickFaceBook = () => {
    window.location = "https://www.facebook.com/agsdcombat";
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
      <p>Create by Redouane Amrani with react</p>
    <div className="socialIcon" >
    <FontAwesomeIcon onClick={handleClickFaceBook} icon={faFacebook} />
      <FontAwesomeIcon onClick={handleClickInstagram} icon={faInstagram} />
      <FontAwesomeIcon onClick={handleClickTwitter} icon={faTwitter} />
      <FontAwesomeIcon onClick={handleClickYoutube} icon={faYoutube} />
    </div>
    </footer>
  );
}

export default Footer;
