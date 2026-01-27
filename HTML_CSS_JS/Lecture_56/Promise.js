// let firstPromise= new Promise((resolve,reject)=>{
//     function sayName(){
//     console.log("My name is Shivam Upadhyay");
//     }

//     setTimeout(sayName,10000);
//     // resolve(1001);
//     // reject(new Error("Internal Server Error"));
// });

// let promise1 = new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Promise Fulfiled");
//     }
//     else{
//         reject("Promise Rejected");
//     }
// });

// promise1.then((message)=>{
//     console.log("Then ka message 1 "+message);
//     return 1;
// }).then((message)=>{
//     console.log("then ka msg 2: "+message)
//     return 3;
// }).catch((error)=>{
//     console.log("Error: "+error);
// });

let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
})
let promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second");
})
let promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"Third");
})
Promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.error("Error: "+error);
});