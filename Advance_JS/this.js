"use strict";

//this in a global scope 
console.log(this);
//So by defalut it depends on where you run on console its window object.

//this inside a function 

function x(){
    console.log(this);// Here the value depends on strict/non-strict mode.
}
x();