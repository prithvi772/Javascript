class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    show(){
        console.log(`name:${this.name} age:${this.age}`);
    }
}
let obj=new person("prithvi",23);
obj.show();
