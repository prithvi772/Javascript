let arr=[1,2,3];
let sq=arr.map((ele,index)=>{
    console.log("Index:"+index);
    console.log(ele*ele)
    return ele*ele;
});
console.log(sq);