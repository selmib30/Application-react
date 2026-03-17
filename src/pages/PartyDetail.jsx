import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function PartyDetail() {
  const { id } = useParams();
  const [party, setParty] = useState(null);

  useEffect(() => {
    api.get(`/parties/${id}`).then(res => setParty(res.data));
  }, [id]);

  if (!party) return <p>Loading...</p>;

  return (
    <div>
      <h1>{party.name}</h1>
      <p>{party.description}</p>

      <h3>Members</h3>
      {party.members.map(m => (
        <p key={m.id}>{m.name}</p>
      ))}
    </div>
  );
}

export default PartyDetail;