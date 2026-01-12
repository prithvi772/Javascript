let arr=[1,2,3,4];

function sum(a){
    let s=0;
    for(let i=0;i<a.length;i++){
        s=s+a[i];
    }
    console.log(`Sum is :${s}`);
}
sum(arr);
// Now this the traditional way of calculating sum.

let a=arr.reduce((accumulator,current)=>{
    return accumulator+=current;
   
},0);
console.log("Sum:"+a);

//This is the modern way.

let c=arr.reduce((acc,curr) => acc+=curr,0)
console.log("Sum of array:"+c);

// This is most used.


// NOW let's find Maximum element in the given array.

function Max(a){
    let max=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>max){
            max=a[i];
        }
    }
    console.log("Max ele:"+max) // Here the max no. 4 gets store even if u initialize it 
                                // with zero first.



}
Max(arr);

//This is the traditional way of finding MAX

let d=arr.reduce((accumulator,current)=>{
    if(current>accumulator){
        accumulator=current;
    }
    return accumulator;

},0);
console.log("Maximum no:"+d);