import React from 'react'

function Tarifs() {
    return (
        <div>
                     <table className="tarifs">
        <tr>
          <th>Tarifs</th>
          <th className="eveil"> Enfants</th>
          <th></th>
          <th className="baby-presPoussin">Ados-Adultes</th>
        </tr>
       


        <tr>
          <td>MMA</td>
          <td className="eveil">270€</td>
          <td></td>
          <td className="baby-presPoussin">305€</td>
        </tr>

        <tr>
          <td>Judo-JJB</td>
          <td className="eveil">270€</td>
          <td></td>
          <td className="baby-presPoussin">305€</td>
        </tr>

        <tr>
          <td>Grappling-Lutte</td>
          <td className="eveil">270€</td>
          <td></td>
          <td>pas de cours pour le moment</td>
        </tr>

        <tr>
          <td>Boxe Thaï</td>
          <td className="eveil">270€</td>
          <td></td>
          <td className="baby-presPoussin">305€</td>
        </tr>

        <tr>
          <td>Lady Boxing</td>
          <td></td>
          <td></td>
          <td className='boxe-lady'>255€</td>
        </tr>
      </table>
        </div>
    )
}

export default Tarifs
