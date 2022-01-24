let lastId = 3;

function Aula(title, desc) {
  this.id = lastId++;
  this.title = title;
  this.desc = desc;
}

export default Aula;
