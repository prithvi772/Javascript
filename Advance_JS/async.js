function display(Id){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
    
            console.log("data",Id);
            resolve("Ok done");// this needs to be resolved
            reject("Not ok");
        },2000);
    });


}

async function hello(){
    console.log("Fetching data 1...");
    await display(1);
    console.log("Fetching data 2...");
    await display(2);  
    console.log("Fetching data 3...");
    await display(3);
}
hello();