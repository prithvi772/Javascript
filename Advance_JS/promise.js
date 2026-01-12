function fetchdata(){
    return new Promise((reject,resolve)=>{
        let success=true;
        setTimeout(()=>{

            if(success){
                resolve("Successfull");
            }
            else{
    
                reject("Failed");
            }
        },2000);
        // console.log("Successful fetched..");

    });
}
let p1=fetchdata();
console.log("Fetching data wait....");
p1.then((res)=>{
    console.log(res);
});
p1.catch((res1)=>{
    console.log(res1);
})
