import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function Parties() {
  const [parties, setParties] = useState([]);

  useEffect(() => {
    // Ajout de /v1 pour correspondre au ApiPartyController
    api.get("/parties").then(res => setParties(res.data));
  }, []);

  // Correction de la condition (voir note plus bas)
  if (!parties || parties.length === 0) return <p>Aucun groupe trouvé ou chargement...</p>;

  return (
    <div>
      <h1>Parties</h1>
      {parties.map(p => (
        <Link key={p.id} to={`/parties/${p.id}`}>
          <div>
            <h3>{p.name}</h3>
            {/* CHANGEMENT ICI : p.characters au lieu de p.members */}
            <p>{p.characters.length} / {p.maxSize}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Parties;