import React, { useState, useEffect } from "react";
import Article from "../../components/article";
// import Map from "../../components/map";
import "../../App.css";


function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
    <div className="row">
    <div className="app">
      {isLoading ? (
        <p>En chargement...</p>
      ) : (
        <section>
          <Article />
          {/* <Map /> */}
        </section>
      )}
    </div>
    </div>
</div>
  );
}

export default Home;
