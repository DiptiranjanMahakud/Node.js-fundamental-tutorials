// const promise = new Promise((resolve,reject)=>{
//     console.log("Async task execution");
//     throw "err";
//     if(false){
//         const person={name:"Dips"};
//         resolve(person);
//     }else{
//         const error={errCode: "1001"};
//         reject(error);
//     }
// });

// promise
//   .then((val)=>{
//     console.log(val);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
//   .finally(()=>{
//     console.log("clean up");
//   });


// let p=Promise.resolve("execution is done");
// //let p=Promise.reject("execution rejected");
// p.then((val)=>console.log(val));


// function asyncTask(){
//     return Promise.resolve();
// }
// asyncTask().then(()=>console.log(name));
// const name="Dipti";

// const p= Promise.resolve("done1");

// p.then((val)=>{
//     console.log(val);
//     return "done2";
// }).then((val)=>{
//     console.log(val);
//     return "done3";
// }).then((val)=>console.log(val))
// .catch((val)=>console.log(val));


// const makeApiCall=(time)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("this api executed in :"+time);
//         },time);
//     });
// };

// let multiApiCall =[makeApiCall(1000),makeApiCall(2000),makeApiCall(3000)];
// Promise.all(multiApiCall).then((values)=>{
//     console.log(values);
// });

// Promise.race(multiApiCall).then((value)=>{
//     console.log(value);
// });









const userLogin=()=>{
    console.log("Enter username and Password");
    let username=prompt("enter username:");
    let password=prompt("enter password:");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Performing user Authentication");
            if(username === "dipesh" && password==="dipesh")
            resolve("user Authenticated");
            else{
                reject("authentication failed");  
            }
        },1000);
    });
};

// function goToHomePage(userAuthstatus){
//     return Promise.resolve(`go to gomepage as: ${userAuthstatus}`);
// }

// userLogin().then((response)=>{
//     console.log("Validated user");
//     goToHomePage(response);
// }).then((userAuthstatus)=>{
//     console.log(userAuthstatus);
// });





















async function performTask(){
    try{
        const response= await userLogin();
        console.log("validated user");
        const userAuthStatus =await goToHomePage(response);
        console.log(userAuthStatus);
    }catch(err){
        console.log(err);
    }
}
performTask();
