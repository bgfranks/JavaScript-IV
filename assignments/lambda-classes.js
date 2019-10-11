import { array } from "prop-types";

// CODE here for your Lambda Classes
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
  }

  listsSujects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      let subject = this.favSubjects[i];
      return subject;
    }
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun a sprint challenge on ${subject}.`;
  }
}

class ProjectManager extends Instructor {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel stand up time!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

const bill = new Instructor({
  name: "Bill",
  location: "SoCal",
  age: "32",
  specialty: "JavaScript",
  favLanguage: "Python",
  catchPhrase: "Let's get crackin",
});

const jeff = new Instructor({
  name: "Jeff",
  location: "Dallas",
  age: "40",
  specialty: "Ruby",
  favLanguage: "Java",
  catchPhrase: "Coffee time!",
});

const josh = new ProjectManager({
  name: "Josh",
  location: "Trenton",
  age: "29",
  specialty: "JavaScript",
  favLanguage: "HTML",
  catchPhrase: "giddy up",
  gradClassName: "UI4",
  favInstructor: "Alice",
});

const jessica = new ProjectManager({
  name: "Jessica",
  location: "Orlando",
  age: "22",
  specialty: "Node",
  favLanguage: "C#",
  catchPhrase: "Let's get this party started",
  gradClassName: "UI4",
  favInstructor: "Bill",
});

const zac = new Student({
  name: "Zac",
  location: "Sioux Falls",
  age: "25",
  previousBackground: "retail",
  className: "DS8",
  favSubjects: ["JavaScript", "HTML", "Ruby"],
});

const serena = new Student({
  name: "Serena",
  location: "Wilmington",
  age: "24",
  previousBackground: "Chef",
  className: "WEB16",
  favSubjects: ["LESS", "Java", "Swift"],
});

console.log(jeff.grade(serena, "Ruby"));
console.log(bill.demo("CSS"));

console.log(josh.standUp("PTJosh"));
console.log(jessica.debugsCode(zac, "Node"));

console.log(serena.PRAssignment("java"));
console.log(zac.sprintChallenge("JavaScript"));
