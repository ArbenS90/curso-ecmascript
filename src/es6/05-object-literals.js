// Enhaced object literals

function newUser (user, age, country, id){
  return{
    user,
    age,
    country,
    id,
  }
}
console.log(newUser("ovidio",66,"COL",1));

//tambien podemos usar la forma: RORO "recibir objeto retornar objeto"

function newUser({
  user,
  age,
  country,
  id,
}) {

const usuario ={
  user,
  age,
  country,
  id,
}

return usuario

}

const ovidio = newUser({
  user: "Ovidiosky",
  age: 77,
  country: "MX",
  id: 2
})

const Argemiro = newUser({
  age: 99,
  country: "PE",
  id: 3,
  user: "Arge"
})
console.log({ovidio, Argemiro});
