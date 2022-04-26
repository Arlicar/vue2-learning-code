import thenFs from 'then-fs'

// function getAllFile1(){
//     const r1 = thenFs.readFile('./file/1.text', 'utf8')
//     const r2 = thenFs.readFile('./file/2.text', 'utf8')
//     const r3 = thenFs.readFile('./file/3.text', 'utf8')
//     console.log(r1,r2,r3);
// }



// async function getAllFile2() {
//     const r1 = await thenFs.readFile('./file/1.text', 'utf8')
//     const r2 = await thenFs.readFile('./file/2.text', 'utf8')
//     const r3 = await thenFs.readFile('./file/3.text', 'utf8')
//     console.log(r1, r2, r3);
// }


// getAllFile1()
// getAllFile2()
// console.log('=====================================================')

//! 如果在function中使用了await，则function必须被async修饰
//! 在async方法中，第一个await之前的代码会同步执行，await之后的代码会异步执行
//* 举个例子
//* 试试看，猜猜输出顺序

console.log('=====================================================')
console.log('A')

async function getAllFile3(){
    console.log('B')
    const r1 = await thenFs.readFile('./file/1.text', 'utf8')
    const r2 = await thenFs.readFile('./file/2.text', 'utf8')
    const r3 = await thenFs.readFile('./file/3.text', 'utf8')
    console.log(r1,r2,r3)
    console.log('C')
}
getAllFile3()
console.log('D')

console.log('=====================================================')
