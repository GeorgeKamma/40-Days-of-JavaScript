console.log('Day-04');

//control flow

let catchingBuss = true;

if (catchingBuss) {
   console.log("I will reach home on time");
} else
    {
    console.log("I will be late");
}

let age = 8;

if (age >= 18) {
    console.log("you are eligable to vote")
}else
    {
   console.log("you are not eligable to vate")
}

//let build a grading system

// if score >= 90 grade A
// if score >= 80 grade B
// if score >= 70 grade c
// fail

let score = 90;

if (score >= 90){
    console.log("A")
}else if (score >= 80){
    console.log("B")
}else if (score >= 70){
    console.log("c")
}else if (score < 70){
    console.log("F")
}


let x = 0;

if (x === 0){
    console.log("0")
}else if (x >= 0){
    console.log("Grater than 0")
}else if (x <= 0){
    console.log("Less than 0")
}


/*
const condition = false;
const innerCondition = false;

if (condition){
    console.log("Outer if")

    if (innerCondition){
        console.log("inner if")

    }  else{
        console.log("inner else")

    } else{
        console.log("Outer else")
    }
}
*/


/*else {
    console.log(" I am standing alone else")
}*/

//switch case

let level = 24;

switch (level) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
         console.log("3");
         break;
    case 4:
        console.log("4");
        break;
        default:
            console.log("nothing is matching")
}

// Finding days of the week

let day = 6;

switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("Sunday");
    default:
        console.log("Invalid day number")
}


// Example 

let Nname = "George Kamma"

switch (Nname){

    case "George Kamma":
        console.log("Learnng 40 days of Js");
        break;
    case "Google":
        console.log("responding to all searches");
        break;
    case "tapas":
        console.log("teaching 40 days of Js")
    default:
        console.log("You are not George nor Google")
    
}


//practice

const city = "Harper";

switch (city){
    case "Monrovia":
    case "Harper":
    case "Greenville":
    case "Kakata":
        console.log("All these ae in Liberia");
        break;
    
    case "New york":
    default:
        console.log("It is in the USA")
}

