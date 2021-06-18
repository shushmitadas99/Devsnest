//-------------------| JS ARRAYS |-----------------------

console.log('------ Arrays ------');
console.log('|| Methods for accessing elements: ')
/*Array is a DS used to manipulate and manage elements in a give list of same data types of items 
**indexed (starting at 0) at a particular position.*/

a1 = [10,1,12,30,46]
b1 = [6,7,8,9]
c1 = [1,1,1,1]

//Accessing elements => must know index of that specific element
console.log(a1[4]);

//Array Basic Methods: concat,join,slice,indexOf,lastIndexOf
console.log('--- Concat() ---'); //adding both array elements together
console.log(a1.concat(b1)); //returns new array

console.log('--- Join() ---'); //join each array element and represent it as a string
console.log(a1.join(' ')); //return a String

console.log('--- Slice() ---'); //takes starting index and ending index for slicing - does not include ending index element
console.log(a1.slice(1,4)); //returns new array[]

d1 = [10,1,12,30,30,30,30,30,30,46]
console.log('--- indexOf() ---');
console.log(d1.indexOf(30)); //extract the index(first) position of a known element value

console.log('--- lastIndexOf() ---');
console.log(d1.lastIndexOf(30)); //extract the index(last) position of a known element value

//---------------------- Iterating List -----------------------
console.log('|| Methods for iterating through an array: ');

a1 = [10,1,12,30,46]
b1 = [6,7,8,9]
c1 = [1,1,1,1]

console.log('--- forEach() iteration ---');
a1.forEach((item, index)=>{
    console.log(item, index);
});

console.log('--- for(of) iteration ---');
for(let index of a1){
    console.log(index) //prints values present (index for naming only)
    //would need some complex method to access element index position such as another forEach loop
}

console.log('--- for(in) iteration ---');
for(let index in a1){
    console.log(index, a1[index]); //prints index and elements
}

console.log('--- typical for() loop ---');
for(let i=0; i<a1.length; i++){
    console.log(i,a1[i]);
}
//-----------------------------------------------------------------------------------------------

//--------------- some() ---------------
a1 = [10,1,12,30,46]
console.log('--- some() ---');
console.log(a1.some(item => item === 10));
//some: return true if any element of the array matches the condition specified

//--------------- every() ---------------
c1 = [1,1,1,1]
console.log('--- every() ---');
console.log(c1.every(item => item === 1));
//every: return true if all elements of the array match the condition specified

//--------------- filter() ---------------
a1 = [10,1,12,30,46]
console.log('--- filter() ---');
console.log(a1.filter(item => item === 12)); //returns new array
//filter: return new array of elements matching the condition specified

//--------------- map() ---------------
console.log('--- map() ---');
console.log(a1.map(item => console.log(item))); //similar to forEach()
console.log(a1.map(item => item = 20)); //returns new array setting condition
//map: return new resultant array of elements with operations performed for each element

//--------------- reduce() ---------------
console.log('--- reduce() ---');
const reduceFn = a1.reduce((acc,item)=>{
    acc = acc+item;//acculumator saves the result of sum(any operation)
    return acc;
}, 0)//initial stage is 0  
//reduce: reduces list to a single value
console.log(reduceFn);//prints sum of all elements

//---------------------------- Mutating List -------------------------------------------------------------------

console.log('|| Methods for iterating through an array: ');

//--------------- pop() ---------------
var e1 = [6,7,8,9]
console.log('--- pop() ---');
console.log(e1.pop()); //returns last element and changes array (pops the last element - stack)
console.log(e1);

//--------------- push() ---------------
console.log('--- push() ---');
console.log(e1.push(10)); //returns new length of the array

//--------------- slice() | reverse() ---------------

console.log('--- slice()->clone | reverse() ---');
//cloning array
var e1 = [6,7,8,9]
const f1 = e1.slice(0); //not passing a 2nd arg for slice will copy over the entire array
console.log(e1, ' => original array'); //original array
console.log(e1.reverse(), ' => new reversed array'); //reverse() => changes the original array

//--------------- sort() ---------------
console.log('--- sort() ---');
list = ['a','c','b','z','n','x'] //works great with string list
list1 = [1,11,2] //no sorting done for numbered list
console.log(list.sort());
console.log(list1.sort()); //sorts based on numeric codes (not proper sorting)

//Proper Numeric list sort => use of function required
console.log(list1.sort((a,b) => a-b)); //if a-b > 0 => swap values | else => don't swap
console.log(list1.sort((a,b) => b-a)); //descending sort

//--------------- splice() ---------------

/**The splice() method changes the contents of an array by removing or replacing existing 
 * elements and/or adding new elements in place. To access part of an array without 
 * modifying it, see slice(). */

g1 = [10,1,12,30,46]
console.log('--- splice() ---'); // !!!do not confuse with slice()!!!
console.log(g1, ' => original array');
console.log(g1.splice(2,1,0), ' => deleted'); // args: start index - delete count - items
console.log(g1, ' => spliced array');

//--------------- unshift() ---------------
console.log('--- unshift() ---'); //appends element at the start of the the array
//similar to push()
console.log(g1.unshift(40)); //returns the new length of array
console.log(g1);

//--------------- shift() ---------------
console.log('--- shift() ---'); //appends element at the start of the the array
//similar to pop() but removes element from front instead of end like pop() does
console.log(g1.shift(40)); //returns the new length of array
console.log(g1);


//---------------------------- General -------------------------------------------------------------------

/**Methods discussed: toString() | toLocalString() | find() | isArray | sort | splice | length
 * Most methods were discussed earlier in the day 5 section or earlier in today's (day 6) section of frontend
*/

//--------------- isArray ---------------

console.log('--- isArray ---'); //checks whether the given element is an array (similar to isNaN)
h1 = 'This is a string'
console.log(Array.isArray()); // prints false => since its a string
g1 = [10,1,12,30,46]
console.log(Array.isArray(g1)); //prints true => since its an array
