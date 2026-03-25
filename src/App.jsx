import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";
import Parties from "./pages/Parties";
import PartyDetail from "./pages/PartyDetail";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Personnages</Link> | 
        <Link to="/parties">Groupes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/parties" element={<Parties />} />
        <Route path="/parties/:id" element={<PartyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;