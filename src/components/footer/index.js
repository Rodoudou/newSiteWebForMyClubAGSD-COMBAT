import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer({handleClickFaceBook, handleClickInstagram, handleClickYoutube}) {

  return (
    <footer>
      <p>Create by Redouane Amrani with react</p>
    <div className="socialIcon" >
    <FontAwesomeIcon onClick={handleClickFaceBook} icon={faFacebook} />
      <FontAwesomeIcon onClick={handleClickInstagram} icon={faInstagram} />
      <FontAwesomeIcon onClick={handleClickYoutube} icon={faYoutube} />
    </div>
    </footer>
  );
}

export default Footer;
