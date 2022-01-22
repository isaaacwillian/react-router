import aulas from "../data";
import { Link } from "react-router-dom";

export default function Aulas() {
  return (
    <div>
      <ul id="aula">
        {aulas.map((aula) => {
          return (
            <li key={aula.id}>
              <Link to={`${aula.id}`}>{aula.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
