import aulas from "../data";

export default function Aulas() {
  return (
    <div>
      <ul id="aula">
        {aulas.map((aula) => {
          return <li key={aula.id}>{aula.title}</li>;
        })}
      </ul>
    </div>
  );
}
