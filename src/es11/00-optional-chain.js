const users = {
  ovidio: {
    country: 'CO'
  },
  argemiro: {
    country: 'MX'
  }
}

console.log(users.ovidio);
//podemos manejar el error, y devolver un undefined o un mensaje
console.log(users?.devep?.country || "No existe el elemento en el array");