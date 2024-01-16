// console.log("task1");
// console.log("task2");
// console.log("task3");



// console.log("start operation");

// function sleep(miliseconds){
//     let startTime=new Date().getTime();
//     console.log("operation is running");
//     while(new Date().getTime()<startTime +miliseconds){
//         console.log("operation in progress");
//     }
//     console.log("operation is done");
// }
// sleep(1000);

// console.log("do something else");



console.log("start operation");

function sleep(miliseconds){
    console.log("operation is running");
    setTimeout(()=>{
        console.log("operation is done")
    },miliseconds);
}
sleep(1000);

console.log("do something else");