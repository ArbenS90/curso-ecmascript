const user = {username: 'elovi', age: 65, country: 'CO'};
const { username, ...values } = user;

console.log(username);
console.log(values);