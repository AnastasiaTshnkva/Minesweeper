let a: number;
let b: boolean;
let c: string;

function login (data: unknown): {
  const data2 = data;
  console.log(data2);
};

type Permission = 'admin' | 'manager' | "user";

type TuplePermission = [Permission, Permission];

type BasicUser<A = boolean, P = TyplePermission> = {
  name: string;
  age: number;
  isAdmin: A;
  permissions?: P;
};

type AccountUser = {
  account: number;
};

type FullUser<A = boolean> = BasicUser<A> & AccountUser;


let user: FullUser = {
  name: 'Nastiya',
  age: 26,
  isAdmin: true,
  permissions: ['admin', 'manager'],
  account: 100,
};

let usersArray: FullUser[] = [user, user, user];

function getFirst<T>(arr:T[]):T {
 return arr[0];
};

getFirst<BasicUser>(usersArray);

type MathFunc = (a:number, b:number) => number;

const mul: MathFunc = (a, b) => a * b;
const add: MathFunc = (a, b) => a * b;