let nameArray = [ 
'tiger',
'Mouse',
'Edward',
'Cotter',
]

function addName() {
    // lets user input the name of the pet
    let name = prompt("What is the name of the pet?")
    // add a new name to add to array of names
    nameArray.push(name)
}

function names() {
    //lets shows user names of all the pets
    alert(nameArray)
}


