// console.log("Task start");
// function asyncTask(cb){
//     console.log("task Running");
//     setTimeout(cb,5000);
// }

// asyncTask(()=>console.log(name));
// console.log("task end");
// const name= "Dipti";



// function asyncTask(cb){
//     setTimeout(()=>{
//         cb("iou","this is server data");
//     },0);
// }

// asyncTask((err,data)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log("data",data);
//     }
// });


function asyncTask(cb){
        setTimeout(()=>{
            console.log("this is async task execution");
       },0)
}

function makeApiCall(cb){
    setTimeout(()=>{
        console.log("this is async task execution");
    },0)
}


// console.log("this is async task execution"); 
// console.log("this is async task execution");


makeApiCall(()=>{
    makeApiCall(()=>{
        asyncTask(()=>{
            asyncTask(()=>{
               asyncTask(()=>{}) 
            })
        })
    })
})