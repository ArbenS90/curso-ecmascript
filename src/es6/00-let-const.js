var lastName = 'Arango';
lastName = 'Benjumea';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Banana';
console.log(fruit);

const animal = 'dog';
animal = 'cat';
console.log(animal);



const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Banana'; // block scope
        const fruit3 = 'coconut'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();