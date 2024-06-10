let a: number;
let b: boolean;
let c: string;

type Permission = 'admin' | 'manager' | "user";

type BasicUser<A = boolean, P = string[]> = {
  name: string;
  age: number;
  isAdmin: A;
  permissions?: P[];
};

type AccountUser = {
  account: number;
};

type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AccountUser;


let user: FullUser<boolean, Permission> = {
  name: 'Nastiya',
  age: 26,
  isAdmin: true,
  permissions: ['admin', 'manager', 'user'],
  account: 100,
};

let usersArray: BasicUser<boolean, Permission>[] = [user, user, user];

function getFirst<T>(arr:T[]):T {
 return arr[0];
};

getFirst<BasicUser<boolean, Permission>>(usersArray);

type MathFunc = (a:number, b:number) => number;

const mul: MathFunc = (a, b) => a * b;
const add: MathFunc = (a, b) => a * b;