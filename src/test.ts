let a: number;
let b: boolean;
let c: string;

function login (data: unknown):void {
  console.log(data);
};

interface DepartmentsOfPermissions {
  depName: string;
  lvl: number;
};

const DepsForPerms: Record<Permission, DepartmentsOfPermissions> = {
  'admin': {
    depName: 'security',
    lvl: 10,
  },
  'manager': {
    depName: 'sales',
    lvl: 10,
  },
  'user' {
    depName: 'sales',
    lvl: 5,
  }
} 

type Permission = 'admin' | 'manager' | 'user';
type PermissionWithoutAdmin = Exclude<Permission, 'admin'>;

type TuplePermission = [Permission, Permission];

type BasicUser<A = boolean, P = TuplePermission> = {
  name: string;
  age: number;
  isAdmin: A;
  permissions?: P;
};

type BacisUserWithoutPermissions = Omit<BasicUser, 'permissions'>;

type BasicUserWithReadonly = Readonly<BasicUser>;
type BasicUserWithRequired = Required<BasicUser>;
type BasicUserPartial = Partial<BasicUser>;

type BasicUserReadonlyRequired = Readonly<Required<BasicUser>>;

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

type basicFunc = () => string;

type getFirstType = ReturnType<basicFunc>

getFirst<BasicUser>(usersArray);

type MathFunc = (a:number, b:number) => number;

const mul: MathFunc = (a, b) => a * b;
const add: MathFunc = (a, b) => a * b;