import thenFs from 'then-fs'

thenFs.readFile('./file/1.text','utf8').then((r1)=>{
    console.log(r1);
    return thenFs.readFile('./file/2.text','utf8');
    //!这里return出去的是个Promise对象，所以之后还可以继续跟then
}).then((r2)=>{
    console.log(r2);
    return  thenFs.readFile('./file/3.text','utf8');
}).then((r3)=>{
    console.log(r3);
})