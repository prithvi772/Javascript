//Returning a inner function with the help of outer function with the inner functions scope is 
//what we call as Closure.

function outer(){
    let counter=0;
    //this is a closure
    function inner(){
        counter++;
        console.log(counter);
    }
    return inner;
    //till here
    //But the inner function can access the variable of the outer function even after 
    //the outer function completes its excecution
}
const f=outer();//Like the outer func has completed the execution but the inner func f() can stil execute.
//Now it will remember the value which was incremented first.
f();
f();

