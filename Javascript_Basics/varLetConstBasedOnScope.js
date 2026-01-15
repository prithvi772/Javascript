// Difference between Var,Let,and Const keyword.

//1)Scope:Scope means where the variable is accessible.

// Globally Declared variables
var p=2;
let q=20;
const r=200;

function test() {
  var a = 10;
  let b = 100;
  const c = 1000;
}
// console.log(a); Access not allowed outside the function.
// console.log(b); Access not allowed outside the function.
// console.log(c); Access not allowed outside the function.

//--------------------------------------------------------------------------

function test() {
  if (true) {
    var a = 10;
    let b = 100;
    const c = 1000;
  }
  // console.log(a);  ✅ Works (function scoped)
  // console.log(b);  ❌ Error (block scoped)
  // console.log(c);  ❌ Error (block scoped)
}
test();

//--------------------------------------------------------------------------
function test() {
  if (true) {
    var a = 10;
    let b = 100;
    const c = 1000;
    // console.log(a);  ✅ Works (function scoped)
    // console.log(b);  ✅ Works (function scoped)
    // console.log(c);  ✅ Works (function scoped)
  }
  // console.log(a);  ✅ Works (function scoped)
  // console.log(b);  ❌ Error (block scoped)
  // console.log(c);  ❌ Error (block scoped)
}
test();

//--------------------------------------------------------------------------

// Globally Declared variables are Acceesible Everywhere.

// console.log(p); //✅ Works Globally 
// console.log(q); //✅ Works Globally 
// console.log(r); //✅ Works Globally 


// 🧠 var works inside the whole function,
//  but let and const only work inside the block {}.