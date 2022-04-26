import thenFs from 'then-fs'

thenFs.readFile('./file/1.text','utf8').then((r1) => {console.log(r1);})
thenFs.readFile('./file/2.text','utf8').then((r2) => {console.log(r2);})
thenFs.readFile('./file/3.text','utf8').then((r3) => {console.log(r3);})

//! 因为是异步，所以输出会无序