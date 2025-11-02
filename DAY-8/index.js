console.log("Day-8")

var  name = "George"

function George(){
    console.log(this.name + 'Run')
}

George();


console.log("Inside Global Execution Context");

var a = "5";

function testMe(){
    console.log("Inside testMe execution context");

    var b = "10";
    var user ={
        Nname: "George",
        country: "Liberia"
    }

    function testAgain(){
        console.log("Inside testAgain execution context")
        console.log("Exiting testAgain execution context")
    }

    testAgain;
    console.log("Exiting testAgain execution context")
}

testMe();
console.log("Exiting Global execution context")