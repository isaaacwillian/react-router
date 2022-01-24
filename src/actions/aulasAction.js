import Aula from "../components/newAula";

export function addAula(title, desc) {
  const aula = new Aula(title, desc);
  return { type: "ADD_AULA", payload: aula };
}
