import { useParams } from "react-router-dom";
import aulas from "../data";

function useAula() {
  const id = Number(useParams().id);
  return aulas.filter((aula) => aula.id === id)[0];
}

function Aula(props) {
  const aula = useAula();

  return (
    <div className="aula">
      <h1>{aula.title}</h1>
      <h3>{aula.desc}</h3>
    </div>
  );
}

export default Aula;
