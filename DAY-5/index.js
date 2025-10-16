console.log("Day-5")

//loops

//for loop
// A fpr loop is best when we know how many times we are going to run a block of code

/*for (initialization; Condition; update){
    //block of code to run
}
*/

for (let count=1; count <= 5; count++){
    console.log("itration/loop", count)
}

//Addition of even numbers from 1 to 100

let sum = 0;
for (let i = 1; i <= 100; i++){
    if (i % 2 === 0){
     // console.log(i)
     //sum = sum + i;
     sum += i;

    }
}
console.log(sum);

let language = "Javascript"

for (let i = 0; i < language.length; i++){
    console.log(language.charAt(i))
}

//Nested loop

for (let i = 1; i <= 3; i++){
    for (let j = 1; j <= 3; j++){
        console.log( i, j )
    }
}

//break and continue

//break

for (let i = 1; i <= 5; i++){
    if (i === 3) break; //executionbreak at 2

    console.log(i)
}

//continue, it skip a particular iteration


for (let i = 1; i <= 5; i++){
    if (i === 3) continue;
    console.log(i) // skipe 3
}


//multipl couner for  single loop

for (i = 1, j = 10; i <= 10, j >= 1; i++, j--){
    console.log(i, j);
}


//while loop

/*   syntax
while (condition){
    //code
}*/

let counter = 1;

while(counter <= 5){
    console.log(counter);
    counter++;
}


//do-while loop ensure that the code execute t once before checking the condition


let num = 1;
do{
    console.log(num);
    num++
}while(num <= 5);


//infinite loop

for ( ; ; ){
    console.log("I am looping forever")

}while(true);{
    
}

do{
    //code
}while(true)