import React from "react";
import Article from "../../components/article";
import Map from '../../components/map';
import "../../App.css"

function Home() {
  return (
    <div className="app">

      <section>
        <Article />
       <Map/>
      </section>

    </div>
  );
}

export default Home;
