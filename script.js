
let pets = [
  { name: 'Tiger', age: 1, species: 'dog' },
  { name: 'Mouse', age: 5, species: 'horse' },
  { name: 'bubba', age: 3, species: 'lamb' },
  { name: 'Cotter', age: 19, species: 'horse' },

]

function showPets() {
  for (let pet of pets) {
    alert(pet.name)
  }

}


function addPet() {
  // lets user input the name of the pet
  let name = prompt("What is the name of the pet?")
  let age = prompt("What is the age of " + name + "?")
  let species = prompt("What species is " + name + "?")

  // make an object called 'pet' from the details you got
  let pet = {
    name: name,
    age: age,
    species: species
  }

  // push the pet object onto the pets array
  pets.push(pet)
}

function removePet() {
  //output the names of each pet 
  let index = 0
  for (let pet of pets) {
    alert(index + ":" + pet.name)
    index = index + 1
  }

  //get the index of the pet to remove
let indextoRemove = prompt ('which pet do you want to remove from the record?')

  //Remove the pet at the index 
pets.splice(indextoRemove, 1)
}

