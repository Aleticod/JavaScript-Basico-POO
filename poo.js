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
  constructor({
    name,
    teacher,
    hours,
    nroClasses,
  }) {
    this.name = name;
    this.teacher = teacher;
    this.hours = hours;
    this.nroClasses = nroClasses;
  }
}

const cursoHTML = new Courses ({
  name: "Curso definitivo de HMTL",
  teacher: "Diego de Granda",
  hours: 4,
  nroClasses: 27,
})

const cursoCSS = new Courses({
  name: "Curso de CSS grid",
  teacher: "TefCode",
  hours: 7,
  nroClasses: 20,
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


const juancito = new StudentPlatzi ({
  name: "JuanDc",
  username: "quien",
  email: "juanito@platzi.com",
  twitter: "fcdj",
  learningPath: [
    escuelaWeb,
    escuelaData,
  ]
})