import React, { useState, useEffect } from "react";

function Tarifs() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
    <>
    {
      isLoading ? <p>En chargement...</p> :
      <table className="tarifs">
      <thead>
        <tr>
          <th>Tarifs</th>
          <th className="eveil"> Enfants</th>
          <th className="baby-presPoussin">Ados-Adultes</th>
        </tr>
      </thead>

<tbody>
        <tr>
          <td>MMA</td>
          <td className="eveil">270€</td>
          <td className="baby-presPoussin">305€</td>
        </tr>

        <tr>
          <td>Judo-JJB</td>
          <td className="eveil">270€</td>
          <td className="baby-presPoussin">305€</td>
        </tr>

        <tr>
          <td>Grappling-Lutte</td>
          <td className="eveil">270€</td>
          <td>pas de cours pour le moment</td>
        </tr>

        <tr>
          <td>Boxe Thaï</td>
          <td className="eveil">270€</td>
          <td className="baby-presPoussin">305€</td>
        </tr>

        <tr>
          <td>Lady Boxing</td>
          <td>pas de cours pour le moment</td>
          <td className="boxe-lady">255€</td>
        </tr>
</tbody>
      </table>
    }
    </>
    </div>
  );
}

export default Tarifs;
