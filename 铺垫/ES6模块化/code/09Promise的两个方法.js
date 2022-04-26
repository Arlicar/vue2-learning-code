import thenFs from 'then-fs'


const Arry = [
    thenFs.readFile('./file/3.text', 'utf8'),
    thenFs.readFile('./file/2.text', 'utf8'),
    thenFs.readFile('./file/1.text', 'utf8')
]
//* all为等待机制

Promise.all(Arry).then(result => {
    console.log(result);
})

//* race为赛跑机制

Promise.race(Arry).then(result => {
    console.log(result);
})