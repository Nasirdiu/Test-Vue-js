const person={
    fname:'Bangladesh',
    lname:"Dhaka"
}

//const anotherPerson=person
const anotherPerson =Object.assign({},person);
anotherPerson.fname="Nasir"

console.log(anotherPerson);
console.log(person);