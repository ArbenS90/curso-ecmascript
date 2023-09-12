//forma de asignar valores por defecto anteriormente.
function newUser(name,age,country){
  var name = name || 'Don Ovidio';
  var age = age || 54;
  var country = country || 'Colombiano';
  console.log(name,age,country);
  
} 
newUser(); 
newUser('argemiro',87,'Mexicano');

//nueva forma de pasar parametros por defecto en ES-6
function newAdmin(name = 'Don OVidio', age = 65, country = 'Boliviano'){
  console.log(name,age,country);
}
newAdmin();
newAdmin('Elvira',67,'Venezolana');
