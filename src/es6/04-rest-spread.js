//arrays destructuring (desestructuración)
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a,fruits[1]);

//Object destructuring  
let user = {username: 'Don Ovidio', age: 56};
let {username, age} = user;
console.log(username,user.age);

//spread operator
let person = {name: 'Don Ovidio', age:28};
let country = 'Col';

let data = {id: 1, ...person, country};
console.log(data);

//rest
function sum(num, ...numbers){
  console.log(numbers);
  console.log(num + numbers[0] );
  return num + numbers[0]
}
sum(1,1,2,3,4,5);