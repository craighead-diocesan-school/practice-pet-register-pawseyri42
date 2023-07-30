
let nameArray = [
  { name: 'Tiger', age: 1, species: 'dog' },
  { name: 'Mouse', age: 5, species: 'horse' },
  { name: 'bubba', age: 3, species: 'lamb' },
  { name: 'Cotter', age: 19, species: 'horse' },

]

function addPet() {
  // lets user input the name of the pet
  let name = prompt("What is the name of the pet?")
  let age = prompt("What is the age of " + name + "?")
  let species = prompt ("What species is " + name + "?")

  // make an object called 'pet' from the details you got
  let pet = {
    name: name,
    age: age,
    species: species
  }

  // push the pet object onto the pets array
  nameArray.push(pet)
}

function animalRecord() {
alert("button is working")
}