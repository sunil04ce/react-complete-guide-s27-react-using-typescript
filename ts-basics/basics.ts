// Primitives

let age: number;
age = 12; //age = "12";

let userName: string;
userName = "Jack";

let isInstructor: boolean;
isInstructor = true;

// Complex types
let hobbies: string[];
hobbies = ["Sports", "Writing", "Social Meetings"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Jack",
  age: 34,
};

// person = {
//     isEmployee: true;
// }

let people: {
  name: string;
  age: number;
}[];

// Type inference
let course: string | number = "React the complete guide";
course = 100;

// Type alias
type User = {
  firstName: string;
  gender: boolean;
  age: number;
};

let superUser: User;
let adminUsers: User[];

// Functions and types,

function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any): void {
  console.log(value);
}

// automatic type inference with return value, here return value is of type number
function substract(a: number, b: number) {
  return a - b;
}

// Generics

// function insertAtBeginning(array: any[], value: any) {
//   const newArray = [value, ...array];
//   return newArray;
// }

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

// updatedArray[0].split("");

const stringArray = insertAtBeginning(["b", "c", "d"], "a");
