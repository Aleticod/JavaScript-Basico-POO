/* Creacion de un objeto literal

*/
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso definito de HTML",
    "Curso de web scripting",
  ],
  /*Opcion 1 para la creacion de metodos
  aprobarCurso: function() {}
  */
  //Opcion 2 para la creacion de metodos
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
};

// Hacer que natalia apruebe otro curso

//natalia.cursosAprobados.push("Curso de Responsive Desing");

// Creación de prototipos

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  /* Esta la primera forma de crear metodos dentro de prototipos
  this.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  };
  */
}

// Segunda forma de crear un metodo de un prtotipo
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student ("Juanita", 21, ["curso de videojuegas", "Curso de ingles"]);