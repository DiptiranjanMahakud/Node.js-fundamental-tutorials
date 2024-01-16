const makeApiCall=(time)=>{
    return ()=> new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("this api executed in :"+time);
        },time);
    });
};

const apiRequests=[makeApiCall(1000),makeApiCall(2000),makeApiCall(3000)];

// let multiApiCall =[makeApiCall(1000),makeApiCall(2000),makeApiCall(3000)];
// Promise.all(multiApiCall).then((values)=>{
//     console.log(values);
// });


(async function(){
    for(let request of apiRequests){
        console.log(await request());
    }

})();