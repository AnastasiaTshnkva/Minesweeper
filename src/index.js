var a;
var b;
var c;
function login(data) {
    console.log(data);
}
;
;
var test = 1;
var DepsForPerms = {
    'admin': {
        depName: 'security',
        lvl: 10,
    },
    'manager': {
        depName: 'sales',
        lvl: 10,
    },
    'user': {
        depName: 'sales',
        lvl: 5,
    }
};
var user = {
    name: 'Nastiya',
    age: 26,
    isAdmin: true,
    permissions: ['admin', 'manager'],
    account: 100,
};
var usersArray = [user, user, user];
function getFirst(arr) {
    return arr[0];
}
;
getFirst(usersArray);
var mul = function (a, b) { return a * b; };
var add = function (a, b) { return a * b; };
