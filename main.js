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
  /* Esta la primera forma de crear metodos dentro de prototipos NO ES UNA BUENA PRACTICA
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

// Prototipos con la sintaxis clases

class OtherStudent {

  // Constructor
  constructor(name, age, aprovedCourses) {
    this.name = name;
    this.age = age;
    this.aprovedCourses = aprovedCourses;
  }


  // Metodos auxiliares
  aproveCourse(newCourse) {
    this.aprovedCourses.push(newCourse);
  }
}

const jaimito = new OtherStudent("jaimito", 12, ["hola", "Oomo", "quef ue mano"]);

jaimito.aproveCourse("holiiii");

// Objetos como parametros

class OtherStudent2 {

  // Constructor
  constructor({name, age, email, aprovedCourses = []}) {
    this.name = name;
    this.age = age;
    this.email  = email;
    this.aprovedCourses = aprovedCourses;
  }


  // Metodos auxiliares
  set aproveCourse(newCourse) {
    this.aprovedCourses.push(newCourse);                                                                                         
  }
}
// Podemo eviar el objeto como parametro en desorden.
const miguelito = new OtherStudent2(
  {
    email: "miguelito@platzi.com",
    age: 35,
    name: "Miguel",
  }
);
