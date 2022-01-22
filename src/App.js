import "./App.css";
import Aulas from "./components/Aulas";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Sobre from "./components/Sobre";
import Aula from "./components/Aula";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aulas" element={<Aulas />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="/aulas/:id" element={<Aula />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
