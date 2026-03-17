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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const filtered = characters.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "level") return a.level - b.level;
  });

  return (
    <div>
      <h1>Characters</h1>

      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="name">Sort by name</option>
        <option value="level">Sort by level</option>
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