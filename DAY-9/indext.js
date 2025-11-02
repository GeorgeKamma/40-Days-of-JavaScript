console.log("Day-9")

/*
console.log('name is', fname)

var name;
fname = 'Tom';
console.log('name is', fname);

*/

//Tmporal Dead Zone =  Area where you cannot access a variable untill it is initialized.



// === name variable TDZ starst here

console.log(Age) // refrence error

console.log(address)
let address = ":Deport Road"


let Age = "45"; // age variable TDZ ends here


// invoke a function chaed()
chase();


//Declear a function chase()
function chase(){
    console.log("Tom is chasing Jerry")
}

//invoke a function caught()
caught();

//Dclear a function caught
function caught(){
    console.log("Tom caught jerry")
}