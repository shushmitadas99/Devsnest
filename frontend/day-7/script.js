//------------------------------------------ |JS OBJECTS| ----------------------------------------

//-------------------- CREATING OBJECTS - WITH METHODS AND FUNCTIONS --------------------

const person = {
    //object properties: has multiple values / key:value pairs
    firstName: 'Sushi',
    lastName: 'Senpai',
    gender: 'female',
    city: 'Toronto',
    country: 'Canada',
    //object behaviour
    talk: function(){
        console.log('I am speaking something in JS class');
    },
    //arrow function (ES6 version of above traditional function definition)
    walk: () => console.log('I love walking around parks and other peaceful places'),
    teach: () => console.log('I can teach DSA and frontend concepts really well')
}

//access whole object
console.log('----printing whole object----');
console.log(person); 


//access specific property of the object
console.log('\n----printing specific object properties and usage----');
console.log(person.firstName);  // using . (dot) notation
console.log(person['country']); // using square brackets notation
console.log(person.talk()); // call usage (methods)

//create object properties on the go
console.log('\n----objects on the go----');
person.isStudying = false;
console.log(person.isStudying);
console.log(person); 

//add properties based on conditions
console.log('----adding properties based on conditions----');
if(person.firstName === 'Shushmita'){
    person.isStudying = false;
}
console.log(person);

console.log('\n----arrays are objects as well----');
//arrays are also objects
const arr = [1,2,3,4]; //where index => key | element => value
console.log('arr');

//-------------------- CREATING OBJECTS - WITH 'NEW' KEYWORD --------------------

const person1 = new Object({name:'Shushmita', isStudying:'true'});
console.log(person1.name);

//-------------------- CREATING OBJECTS - WITH OBJECT.CREATE() --------------------

/**  NOTE: Instructor had error so tried it myself
 * Instructor will update it on next class => UPDATE IT LATER********************
 * The Object.create() method creates a new object, using an existing 
 * object as the prototype of the newly created object.*/

const person2 = Object.create(person1); //Prototype object used here: person1
person2.name = 'Interstellar'; //must match the object prorerty of the prototype
console.log(person2); //output: { name: 'Interstellar' }
console.log(person2.name);

// Instructor version of above code
// VVIP: JS objects are mutable. They are addressed by reference and not by value
console.log('\n----anotherPerson----');
const anotherPerson = person; //2 different references to the same memory location
anotherPerson.city = 'Silicon Valley';
console.log(person);

//------------------------------ LOOPS AND OBJECTS ------------------------------

//Print every item in person object
//Access every 'Key'
console.log('----- Just the Keys -----');
for(let item in person){
    console.log(item);
}

console.log('----- The Keys and Values-----');
for(let item in person){
    console.log(item, '--->', person[item]); //pass index in square brackets
}

//------------------------------ NESTED OBJECTS ---------------------------------

const person = {
    //object properties: has multiple values / key:value pairs
    firstName: 'Sushi',
    lastName: 'Senpai',
    gender: 'female',
    //another object: working
    working: {organization: 'Amazon', basedIn: 'Toronto'}, 
    city: 'Toronto',
    country: 'Canada',
    //object behaviour
    talk: function(){
        console.log('I am speaking something in JS class');
    },
    //arrow function (ES6 version of above traditional function definition)
    walk: () => console.log('I love walking around parks and other peaceful places'),
    teach: () => console.log('I can teach DSA and frontend concepts really well')
}

console.log(person.working.basedIn);
console.log('The company where this person is working is based in', person.working.basedIn); //Dot(.) notation, more common
console.log('The company where this person is working is based in', person['working']['basedIn']); //Bracket notation

//------------------------------ IN-BUILT OBJECT METHODS ------------------------------

//Keys() Method => Pass object keys
console.log('-----keys()-----')
console.log(Object.keys(person));

//Values() Method => Pass object values
console.log('-----values()-----')
console.log(Object.values(person));

//Freeze() Method => Freezes your objects; does not let you change the contents of your object
console.log('-----freeze()-----')
Object.freeze(person);
person.city = 'Montreal';
console.log(person);

//getOwnPropertyNames() Method => Same as Object.keys()
console.log('-----getOwnPropertyNames()-----')
console.log(Object.getOwnPropertyNames(person));