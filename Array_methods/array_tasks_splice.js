// Insertion
let animals = ["Dog", "Cat", "Elephant"];
// Insert "Lion" at index 2
// Expected Output: ["Dog", "Cat", "Lion", "Elephant"]
let a= animals.splice(2,0,"Lion");
console.log("Array after adding lion:"+animals);
console.log(animals);

//Deletion
console.log("---------------------------------------------");       
let num=[1,2,3,4,5,6,7];
console.log(num);
num.splice(num.length-1,1);
console.log("After deleteing last element:")
console.log(num);


//Deletion at speicific index

num.splice(4,2);
console.log("After deleteing specific index element:")
console.log(num);
