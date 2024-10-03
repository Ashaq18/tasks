var a=1
var a=3
const b=5
let c=5


console.log(b+a)
let x=2
let y=4
if(x==y){
    console.log('x is equal to y')
}else{
    console.log('x is not equal to y');
    
}

let day=3
let dayname;

switch (day){
    case 1:
        dayName ='monday'
        break
        case 2:
            dayName ='tuesday'
            break
            case 3:
                dayName ='wednesday'
                break
            case 4:
                dayName ='thursday'
                break
            case 5:
                dayName ='friday'
                break
            case 6:
                dayName ='saturday'
                break
            case 1:
                dayName ='sunday'
                break
}
console.log(dayName);

// forloop
// initialize:this is where you set aq starting value for the loop Counter.
// Condition:this is the condition that is checked for each loop iteration.if its true,the loops continue,if its false loops SVGTextPositioningElement.
// increment:this updates the loop counter after iteration
for (let i=1; i<=5; i++){
    console.log("number:"+i)
}

// whileloop
// initialize let i=1: i starts at 1 before the loop ByteLengthQueuingStrategy
// condition i<=5: As long as i is less than or equal to 5,the loop continues,
// increment:i++ after each iteration,i is increased by 1 each loop
let i=1;
 while (i<=5){
    console.log("number:" +i);
    i++;
 }

// do whileloop
// initialize let i=1; i starts at 1
// do:the code inside the do block is excecuted first,regardless of the condition 
// condition:after excecuting the code block,the condition i<=5 is checked.if its true,the loop repeats;if false the loops stop

function functionname(parameters){

}


function sayhello(){
    console.log("hello world");
}
sayhello();

function greet(name){
    console.log("hello" + name+!);
}
greet("Alice");
greet("Bob");

function add(a,b){
    return a+b;
}
console.log(add(2,3));


const subract=function(a,b){
    return a-b;
}
console.log(subract(5,3));

const multiply=(a,b)  a*b
console.log(multiply(4,5));



