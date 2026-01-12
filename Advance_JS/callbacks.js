function greet(name,a){
    console.log("Hello,"+ name);

    a();// Synchronous

    // Asynchronous method :-setTimeout(a,2000);
}
function b(){
    console.log("How are u");
}
greet("Alice",b);