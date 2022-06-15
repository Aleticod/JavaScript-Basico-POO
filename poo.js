class StudentPlatzi {

  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPath = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPath = learningPath;
  }
}

class FreeStudent extends StudentPlatzi{
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if(newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
    }
  }
}

class BasicStudent extends StudentPlatzi{
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if(newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimoes");
    }
  }
}

class ExpertStudent extends StudentPlatzi{
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}


class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}

class Courses {
  // Atributos
  #name;
  // Constructor
  constructor({
    name,
    teacher,
    hours,
    nroClasses,
    isFree = false,
    lang = "spanish",
  }) {
    this.#name = name;
    this.teacher = teacher;
    this.hours = hours;
    this.nroClasses = nroClasses;
    this.isFree = isFree;
    this.lang = lang;
  };

  // Methods Setters and Getters
  get name() {
    return this.#name;
  };

  set name(nuevoNombre) {
    if(nuevoNombre === "Curso Malito") {
      console.error("Web... no");
    } else {
      this.#name = nuevoNombre;
    }
  }
}

const cursoHTML = new Courses ({
  name: "Curso definitivo de HMTL",
  teacher: "Diego de Granda",
  hours: 4,
  nroClasses: 27,
  isFree: true,
  lang: "spanish",
})

const cursoCSS = new Courses({
  name: "Curso de CSS grid",
  teacher: "TefCode",
  hours: 7,
  nroClasses: 20,
  lang: "english"
})

const cursoPython = new Courses({
  name: "Curso Basico de Python",
  teacher: "Fernando de Granda",
  hours: 12,
  nroClasses: 15,
})

const cursoExcel = new Courses({
  name: "Curso Basico de Excel",
  teacher: "Quetzally",
  hours: 6,
  nroClasses: 12,
})

const escuelaWeb = new LearningPath(
  {
    name: "Escuela de desarrollo web",
    courses: [
      cursoHTML,
      cursoCSS,
    ]
  }
);
const escuelaData = new LearningPath({
  name: "Escuela de data science",
  courses: [
    cursoPython,
    cursoExcel,
  ]
});


const juancito = new FreeStudent ({
  name: "JuanDc",
  username: "quien",
  email: "juanito@platzi.com",
  twitter: "fcdj",
  learningPath: [
    escuelaWeb,
    escuelaData,
  ]
})

const dariito = new BasicStudent ({
  name: "JuanDc",
  username: "quien",
  email: "juanito@platzi.com",
  twitter: "fcdj",
  learningPath: [
    escuelaWeb,
    escuelaData,
  ]
})

const papacito = new ExpertStudent ({
  name: "JuanDc",
  username: "quien",
  email: "juanito@platzi.com",
  twitter: "fcdj",
  learningPath: [
    escuelaWeb,
    escuelaData,
  ]
})