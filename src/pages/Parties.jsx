import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function Parties() {
  const [parties, setParties] = useState([]);

  useEffect(() => {
    api.get("/parties").then(res => setParties(res.data));
  }, []);

  return (
    <div>
      <h1>Parties</h1>

      {parties.map(p => (
        <Link key={p.id} to={`/parties/${p.id}`}>
          <div>
            <h3>{p.name}</h3>
            <p>{p.members.length} / {p.maxSize}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Parties;