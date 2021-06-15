//                    JAVASCRIPT PROGRAMMING PRIMER

//------------------------------------------------------------------------- 
//DATA TYPES
console.log('------Basic Data Types------');

console.log(typeof 42); //number

console.log(typeof 42.44); //also number in js logic

console.log(typeof 'hello there'); //string

console.log(typeof undefined); //type is also 'undefined'

console.log(typeof null); //bug in js - returns 'object' but is not

console.log(typeof true); //boolean

console.log(typeof {name:'javascript'}); //object

console.log(typeof [1,2,3]); // ideally an array but returns the type 'object'

//------------------------------------------------------------------------- 
//CONDITIONALS - IF/ELSE

const x = 3;
if(x > 5){
    console.log('number is greater than 5');
}else{
    console.log('number is less that 5');
}

//------------------------------------------------------------------------- 
//ARRAY + LOOPS ITERATION

const arr = [1,2,3,4,5];
let sum = 0;
console.log('------Typical For loop + sum------');
for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    console.log(arr[i], i); //prints 'number' 'index position'
    console.log(sum); // prints sum of array elements
}

console.log('------For/Of Loop iteration v2------');
const arr = [1,2,3,4,5];
for(let item of arr){
    console.log(item);
}

console.log('------forEach function/args loop array iteration------');
const arr = [1,2,3,4,5];
arr.forEach((item, index) => {
    console.log(item);
})

//do not use for/in loop over an array when order is important
console.log('------For/in loop array iteration------');
var arr = [1,2,3,4,5];
let item;
for (item in arr){
    console.log(arr[item]);
}

//------------------------------------------------------------------------- 
//VARIABLES

console.log('------Variables------')
var x = 22; // var is like a placeholder variable
x = 'hola'; //changes to string
console.log(x);
console.log(typeof x);

//------------------------------------------------------------------------- 

//       COERCION - TYPE CONVERSION

var x = '10';
var y = 10;
console.log(a+b); //'10' + 10 = 1010 - convert number to string

//Coercion to number - parseInt, Number, unary +
var x = '10';
var y = 10;
console.log(Number(x)+y); //nNumber Method => 10 + 10 = 20
console.log(parseInt(x)+y); //parseInt Method => 10 + 10 = 20 
console.log((+x)+y); //Unary + method => 10 + 10 = 20

//coercion to boolean - boolean, !!

//There are few set of false values in js (all the rest are true):
var x = 0;
var y = -0;
var z = "";
var a = NaN;
var b = null;
var c = false;
var d = undefined;

console.log(Boolean(x)); //boolean method
console.log(!!(y));      //!! method
console.log(!!(z));
console.log(!!(a));
console.log(!!(b));
console.log(!!(c));
console.log(!!(d));

//coercion to string - toString, simple concatenate with Empty String
var x = 10;
console.log(x.toString());
console.log(typeof(x.toString()));
console.log(x + '');
console.log(typeof(x.toString()));
console.log(Boolean(x));


//VALUE VS. TYPE CHECKING
var x = 10;
var y = '10';
console.log(x == y); //checks values - true (10 vs. '10')
console.log(x === y); //checks values and value types as well - false (number vs. string)

//------------------------------------------------------------------------- 

//       SCOPE

var x = 10; //global scope (can access this variable from anywhere in the program)

function myFunction(){
    var x = 20; //functional scope (only the function can access it)
    console.log(x);
}
myFunction(); 
/*NOTE: Lexical scope is going up a scope level until variable is found  (functional - global for ex.).
**throws error if variable still not found in global scope*/

//------------------------------------------------------------------------- 

//scope (for variable) example - global, lexical, functional scopes
var teacher = 'Kiran'; //Global scope

function thursdayLiveClass(){
    var teacher = 'Garv'; //Functional scope
    console.log(teacher, 'is the teacher for Thursday live class');
}

function fridayLiveClass(){
    var teacher = 'Kshitiz'; //Functional scope
    console.log(teacher, 'is the teacher for Friday live class');
}

thursdayLiveClass();
fridayLiveClass();

//lexical scope jumps up a scope level if not found in functional
console.log(teacher, 'is the teacher for Wednesday live class');

//------------------------------------------------------------------------- 

//scope (for variable) example - block scope
//const vs. let vs. var

var x = 10; //VAR: Scope accessible anywhere in the function/program based on definition location

function otherFunction(){
    const y = 20; //CONST: definition fixed, cannot change once defined
    console.log(y, '(const)');
    {
        //block level
        let question = 'about html? (block)'; // LET: define block level variables
        console.log(question); //block scope: prints errorfree as defined in this 'block'
    }
}
// console.log(question); //outside block: throws 'question not defined' error!!!
console.log('---Within function---');
otherFunction();
console.log('---Outside function---');
console.log(x, '(var)');