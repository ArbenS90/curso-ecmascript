//promesas

const anotherFunction = () => {
  return new Promise((resolve, reject)=>{
    if (false){
      resolve('Buenas!!');
    }else{
      reject ('Al buche');
    }
  })
}
anotherFunction()
  .then(Response => console.log(Response))
  .catch(err => console.log(err));

//ejm promesa

function cuadradoPromesa(valor){
  if(typeof valor !=="number"){
    return Promise.reject(`Error, el valor " ${valor} " no es un numero`); 
  }

  return  new Promise ((resolve, reject) =>{
    setTimeout(()=>{
      resolve({
        valor,
        result: valor * valor
      });
    }, 0 | Math.random()*1000);

  })
}

cuadradoPromesa(2)
.then(obj =>{
  console.log("inicia la promesa");
  console.log(`promise: ${obj.valor}, ${obj.result}`);
  return cuadradoPromesa(3);
})
.then(obj =>{
  console.log(`promise: ${obj.valor}, ${obj.result}`);
  return cuadradoPromesa("hola");
})
.then(obj =>{
  console.log(`promise: ${obj.valor}, ${obj.result}`);
  console.log("fin de la promesa");
})
.catch(err => console.error(err));

