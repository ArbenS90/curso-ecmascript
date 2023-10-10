function* iterate(array){
  for (let value of array){
    yield value; 
  }
}

const it = iterate(['Don OVidio', 'Conrado', 'Argemiro','clara elvira']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//forma tradicional
iterate.next();

function* generador(){
  yield 1
  yield 2
  yield 3
}
const g = generador()

g.next().value;
g.next().value;
g.next().value;
g.next().value;

//uso de for of
const primos = [2,3,5,7,11]

for (let primo of primos){
  console.log(primo);
}

//uso de indice (con error de ejecucion)
for (let primo of primos){
  valor *= 2
  console.log(primo);
}
console.log(array);

//uso de for in
const objeto = {a:1, b:2, c:3, d:4, e:5}

for (let number in objeto){
  console.log(number);
}

