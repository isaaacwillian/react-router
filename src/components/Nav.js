import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h1>
        <Link to="/">Isaac</Link>
      </h1>
      <ul>
        <li>
          <Link to="/aulas">Aulas</Link>
        </li>
        <li className="link">
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
