import React from "react";
import HorairesJudoJjb from "../../components/horaires-judo-jjb";
import "../../App.css";
import HorairesMma from "../../components/horaires-mma";
import Boxe from "../../components/horaires-boxe";
import HorairesGrappling from "../../components/horaires-grappling";

function Horiares() {
  return (
    <div>
      {/* Judo & JJB */}
      <HorairesJudoJjb />
      {/* Grappling */}
    <HorairesGrappling/>
      {/* MMA */}
      <HorairesMma />
      {/* Boxe */}
      <Boxe />
    </div>
  );
}

export default Horiares;
