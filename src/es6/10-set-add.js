const list = new Set();

list.add('item 1');
//se puede usar el add desde una misma lista
list.add('item 2').add('item 3');
list.delete('item 1');

console.log(list);

