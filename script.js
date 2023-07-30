
let nameArray = [
  { name: 'Tiger', age: 1, species: 'dog' },
  { name: 'Mouse', age: 5, species: 'horse' },
  { name: 'bubba', age: 3, species: 'lamb' },
  { name: 'Cotter', age: 19, species: 'horse' },

]

function addPet() {
  // lets user input the name of the pet
  let animalName = prompt("What is the name of the pet?")
  // add a new name to add to array of names
  nameArray.push(animalName)
}

function addAge() {
  //lets ask the user the age of her recorded pet
let animalAge = prompt("What is the age of " + animalName + "?")
}

function addSpecies() {
//ask the user the species of her chosen pet
let addSpecies = prompt ("What species is " + animalName + "?")

}
