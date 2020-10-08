import React, {useState, useEffect} from "react";
import HorairesJudoJjb from "../../components/horaires-judo-jjb";
import "../../App.css";
import HorairesMma from "../../components/horaires-mma";
import Boxe from "../../components/horaires-boxe";
import HorairesGrappling from "../../components/horaires-grappling";

function Horiares() {
  const [isLoading, setIsLoading]=useState(true);

  useEffect(()=>{
    const fetchData = async()=>{
      setIsLoading(false);

    }
    fetchData();
  },[]);
  return (
    <div>

    {
      isLoading ? <p>En chargement...</p>:
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
    }
    </div>
  );
}

export default Horiares;
