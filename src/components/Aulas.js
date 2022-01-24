import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Aulas() {
  const aulas = useSelector((state) => state);
  return (
    <div>
      <Link to="addAula">
        <h5 id="addAula">Adicionar Aula</h5>
      </Link>
      <Outlet />
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
