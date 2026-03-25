import { useEffect, useState } from "react";
import api from "../services/api";
import CharacterCard from "../components/CharacterCard";
import { Link } from "react-router-dom";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api.get("/characters")
      .then(res => {
        setCharacters(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement des données</p>;

  const filtered = characters.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "level") return a.level - b.level;
  });

  return (
    <div>
      <h1>Personnages</h1>

      <input
        placeholder="Recherche"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="name">Trier par nom</option>
        <option value="level">Trier par niveau</option>
      </select>

      {sorted.map(char => (
        <Link key={char.id} to={`/characters/${char.id}`}>
          <CharacterCard character={char} />
        </Link>
      ))}
    </div>
  );
}

export default Characters;