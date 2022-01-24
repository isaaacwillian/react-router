import aulas from "../data";

const aulasReducer = (state = aulas, action) => {
  switch (action.type) {
    case "ADD_AULA":
      return [...state, action.payload];
      break;

    default:
      return state;
  }
};

export default aulasReducer;
