console.log("DAY-10")

//Types of Scopr in JavaScript in JS

// 1. Global Scope
// 2. Function Scope
// 3. Block Scope
// 4. Module Scope

//  1. Global Scope Variable decleared outside of a function and a block is global scope

let name = "George";

function greetings(){
    console.log("Hello", name);
}

greetings();

// block

{
    console.log(name);
}

// function scope variable decleared inside a function are only accesible within the function

function toDo(){

    var task = "Learning 40 days of JavaScript"
    console.log(task);
}
toDo();


// block scope variable decleared inside the block using let and const cannot be access outside the block

{
    let Age = true;
    console.log(Age)
}
// console.log(Age)

//  but with var it can be access outside the block

{
  var count = "10"
  console.log(count)
}

// scope chain

let globalVar = "I am a global Variable"

function outerVar(){
    let outerVar = "I am a innerVar"
    

    function innerVar(){
        let innerVar = "I am a innerVar"

        console.log(innerVar)
        console.log(outerVar)
        console.log(globalVar)

    }
    innerVar();
}
outerVar();