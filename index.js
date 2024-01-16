// console.log("This is Nodejs tutorial for beginers");
// console.log("This is the first tutorial on nodejs");
// console.log("we will cover nodejs here with commandline");
// //process.exit(0);
// //process.exitCode=1;
// const _=require("loadash");
// const arr= [1,4,6,8];
// console.log(_.last(arr));

// const cowsay= require("cowsay");
// console.log(cowsay.say({
//     text:"i am learning npm module ",
//     e:"00",
//     t:"U"
// }));



// // const car= require("./car");
// // console.log(car);

// // const {data}=require("./car");
// // console.log(data);

// // const {ford,tesla}=require("./car");
// // console.log(JSON.stringify(tesla));
// // console.log(JSON.stringify(ford));


// // const path=require("path");

// // const filePath="C:\Akrabhi_softlabs\nodejs-tutorial\files\sample.txt";

// // //directory 
// // console.log(path.dirname(filePath));
// // console.log(__dirname);
// // //basename
// // console.log(path.basename(filePath));
// // console.log(__filename);
// // //extension
// // console.log(path.extname(filePath));

// // const sampleFile="sample.txt";

// // console.log(path.join(dirname(filePath),sampleFile));

// // const fs=require("fs");
// const fsPromise=require("fs").promises;
// // // //console.log(fs);

// // //reading from a file
// // fs.readFile(filePath,"utf-8",(err,data)=>{
// //     if(err) throw new Error("Something went wrong");
// //     console.log(data.toString());
// // });

// // try{

// // const data=fs.readFileSync(path.join(__dirname,"files","sample.txt"),"utf-8");
// // console.log(data);
// // }catch(err){
// //     console.log(err);
// // }


// // const filereading=async()=>{
// //     try{
// //         const data=await fsPromise.readFile(filePath,{encoding:"utf-8"});
// //         console.log("fsPromises:",data);
// //     }catch(err){
// //         console.log(err);
// //     }
// // };

// // filereading();


// // //writting into a file
// // const txtFile=path.join(__dirname,"files","text.txt");
// // const content="i love nodejs";
// // fs.writeFile(textFile,content,(err)=>{
// //     if(err) throw new Error("Something went wrong");
// //     console.log("write operation completed.");
// // });







// const path = require('path');
// const fs = require('fs');

// // const txtFile = path.join(__dirname, 'files', 'text.txt');
// // const content = 'I love Node.js';

// // fs.writeFile(txtFile, content, (err) => {
// //     if (err) throw new Error('Something went wrong');
// //     console.log('Write operation completed.');
// //     fs.readFile(txtFile,"utf-8",(err,data)=>{
// //         if(err) throw new Error(err);
// //         console.log(data);
// //     });
// // });


// const writingFile =async()=>{
//     try{
//         await fsPromise.writeFile(txtFile,content);
//         await fsPromise.appendFile(txtFile,"\n this is append file");
//         const data= await fsPromise.readFile(txtFile);
// console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// writingFile();



// const fsPromise = require('fs').promises;
// const path = require('path');

// const txtFile = path.join(__dirname, 'files', 'text.txt');
// const content = 'I love Node.js';

// const writingFile = async () => {
//     try {
//         await fsPromise.writeFile(txtFile, "\n we gave m=new name ",{
//             flag:"a+"
//         });
//       //  await fsPromise.appendFile(txtFile, '\nThis is appended text.');
        
//       await fsPromises.rename(txtFile,path.join(__dirname,"files","newtxt.txt"));
//       const data = await fsPromise.readFile(  await fs.Promises.rename(txtFile,path.join(__dirname,"files","newtxt.txt")));
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// };

// writingFile();


const fsPromise = require('fs').promises;
const path = require('path');

const txtFile = path.join(__dirname, 'files', 'text.txt');
const newTxtFile = path.join(__dirname, 'files', 'newtxt.txt');
const content = 'I love Node.js';

const writingFile = async () => {
    try {
        await fsPromise.writeFile(txtFile, "\n we gave m=new name ", {
            flag: 'a'
        });
        
        // Uncomment the next line if you want to append more content
        // await fsPromise.appendFile(txtFile, '\nThis is appended text.');
        
        await fsPromise.rename(txtFile, newTxtFile);
        
        const data = await fsPromise.readFile(newTxtFile, 'utf-8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

writingFile();



