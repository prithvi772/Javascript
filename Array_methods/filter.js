let arr=[1,2,3,4,5];
let a=arr.filter((ele,index)=>{
    let b;
    if(ele%2==0){
        b=ele;
        console.log(`Even no. are ${ele}`);
    }
    return b;
})
console.log(a);