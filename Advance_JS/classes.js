class hello{
    constructor(name,age){
        this.name=name;
        this.age=age;
        console.log(`My name is ${this.name}`);
    }
}

let obj=new hello("Prithvi",21);
console.log("Age is :",obj.age);