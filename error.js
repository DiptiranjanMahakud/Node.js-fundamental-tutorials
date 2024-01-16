// const error = new Error("something went wrong");
// //console.log(error.stack);
// // console.log(error.message);
// // throw new Error("i am error object");


// // const {CustomError}=require("./CustomError");
// // throw new CustomError("this is custom error");

// // try{
// //     doSomething();
// // }catch(e){
// //     console.log("Error Occured");
// //     console.log(e);
// // }

// function doSomething()
// {
//     const error = fetch("localhost:3000/api");
//     //console.log("i am from doSomething function");
//     const data="i am from doSomething function";
//     return error;

// }

// //uncaught exception
// // process.on("uncaughtException",(err)=>{
// //     console.log("there was a uncaught exception");
// //     process.exit(1);
// // });



// // doSomething();


// // //exception with promises
// // const promise= new Promise((resolve, reject)=>{
// //     if(true){
// //         resolve(doSomething());
// //     }else{
// //     reject(doSomething());
// //     }
// // });

// // promise.then((val)=>{
// //     console.log(val);
// // }).catch((err)=>{
// //     console.log("Error Occured");
// //     console.log(err);
// // });


// const someFunction = async () => {
//     try{
//         await doSomething();
//     }catch(err){
//         throw new CustomError(err.message);
//     }
// };

// someFunction();
