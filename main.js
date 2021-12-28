// const greet = (name) =>{
//     console.log(`hello ${name}`);
// }
// greet('khushbu');
// greet('pareek');
// global.setTimeout(() => {
//     console.log("in the timeout");
//     clearInterval(int);
// },2000 );
// const int= setInterval(() => {
//     console.log("in the intervel");
// }, 1000);
// const xyz=require('./people');
// console.log(xyz.arr);
// console.log(xyz.ages);
// const os=require('os');
// // console.log(os);
// console.log(os.homedir);
// const fs=require('fs');
// fs.readFile('./blog1.txt',(err,data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })
// fs.writeFile('./blog1.txt',"hello world", () => {
//     console.log("file is written");
// })
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("folder created");    
//    })
// } else {
//     fs.rmdir('./assets',() => {
//         console.log("folder deleted");
//     });
// }
// if(fs.existsSync('./deleteme.txt')){
//     fs.unlink('./deleteme.txt',(err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("file  deleted");
//     })
// }
const fs=require('fs');
const http=require('http');
const server=http.createServer( (req,res) => {
    console.log(req.url,req.method);
    res.setHeader('content-Type','text/html');
    // res.write('hello everyone');

//     });
// });
let path='./';
switch(req.url){
    case '/':
        path+='index.html';
        break;
    case '/about':
        path+='about.html';
        break;
    case 'aboutme':
        res.setHeader('location','./about');
    default :
        path+='404.html';
}
fs.readFile(path,(err,data) => {
            if (err){
                console.log(err);
                res.end();
            }
            // res.write(data);
        res
        .end(data);
        });
});
server.listen(3000,'localhost',() => {
    console.log('listening for requests on port 3000');

})
