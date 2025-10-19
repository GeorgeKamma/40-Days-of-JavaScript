console.log("Day-6")

//Declaration of Definition of a function

function printThis(){
    console.log("Printing....")
}

//Call or invoke the function
printThis();


//function as expression

let printMe = function(){
    console.log("printMe")
}
printMe();

//peremater and Argument

function sum(a, b){
     const result = a + b;
     //console.log(result)
     return result;
}

let result = sum(10, 9);

function double(x){
    return 2*x;
}
console.log(double(result))

//default peremater

function Calc(a=0, b=0){
    return(2 * (a + b));
}

const resVar = Calc();
console.log(resVar);

//rest peremeter
function calculateThis(x,y,...rest){
    console.log(x,y,rest)
}
calculateThis(1,2,3,4,5,6,7,8,9);

//my own example

function George(G,k,...rest){
       console.log(G,k, rest);
}
George(1,2,3,4,56,67,89,0,1,3,4,6,5,)


//nested function

function outer(){
    console.log("outer");

    function inner(){
        console.log("inner");
    }
     
    inner();
    
}
outer();

//call back function
const toCallBuz = false;

function foo(func){
    console.log("foo")

     if (toCallBuz){
        func();
     }

}

/*

foo(function () {
    console.log("buzz");
})

*/

const buzz = function(){
    console.log("buzz")
}
foo(buzz)

//pure function

let greetingMsg = "Hello"

function greeting (name){
    return greetingMsg + name;
}

console.log(greeting("George"))
console.log(greeting("George"))
console.log(greeting("George"))

greetingMsg = "Good Morning"

console.log(greeting("George"))
console.log(greeting("George"))
console.log(greeting("George"))

//High order function

function getCamera(camera){
    camera();
}

getCamera(function(){
    console.log("sony")
})

//function that return another function
/*
function returnFun(){
    return function(){
        console.log("Hello")
    }
}

const retFun = returnFunc();
retFun();

*/

//Arrrow function

let greetMe = () => {
    console.log("hELLO mR.");
}
greetMe();


//another way to write arrow function
//remove the curly braces

let greetUs = () => console.log("hELLO Y'all.");

greetUs();


let greetThem = (greetingNews) => greetingNews + "Kamma"

console.log(greetThem("Hello baby"));


//IIFE(innediately invoke funcation expression)

(function(count){
    console.log("IIFE", count)
})(1)

//adding a paremeter (count) to the IIFE

/*
(function(count){
    console.log("IIFE", count)
})(1)

*/


//recursion = function calling itself



//function foo(){
    foo();
//}


    
//Another function


function fetchWater(count){
    console.log("Fetching Water", count);
    if (count === 0){
        console.log("No more water left to fetch");
        return
    }

    fetchWater(count-1)
}

fetchWater(5);