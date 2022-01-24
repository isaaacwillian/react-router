import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function useAula(aulas) {
  const id = Number(useParams().id);
  return aulas.filter((aula) => aula.id === id)[0];
}

function Aula(props) {
  const aulas = useSelector((state) => state);
  const aula = useAula(aulas);

  return (
    <div className="aula">
      <h1>{aula.title}</h1>
      <h3>{aula.desc}</h3>
    </div>
  );
}

export default Aula;
