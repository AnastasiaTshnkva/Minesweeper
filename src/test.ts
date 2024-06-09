let a: number;
let b: boolean;
let c: string;

interface BasicUser {
  name: string;
  age: number;
  isAdmin: boolean;
  permissions?: string[];
};

let user: BasicUser = {
  name: 'Nastiya',
  age: 26,
  isAdmin: true,
};

let user2: BasicUser = {
  name: 'Andrey',
  age: 29, 
  isAdmin: false,
  permissions: ['some permission 1', 'some permission 2'],
};

type MathFunc = (a:number, b:number) => number;

const mul: MathFunc = (a, b) => a * b;
const add: MathFunc = (a, b) => a * b;