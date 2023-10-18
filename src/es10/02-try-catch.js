try{
  hello();
} catch(error) {
  console.log(error);
}

//se puede cambiar el error tradicional por uno escrito
try {
  anotherFn();
} catch {
  console.log('Esto es un error');
}