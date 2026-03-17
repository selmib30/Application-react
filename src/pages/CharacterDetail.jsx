import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    api.get(`/characters/${id}`)
      .then(res => setCharacter(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} width="150" alt={character.name} />
      <p>Class: {character.characterClass?.name}</p>
      <p>Race: {character.race?.name}</p>
      <p>Level: {character.level}</p>
      <p>HP: {character.healthPoints}</p>

      <h3>Stats</h3>
      <p>STR: {character.strength}</p>
      <p>DEX: {character.dexterity}</p>
      <p>CON: {character.constitution}</p>
      <p>INT: {character.intelligence}</p>
      <p>WIS: {character.wisdom}</p>
      <p>CHA: {character.charisma}</p>
    </div>
  );
}

export default CharacterDetail;