//declaracion de clases
class Rectangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }
  area(base,altura){
    return `"El area del Rectangulo es: ${base*altura} y se obtiene multiplicando la base ${base} por la altura ${altura}`;
  }
  get laAltura(){
    return this.altura
  }
  set laAltura(a){
    return this.altura = n;
  }
};

const areaRectangulo = new Rectangulo();
console.log(areaRectangulo.area(4,4));
console.log(`la nueva altura es: ${altura = 10}`);

