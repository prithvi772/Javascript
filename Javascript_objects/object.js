// Objects=Objects are the collection of key-value pairs.It can store multiple values of diff types 
let country={
    1:"India",
    2:"America",
    3:"Europe",
    greet : function(){
        console.log("Hello there.");
    }

};
// Methods of objects.
console.log(Object.keys(country));
console.log(Object.values(country));
console.log("--------------------");
console.log(Object.entries(country));

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let student = new Person("Alice", 22);
console.log(student.age);
console.log(student.name);