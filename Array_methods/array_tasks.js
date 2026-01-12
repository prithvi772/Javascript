let students = ["Amit", "Riya", "John", "Amit", "Sara", "Riya"];
// Find the first index of "Riya".
console.log("First occurence of Riya is at:"+students.indexOf("Riya"));
// Find the last index of "Amit".
console.log("Last occurence of Amit is:"+students.lastIndexOf("Amit"));
// Check if "Sam" exists in the array.
let a=students.indexOf("Sam");
if(a!=-1){
    console.log("Sam Exits.")
}
else{
    console.log("Sam does not exit.")
}
// If "John" exists, print: "John is in the list".
let b=students.indexOf("John");
if(b!=-1){
    console.log("John is in the list.")
}
else{
    console.log("John is not in the list.")
}