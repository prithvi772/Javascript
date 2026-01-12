// objects are the collection of the key value pairs.It can store multiple values of different types
//Keys are in strings whereas values can be of diff types.
let hobbies={
    1:"read",
    2:"walk",
    3:"Write",
    a:"hello",
    hi:()=>{
        console.log("Hello there.");
    }
}

console.log(hobbies[1]);
console.log("---------------------------");
console.log(Object.keys(hobbies));
console.log(Object.values(hobbies));//Object's O is capital.
console.log("---------------------------");
console.log(Object.entries(hobbies));

// Dot notation (.) only works with valid variable-like property names, 
// whereas bracket notation ([]) works for all property names, including those that are:
// Numbers (1, 2, etc.)
// Special characters (-, spaces, etc.)
// Reserved words (rare cases)
