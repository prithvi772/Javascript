// Difference between Var,Let,and Const keyword.

// Hoisting based on Reassignment & Redeclaration.


var x = 10;
var x = 20; // ✅ Re-declaration allowed
x = 30;     // ✅ Re-assignment allowed
// console.log(x);

Output:30

//--------------------------------------------------------------------------

let y = 10;
// let y = 20; // ❌ Re-declaration not allowed
y = 25;       // ✅ Re-assignment allowed
// console.log(y);
Output:25

//--------------------------------------------------------------------------

const z = 10;
// const z = 20; // ❌ Re-declaration not allowed
// z = 30;       // ❌ Re-assignment not allowed
