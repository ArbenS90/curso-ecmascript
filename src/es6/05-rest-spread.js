//arrays destructuring (desestructuración)
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a,fruits[1]);

//Object destructuring
let user = {username: 'Don Ovidio', age: 56};
let {username, age} = user;
console.log(username,user.age);