import "./App.css";
import Aulas from "./components/Aulas";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Sobre from "./components/Sobre";
import Aula from "./components/Aula";
import { createStore } from "redux";
import aulasReducer from "./reducers/aulasReducer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AulaAdd from "./components/AulaAdd";
import { Provider } from "react-redux";
import data from "./data";
import { useSelector } from "react-redux";

const store = createStore(aulasReducer);
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sobre" element={<Sobre />} />

            <Route path="aulas" element={<Aulas />}>
              <Route path="addAula" element={<AulaAdd />} />
            </Route>
            <Route path="/aulas/:id" element={<Aula />} />
          </Routes>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
