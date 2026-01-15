// 🧩 3. Hoisting

// 📘 “Hoisting means variable declarations are moved to the top before execution.”
console.log(a); // ✅ undefined (var is hoisted)
var a = 10;

console.log(b); // ❌ ReferenceError
let b = 20;

console.log(c); // ❌ ReferenceError
const c = 30;

// 🧠 var is hoisted and initialized with undefined.
//  let and const are hoisted but not initialized — they stay in a “temporal dead zone” until declared.

// ✅ What you got RIGHT

// var → hoisted and initialized with undefined

// let & const → give ReferenceError

// Temporal Dead Zone (TDZ) mention → ✅ very good (many candidates miss this)

//--------------------------------------------------------------------------

// ❗ Important correction (INTERVIEW CRITICAL)
// ❌ “hoisting is not possible with let and const”
// ✅ Correct truth:
// 👉 let and const ARE hoisted, but NOT initialized.
// That’s why they throw ReferenceError, not because they are “not hoisted”.
// 🧠 How to say this in an interview (PERFECT ANSWER)
// “Hoisting is JavaScript’s behavior where variable and function declarations are moved to the top of their scope during compilation. 
// Variables declared with var are hoisted and initialized with undefined. 
// Variables declared with let and const are also hoisted, but they are not initialized and remain in the temporal dead zone until their declaration is evaluated, which results in a ReferenceError if accessed earlier.”

// 🔍 Why let/const give ReferenceError (not undefined)

// Because:
// They exist in memory
// But cannot be accessed
// Until execution reaches their declaration
// This prevents bugs 👌
// ⚠️ Interview trap warning
// If you say:
// “let and const are not hoisted”
// ❌ interviewer may stop you there.
// Always say:
// “They are hoisted but in TDZ.”

// ✅ Final Verdict
// 🟢 Concept: 8.5 / 10
// 🟢 Interview readiness after correction: 10 / 10


// ✅ Correct understanding (clear & accurate)

// let and const are present in memory (hoisted)
// Before declaration → ❌ ReferenceError (Temporal Dead Zone)
// After declaration → ✅ accessible and show the correct value
// So the key point is WHEN you access them.

// 🧠 Interview-ready corrected version (say this 👇)

// “let and const are hoisted and stored in memory, 
// but they are not accessible before their declaration due to the temporal dead zone. 
// Accessing them before declaration throws a ReferenceError, and only after declaration 
// they hold and return their actual values.”

// 🧪 Simple timeline to remember
// // TDZ starts
// console.log(b); // ❌ ReferenceError
// let b = 20;     // TDZ ends
// console.log(b); // ✅ 20


// Think of TDZ as:

// “Variable exists, but JS says: don’t touch yet 🚫”