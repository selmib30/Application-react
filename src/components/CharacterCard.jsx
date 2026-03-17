function CharacterCard({ character }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <img src={character.image} alt="" width="100" />
      <h3>{character.name}</h3>
      <p>{character.characterClass?.name}</p>
      <p>{character.race?.name}</p>
      <p>Level: {character.level}</p>
    </div>
  );
}

export default CharacterCard;