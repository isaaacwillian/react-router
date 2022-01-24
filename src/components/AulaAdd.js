import React from "react";
import { useDispatch } from "react-redux";
import { addAula } from "../actions/aulasAction";

export default function AulaAdd() {
  const dispatch = useDispatch();

  function addAulaEvent() {
    let title = document.getElementById("aulaTitle");
    let desc = document.getElementById("aulaDesc");

    dispatch(addAula(title.value, desc.value));
    title.value = "";
    desc.value = "";
  }

  return (
    <div id="aulaAdd">
      <h3 id="aulaH3">Adicionar Aula</h3>
      <input id="aulaTitle" type="text" placeholder="Título" />
      <input id="aulaDesc" type="text" placeholder="Descrição" />
      <button onClick={addAulaEvent} id="aulaButton">
        Add
      </button>
    </div>
  );
}
