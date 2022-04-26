//!按需导入的成员名称必须跟按需导出的成员名称一致
//*但可以通过as进行重命名
//*按需导入可以和默认导入一起使用
import info,{n1,n2 as str2,say} from './03按需导出.js'

console.log(n1);
console.log(str2);
console.log(say);
console.log(info);