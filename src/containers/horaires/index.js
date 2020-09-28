import React from "react";
import HorairesJudoJjb from "../../components/horaires-judo-jjb";
import "../../App.css";
import HorairesMma from "../../components/horaires-mma";
import Boxe from "../../components/horaires-boxe";

function Horiares() {
  return (
    <div>
      {/* Judo & JJB */}
      <HorairesJudoJjb />

      {/* MMA */}
      <HorairesMma />
      {/* Boxe */}
      <Boxe />
    </div>
  );
}

export default Horiares;
