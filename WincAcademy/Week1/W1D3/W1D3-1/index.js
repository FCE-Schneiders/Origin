let name ='Fleur';
let age= 39;
let person = {
    name:'Fleur',
    age:'39'
}
console.log(person)

console.log(name)
console.log(age)

// Dot Notation
person.name = 'Felicia'
console.log(person.name)

person.age= '20'
console.log(person.age)

// Bracket Notation
person ['name'] = 'Alexandro'
console.log(person.name)

person ['age'] = '30'
console.log(person.age)

//Arrya
let differentColors = ['groen', 'blauw', 'rood'];
differentColors [3]= 'geel';
differentColors[4]= 5;
console.log (differentColors.length);
