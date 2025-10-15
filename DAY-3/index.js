console.log("Day-3")

//operators: /, */ +/ -
//operands: x+y x and y are operands
//expression: x = 2,

//expression example
let x = 4 + 5;

console.log(x)

//Arthematic operator

let a = 12;
let b = 5;

let f_Name = "George";
let l_Name = "Kamma";

console.log(f_Name + l_Name)


console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a ** b)
console.log(a % b);

//Increment

/*
let count = "5";
console.log(count++); //count = count + 1
console.log(count);

console.log(++count); //count = count +1

*/


//Decrement

let count = "5";
console.log(count--); //count = count - 1
console.log(count);

console.log(--count); //count = count - 1


//assignment operator
console.log("**** Assignment Operators****");

let y = 10;
y += 5; // y = y + 5 (15)
y -= 3; // y = y -3 (12)
y *= 2; //  y = y * 2 (24)
y /= 4; // y = y / 4 (6)

console.log(y);

//Comparison Operators
console.log("**** Comparison Operators****");

//loosely equality
console.log(0 == false);
console.log(4 == 5);

//strightly equality
console.log(3 === 3);
console.log(3 === '3');
console.log(null === null);
console.log(undefined === undefined);
console.log(null == undefined);
console.log(String === Boolean);
console.log(100 === 25)


//NaN = Not a Number

let obj1 = {'Kamma': 'George'};  //diff address
let obj2 = { 'kamma': 'George'}; //diff address

console.log(obj1 === obj2);
console.log(obj1 !== obj2)   // not equal operator


3 > 5
5 > 3
4 >= 8
4 >= 3

7 < 1
7 <= 1
4 < 10


console.log("**** Logical Operators****");
// &&, ??,

//op1 && op2


console.log(false && false);  //false
console.log(true && false);   // false
console.log(true && true);    // true
console.log(false && true);   //  false

console.log( "cow" && "Hourse")  // hourse

4 > 5 && 4 === 6

console.log(false || false); //false
console.log(true  || false); //true
console.log(false || true);  //true
console.log(true  || true); //true

console.log( "cow" || "Hourse") //cow

console.log(!false)
console.log(!true)

//??
let a1 = null ?? 1; //1
let a2 = null ?? 3; //3
let a3 = false ?? "GeorgeKamma" //false
let a4 =  0 ?? "Charles" //0

console.log("**** Conditional (ternary) Operators****");

//condition ? val1 : val2

let age = "43"
age => 60 ? 'citizen' : 'not Citizen' //a not Citizen


console.log("**** Bitwise Operators****");
//10 in decimal
//10 in 32 bit representation of 0,1
// & | ^ >> ~  <<>>



