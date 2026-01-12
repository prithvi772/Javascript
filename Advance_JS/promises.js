function a(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{      // here when we used setTimeout it became asynchronous.
        console.log("This is data1.");
        let hi=true;
        if(hi){
            setTimeout((()=>{resolve("Successfully fetched data1.");}),2000);
        }else{

            reject("successfully failed.");
        }

        },3000);

    }) // no req semicolon for promises
}
console.log("Fetching data1....");
let p=a();
p.then((res1)=>{  // res1 is just a placeholder for whatever we write in resolve.
    console.log(res1);
});
p.catch((res1)=>{  // res1 is just a placeholder for whatever we write in reject.
    console.log(res1);
});
p.finally(()=>{
    console.log("resolved or rejected I don't care the task needs to be closed.");
})
