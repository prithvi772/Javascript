class person{
    name;
    age;
    introduce(){
        console.log(`name:${this.name} age:${this.age}` );
    }
}
let obj=new person();
obj.name="prithvi";
obj.age=23;
obj.introduce();